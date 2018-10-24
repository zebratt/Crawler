const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')
const args = require('node-args')

const url = 'http://ename.dict.cn/list/all/N/3'

async function init() {
    const res = await axios.get(url)
    const $ = cheerio.load(res.data)

    const rows = []
    const trs = $('.enname-all tbody tr')

    trs.each((idx, tr) => {
        if (idx === 0) {
            return
        }

        const cols = []

        tr.children.filter(td => td.type === 'tag').forEach((td, idx) => {
            switch (idx) {
                case 0:
                    if(args.a == 0){
                        cols.push(cheerio.load(td.children[0]).text())
                    }
                    break
                case 1:
                    const sexMap = {
                        'male': '男',
                        'female': '女',
                        'neutral': '男/女'
                    }
                    if (args.a == 1) {
                        cols.push(sexMap[td.children[0].attribs.class])
                    }
                    break
                case 2:
                    if(args.a == 2){
                        cols.push(cheerio.load(td.children[0]).text())
                    }
                    break
            }
        })

        rows.push(cols)
    })

    writeToFile(rows)
}

function writeToFile(data){
    let content = ''

    for(let i=0; i<data.length; i++){
        content += data[i].join(' ');
        content += '\n'
    }

    fs.writeFileSync('./names.txt', content, {flag: 'w'})
}

init()

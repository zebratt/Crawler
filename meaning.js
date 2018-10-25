const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')
const url = 'http://ename.dict.cn/'

function sleep(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

async function init() {
    const content = []

    for (let i = 0; i < names.length; i++) {
        await sleep(200)

        const res = await axios.get(url + names[i])
        const $ = cheerio.load(res.data)
        const meaning = $('.forsearch dd ul li')
            .eq(1)
            .children()
            .eq(1)
            .text()

        console.log(names[i], ' ', meaning)

        content.push(meaning)
    }

    fs.writeFileSync('./meanings.txt', content.join('\n'), { flag: 'w' })
}

const names = [
    'Gabriel',
    'Gabrielle',
    'Gage',
    'Gail',
    'Gaines',
    'Gale',
    'Galen',
    'Gallagher',
    'Galloway',
    'Gamble',
    'Gant',
    'Gardner',
    'Garfield',
    'Garland',
    'Garner',
    'Garnet',
    'Garnett',
    'Garrett',
    'Garrison',
    'Garry',
    'Garth',
    'Gary',
    'Gates',
    'Gavin',
    'Gay',
    'Nadine',
    'Nan',
    'Nana',
    'Nance',
    'Nancy',
    'Nanette',
    'Nannie',
    'Naomi',
    'Napier',
    'Napoleon',
    'Nash',
    'Natalia',
    'Natalie',
    'Nathalie',
    'Nathan',
    'Nathanael',
    'Nathaniel',
    'Naylor',
    'Neal',
    'Ned',
    'Neely',
    'Neil',
    'Nell',
    'Nellie',
    'Nelly',
    'Queenie',
    'Quentin',
    'Quick',
    'Quincy',
    'Quinn',
    'Quintin',
    'Quinton',
    'Rachel',
    'Rae',
    'Raines',
    'Rainey',
    'Raleigh',
    'Ralph',
    'Ramona',
    'Ramsey',
    'Randal',
    'Randall',
    'Randell',
    'Randle',
    'Randolph',
    'Randy',
    'Rankin',
    'Ransom',
    'Raphael',
    'Ratliff',
    'Raven',
    'Ray',
    'Raye',
    'Raymond',
    'Rea',
    'Read',
    'Reagan',
    'Reaves',
    'Reba',
    'Rebecca',
    'Rebekah',
    'Redd',
    'Newby',
    'Newell',
    'Newman',
    'Newsome',
    'Newton',
    'Nichol',
    'Nicholas',
    'Nichols',
    'Nicholson',
    'Nick',
    'Nickerson',
    'Nicol',
    'Nicola'
]

init()

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
        sleep(300)

        const res = await axios.get(url + names[i])
        const $ = cheerio.load(res.data)
        const meaning = $('.forsearch dd ul li').eq(1).children().eq(1).text()

        console.log(names[i], ' ', meaning);

        content.push(meaning)
    }

    fs.writeFileSync('./meanings.txt', content.join('\n'), {flag: 'w'})
}

const names = [
    'Yarbrough',
    'Yates',
    'Yeager',
    'Yolande',
    'Yong',
    'York',
    'Young',
    'Yvette',
    'Yvonne',
    'Zachariah',
    'Zachary',
    'Zack',
    'Zandra',
    'Zapata',
    'Zena',
    'Zenia',
    'Zenobia',
    'Ziegler',
    'Zoe',
    'Zola',
    'Pace',
    'Pack',
    'Padgett',
    'Pagan',
    'Page',
    'Paige',
    'Painter',
    'Palmer',
    'Pam',
    'Pamela',
    'Pandora',
    'Pansy',
    'Parham',
    'Paris',
    'Parish',
    'Kaley',
    'Kali',
    'Kane',
    'Karan',
    'Karen',
    'Karin',
    'Karl',
    'Karla',
    'Karol',
    'Kate',
    'Katharine',
    'Katherine',
    'Kathie',
    'Kathleen',
    'Kathryn',
    'Aalto',
    'Aaron',
    'Ab',
    'Abadam',
    'Abbado',
    'Abbas',
    'Abbe',
    'Abbet',
    'Abbey',
    'Abbot',
    'Abbott',
    'Abbs',
    'Abby',
    'Abdey',
    'Abdie',
    'Earl',
    'Earle',
    'Early',
    'Eason',
    'Easter',
    'Eastman',
    'Eaton',
    'Ed',
    'Eda',
    'Eddie',
    'Eddy',
    'Eden',
    'Edgar',
    'Edie',
    'Edison',
    'Oakes',
    'Oakley',
    'Ochoa',
    'Octavia',
    'Odell',
    'Odette',
    'Odom',
    'Ogden',
    'Olga',
    'Olive',
    'Oliver',
    'Olivia',
    'Ollie',
    'Olympia',
    'Opal',
    'Park',
    'Parker',
    'Parks',
    'Parnell',
    'Parr'
]

init()
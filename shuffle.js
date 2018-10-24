const fs = require('fs')

const c = [
    '乐观开朗',
    '成熟稳重',
    '温柔体贴',
    '活泼可爱',
    '善解人意',
    '风趣幽默',
    '心地善良',
    '为人正直',
    '乐于助人',
    '聪明睿智',
    '桀骜不驯',
    '积极进取',
    '天真无邪',
    '温文尔雅',
    '古灵精怪',
    '随遇而安',
    '追求完美',
    '诚实可靠',
    '冰雪聪明'
]

function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10)
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
        default:
            return 0
    }
}

let content = ''

for (let i = 0; i < 100; i++) {
    const idx = randomNum(0, 18)
    content += c[idx]
    content += '\n'
}

fs.writeFileSync('./chars.txt', content, {flag: 'w'})

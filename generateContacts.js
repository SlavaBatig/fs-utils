const fs = require('fs'),
      fake = require('faker')

const COUNT = +process.env.COUNT || 100

const stream = fs.createWriteStream(`${COUNT}.csv`)

const locales = [ 'EN', 'NL', 'RU' ]

let tags = ''

const numbers = '0123456789'
const length = 7

const generate = () => {
  let result = '+38099'
  for (let i = 0; i < length; i++) {
    result = `${result}${numbers.charAt(Math.floor(Math.random() * numbers.length))}`
  }

  return result
}

// for (let i = 0; i < 1; i++) {
//   tags = tags.concat(`,tag ${fake.lorem.word()}`)
// }

tags = `${tags}`

stream.write('full name,phone number,first name,last name,language' + tags + '\n')

for (let i = 0; i < COUNT; i++) {
  stream.write(`${fake.name.findName()},${generate()},${fake.name.firstName()},${fake.name.lastName()},${locales[Math.floor(Math.random() * Math.floor(3))]},${fake.lorem.word()},${tags}\n`)
}

stream.end()

console.log('done')

const fs = require('fs'),
  fake = require('faker')

const stream = fs.createWriteStream('25k.csv', { flags: 'a' })

const locales = ['EN', 'NL', 'RU']

let tags = ''

const numbers = '0123456789'
const length = 17

const generate = () => {
  let result = ''
  for (let i = 0; i < length; i++) {
    result = `${result}${numbers.charAt(Math.floor(Math.random() * numbers.length))}`
  }

  return result
}

for (let i = 0; i < 20; i++) {
  tags = tags.concat(`,tag ${fake.lorem.word()}`)
}

tags = `${tags}`

stream.write('full name,phone number,first name,last name,language' + tags + '\n')

for (let i = 0; i <= 25000; i++) {
  stream.write(`${fake.name.findName()},${generate()},${fake.name.firstName()},${fake.name.lastName()},${locales[Math.floor(Math.random() * Math.floor(3))]},${fake.lorem.word()},${tags}\n`)
}

stream.end()

console.log('done')

/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function a(a, b) {
  return a + b
}

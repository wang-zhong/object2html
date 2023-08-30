const { getFileNameFromArguments, getObjectFromFile, generateHTML } = require('../index.js')

const filename = getFileNameFromArguments()
const object = getObjectFromFile(filename)
console.log(generateHTML(object))

const { getFileNameFromArguments, getObjectFromFile, generateHTML } = require('@wang-zhong/object2html')

const filename = getFileNameFromArguments()
const object = getObjectFromFile(filename)
console.log(generateHTML(object))

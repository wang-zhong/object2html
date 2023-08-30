const fs = require('fs')

exports.getObjectFromFile = function(file) {
  try {
    const obj = fs.readFileSync(file, { encoding: 'utf8' })
    return JSON.parse(obj)
  } catch (err) {
    console.log(err)
    return null
  }
}

exports.getFileNameFromArguments = function() {
  const arguments = process.argv
  if (arguments.length > 2) {
    return arguments[arguments.length - 1]
  }
  return null
}

function generateHTML(object, indent = '') {
  let html = ''
  html += `${indent}<${object.tag}`

  if (object.style && typeof object.style === 'object') {
    const styleString = Object
      .keys(object.style) 
      .map(key => `${key}: ${object.style[key]}`)
      .join('; ')
    html += styleString ? ` style="${styleString}"` : ''
  }

  const attributesString = Object
    .keys(object)
    .filter(key => typeof object[key] !== 'object' && !['text', 'tag'].includes(key))
    .map(key => `${key}="${object[key]}"`)
    .join(' ')
  html += attributesString ? ` ${attributesString}` : ''
  html += '>\r\n'

  if (object.text) {
    html += `${indent}  ${object.text}\r\n`
  }

  if (object.children) {
    html += object.children.map(obj => generateHTML(obj, indent + '  ')).join('')
  }

  html += `${indent}</${object.tag}>\r\n`

  return html
}
exports.generateHTML = generateHTML
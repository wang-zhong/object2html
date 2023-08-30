# object2html

Simple html generator that reads JSON object from text file and generate html

## Installation

```
npm i @wang-zhong/object2html
```

## How to use in the code

```
const { getFileNameFromArguments, getObjectFromFile, generateHTML } = require('@wang-zhong/object2html')

const filename = getFileNameFromArguments()
const object = getObjectFromFile(filename)
console.log(generateHTML(object))
```

## Run the code in the cli

```
node index.js object.txt
```

## Note
`object.txt` file should contain valid json object

## Contact
- wang.zong015@gmail.com
- [https://www.linkedin.com/in/zhong-wang-536339141/](https://www.linkedin.com/in/zhong-wang-536339141/)

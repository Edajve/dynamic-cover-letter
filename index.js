const { readFile, writeFile } = require('fs')

const filePath = 'cover_letter.txt'

writeFile(filePath, `Test`, (err, result) => {
    if (err) return `Error: ${err.message}`
    console.log(result)
})



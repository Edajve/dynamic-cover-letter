const { writeFile } = require('fs')
const { coverMaker } = require('./cover-creator')

const filePath = 'cover_letter.txt'

writeFile(filePath, coverMaker, (err, result) => {
    if (err) return `Error: ${err.message}`
    console.log("Written successfully..")
})

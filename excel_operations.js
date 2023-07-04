const { writeFile, readFile } = require('fs').promises
const { createWriteStream } = require('fs')
const officegen = require('officegen');

const writeToExcel = async (path, coverFunc, template) => {
    try {
        await writeFile(path, coverFunc(template))
    } catch (error) {
        console.log(error)
    }
}

const saveDocument = async (text, fileToSave, companyName) => {
     const docx = officegen('docx');

     const paragraph = docx.createP();
     paragraph.addText(text);
 
     const fileName = `${companyName}-cover-letter.docx`;
     const outputPath = `${fileToSave}/${fileName}`;
     const outputStream = createWriteStream(outputPath);
     docx.generate(outputStream);
     outputStream.on('close', function() {
        console.log('Output file saved successfully.');
     });
}

const readAndSaveDocxFile = async (theFilePath, outputDirectory, companyName ) => {
    readFile(theFilePath, 'utf-8')
    .then(result => {
        saveDocument(result, outputDirectory, companyName)
    })
    .catch(err => console.log(err.message)) 
}

const writeAndSaveCoverLetter = async (
    textFilePath,
    coverLetterFunc,
    template,
    saveDirectory,
    companyName
) => {
    await writeToExcel(textFilePath, coverLetterFunc, template)
    await readAndSaveDocxFile(textFilePath, saveDirectory, companyName)
}

module.exports = { writeAndSaveCoverLetter };
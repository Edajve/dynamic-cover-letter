const { writeFile, readFile } = require('fs').promises
const { createWriteStream, readdir } = require('fs')
const officegen = require('officegen');

const writeToExcel = async (path, coverFunc, template) => {
    try {
        await writeFile(path, coverFunc(template))
    } catch (error) {
        console.log(error)
    }
}

const saveDocument = (text, fileToSave, companyName) => {
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

const readAndSaveDocxFile = (theFilePath, outputDirectory, companyName ) => {
    readFile(theFilePath, 'utf-8')
    .then(result => {
        saveDocument(result, outputDirectory, companyName)
    })
    .catch(err => console.log(err.message)) 
}

const alreadyApplied = async (companyApplying) => {
    const directory = "./allTxt";
    let isAlreadyAppliedFor = false;

    try {
        const files = await new Promise((resolve, reject) => {
            readdir(directory, (err, files) => {
                if (err) reject(err)
                else resolve(files)
            });
        });

        for (let i = 0; i < files.length; i++) {
            const existingCompany = files[i].split(".")[0].split("_")[0];
            if (existingCompany === companyApplying) {
                isAlreadyAppliedFor = true;
                break;
            }
        }
    } catch (err) {console.error('Error reading directory:', err);}

    return isAlreadyAppliedFor;
};

const writeAndSaveCoverLetter = async (
    textFilePath,
    coverLetterFunc,
    template,
    saveDirectory,
    companyName
) => {
    if (await alreadyApplied(companyName)){
        console.log("Company was already applied for")
    } else {
        await writeToExcel(textFilePath, coverLetterFunc, template)
        await readAndSaveDocxFile(textFilePath, saveDirectory, companyName)
    }    
}

module.exports = { writeAndSaveCoverLetter };
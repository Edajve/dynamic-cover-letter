const { writeFile, readFile } = require('fs').promises
const { createWriteStream } = require('fs')
const coverMaker = require('./cover-creator')
const { localSecrets } = require('./secrets/ppi')
const formatDate = require('./helpers')
const officegen = require('officegen');

const template = {
    companyName: "skye",
    positionTitle: "cheater",
    recipientsJobTitle: "HR Department",
    fullName: "Dajve Echols",
    address: localSecrets.address,
    state: localSecrets.state,
    city: localSecrets.city,
    zipCode: localSecrets.zipCode,
    phoneNum: "708-996-2138",
    linkedIn: "https://www.linkedin.com/in/dajve-echols-a329a1209/",
    date: formatDate(),
    recipientsName: "To whom this may concern",
    emailAddress: "dajvelechols@gmail.com",
    github: "https://github.com/Edajve"
}

const testTemplate = {
    companyName: "test",
    positionTitle: "tester tester",
    recipientsJobTitle: "test",
    fullName: "test",
    address: "test",
    state: "test",
    city: "test",
    zipCode: "test",
    phoneNum: "test",
    linkedIn: "test",
    date: "test",
    recipientsName: "test",
    emailAddress: "test",
    github: "test"
}

const filePath = 'cover_letter.txt'
const outputDirectory = '/Users/dajve.echols/Desktop/cover_letters'

const writeToExcel = async (path, coverFunc, template) => {
    try {
        const coverMaker = coverFunc;
        await writeFile(path, coverMaker(template))
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

const readFileFromExcel = (theFilePath, outputDirectory, companyName ) => {
    readFile(theFilePath, 'utf-8')
    .then(result => {
        saveDocument(result, outputDirectory, companyName)
    })
    .catch(err => console.log(err.message)) 
}

writeToExcel(filePath, coverMaker, template)
readFileFromExcel(filePath, outputDirectory, template.companyName)

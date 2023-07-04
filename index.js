const coverMaker = require('./cover-creator')
const { localSecrets } = require('./secrets/ppi')
const formatDate = require('./helpers')
const { writeAndSaveCoverLetter } = require('./excel_operations');

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

const excelPaths = {
    TEXT_FILE_PATH: 'cover_letter.txt',
    OUTPUT_DIRECTORY_PATH: '/Users/dajve.echols/workFolder/cover_letters'
}

writeAndSaveCoverLetter(
    excelPaths.TEXT_FILE_PATH,
    coverMaker,
    template,
    excelPaths.OUTPUT_DIRECTORY_PATH,
    template.companyName
)

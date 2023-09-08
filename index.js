const coverMaker = require('./cover-creator')
const { localSecrets } = require('./secrets/ppi')
const formatDate = require('./helpers')
const { writeAndSaveCoverLetter } = require('./excel_operations');

const template = {
    companyName: "%%Gucci",
    positionTitle: "cheater",
    recipientsJobTitle: "HR Department",
    fullName: "Dajve Echols",
    address: localSecrets.address,
    state: localSecrets.state,
    city: localSecrets.city,
    zipCode: localSecrets.zipCode,
    phoneNum: "708-996-2138",
    linkedIn: "https://www.linkedin.com/in/dajve-echols-a329a1209/",
    date: formatDate,
    recipientsName: "To whom this may concern",
    emailAddress: "dajvelechols@gmail.com",
    github: "https://github.com/Edajve"
}

const excelPaths = {
    TXT_DIR: `/Users/dajveechols/remoteSrc/node.js/dynamic-cover-letter/allTxt/${template.companyName}_.txt`,
    DOCX_DIR: '/Users/dajveechols/remoteSrc/node.js/dynamic-cover-letter/all_cover_letters'
}

let text = coverMaker(template);
writeAndSaveCoverLetter( excelPaths, text, template.companyName );
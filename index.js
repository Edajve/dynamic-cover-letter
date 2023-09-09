const coverMaker = require('./cover_creator')
const { localSecrets } = require('./secrets/ppi')
const { formatDate } = require('./helpers')
const { writeAndSaveCoverLetter } = require('./file_operations');

const template = {
    companyName: "%ABC company",
    positionTitle: "Software Engineer",
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
    TXT_DIR: `${__dirname}/allTxt/cover-letter_.txt`,
    DOCX_DIR: `${__dirname}/docxFiles`
}

let text = coverMaker(template);
writeAndSaveCoverLetter(excelPaths, text, template.companyName);

module.exports = { template }
const { writeFile } = require('fs')
const coverLetter = require('./cover-creator')
const { localSecrets } = require('./secrets/ppi')
const formatDate = require('./helpers')

const template = {
    companyName: "Chess.com",
    positionTitle: "Quality Specialist (Mobile)",
    recipientsJobTitle: "HR Department",
    fullName: "Dajve Echols",
    address: localSecrets.address,
    state: localSecrets.state,
    city: localSecrets.city,
    zipCode: localSecrets.zipCode,
    phoneNum: "708-996-2138",
    linkedIn: "https://www.linkedin.com/in/dajve-echols-a329a1209/",
    date: formatDate(),
    companyAddress: "",
    companyCity: "",
    companyState: "",
    companyZip: "",
    recipientsName: "To whom this may concern",
    emailAddress: "dajvelechols@gmail.com",
    github: "https://github.com/Edajve"
}

const filePath = 'cover_letter.txt'

writeFile(filePath, coverLetter(template), (err, result) => {
    if (err) return `Error: ${err.message}`
    console.log("Written successfully..")
})

console.log(localSecrets.pass)

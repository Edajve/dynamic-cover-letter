const { writeFile } = require('fs')
const coverMaker = require('./cover-creator')
const { localSecrets } = require('./secrets/ppi')

const formatDate = () => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      
      const today = new Date();
      const monthIndex = today.getMonth();
      const monthName = months[monthIndex];
      
      const day = String(today.getDate()).padStart(2, '0');
      const year = String(today.getFullYear());
      
     return `${monthName} ${day}, ${year}`;
}

const template = {
    fullName: "Dajve Echols",
    address: localSecrets.address,
    state: localSecrets.state,
    city: localSecrets.city,
    zipCode: localSecrets.zipCode,
    phoneNum: "708-996-2138",
    date: formatDate(),
    recipientsJobTitle: "null",
    companyName: "null",
    companyAddress: "null",
    companyCity: "null",
    companyState: "null",
    companyZip: "null",
    recipientsName: "null",
    positionTitle: "null",
    relevantSkills: [],
    specificAspectThatCaughtAttention: "null",
    additionalSkills: "null",
    emailAddress: "dajvelechols@gmail.com",
    github: "https://github.com/Edajve"
}

const filePath = 'cover_letter.txt'

writeFile(filePath, coverMaker(template), (err, result) => {
    if (err) return `Error: ${err.message}`
    console.log("Written successfully..")
})

console.log(localSecrets.pass)

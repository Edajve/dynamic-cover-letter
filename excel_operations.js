const { writeFile, readFile } = require('fs').promises
const { createWriteStream, readdir } = require('fs')
const officegen = require('officegen');

const writeToExcel = async (path, template) => {
    try {
        await writeFile(path, template)
    } catch (error) {
        console.log(error)
    }
}

const saveAsDocx = (text, pathObject, companyName) => {
     const docx = officegen('docx');

     const paragraph = docx.createP();
     paragraph.addText(text);
 
     const fileName = `${companyName}-cover-letter.docx`;
     const outputPath = `${pathObject.DOCX_DIR}/${fileName}`;
     const outputStream = createWriteStream(outputPath);
     docx.generate(outputStream);
     outputStream.on('close', function() {
        console.log('Output file saved successfully.');
     });
}

// const copyFromTextToDocxDir = (textFileDir, docxDirectoryPath, companyName ) => {
//     readFile(textFileDir, 'utf-8')
//     .then(textFile => {
//         saveAsDocx(textFile, docxDirectoryPath, companyName)
//     })
//     .catch(err => console.log(err.message)) 
// }

const copyFromTextToDocxDir = (excelPaths, companyName ) => {
    readFile( excelPaths.TXT_DIR, 'utf-8')
    .then(textFile => {
        saveAsDocx(textFile, excelPaths.DOCX_DIR, companyName)
    })
    .catch(err => console.log(err.message)) 
}

const alreadyApplied = async companyApplying => {
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
            if (existingCompany.toLowerCase() === companyApplying.toLowerCase()) {
                isAlreadyAppliedFor = true;
                break;
            }
        }
    } catch (err) {console.error('Error reading directory:', err);}

    return isAlreadyAppliedFor;
};

const updateDB = async () => {
    const dbPath = "./DB.js";
    //write to DB
    //await writeToExcel(dbPath, "hello")
    //read from DB
    const json = readFile(dbPath, 'utf-8')
    .then(textFile => console.log(textFile))
        .catch(err => console.log(err.message)) 
}

const writeAndSaveCoverLetter = async (
    excelPaths,
    text,
    companyName
) => {
    if (await alreadyApplied(companyName)){
        console.log("Company was already applied for")
    } else {
        await writeToExcel(excelPaths.TXT_DIR, text)
        await copyFromTextToDocxDir(excelPaths, companyName)
    }    
}

module.exports = { writeAndSaveCoverLetter };
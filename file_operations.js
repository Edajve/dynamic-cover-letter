const { writeFile, readFile } = require('fs').promises
const { createWriteStream, readdir } = require('fs')
const officegen = require('officegen');
const { addApplicationToDB, printOccurence } = require('./db_Operations')

const writeToATxtFile = async (path, template) => {
    try { await writeFile(path, template) }
    catch (error) {console.log(error) }
}

const saveAsDocx = (text, pathObject, companyName) => {
     const docx = officegen('docx');

     const paragraph = docx.createP();
     paragraph.addText(text);
 
     const fileName = `${companyName}-cover-letter.docx`;
     const outputPath = `/Users/dajveechols/remoteSrc/node.js/dynamic-cover-letter/docxFiles/${fileName}`;
     const outputStream = createWriteStream(outputPath);

     docx.generate(outputStream);
     outputStream.on('close', function() {
        //console.log('File Stream Closed in file_operations.js file');
     });
}

const saveADocxVersion = (excelPaths, companyName ) => {
    readFile(excelPaths.TXT_DIR, 'utf-8')
    .then(textFile => {
        saveAsDocx(textFile, excelPaths.DOCX_DIR, companyName)
    })
    .catch(err => console.log(err.message)) 
}

const alreadyApplied = async companyApplying => {
    const TXT_DIRECTORY_PATH = "./allTxt";
    let isAlreadyAppliedFor = false;

    try {
        const files = await new Promise((resolve, reject) => {
            readdir(TXT_DIRECTORY_PATH, (err, files) => {
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

const writeAndSaveCoverLetter = async (excelPaths, text, companyName) => {
    if (await alreadyApplied(companyName)){
            console.log("Company was already applied for") 
    } else {
        await writeToATxtFile(excelPaths.TXT_DIR, text)
        await saveADocxVersion(excelPaths, companyName)
        await addApplicationToDB(companyName)
        printOccurence()
    }    
}

module.exports = { writeAndSaveCoverLetter };
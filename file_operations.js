const { writeFile, readFile } = require('fs').promises
const { createWriteStream, readdir } = require('fs')
const officegen = require('officegen');
const { updateDB } = require('./db_Operations')

const writeToAFile = async (path, template) => {
    try {
        await writeFile(path, template)
        console.log('File saved successfully.');
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
        console.log('File saved successfully.');
     });
}

const copyFromTextToDocxDir = (excelPaths, companyName ) => {
    readFile(excelPaths.TXT_DIR, 'utf-8')
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

        const arr = []
        //delete after youre done
        for (let index = 0; index < files.length; index++) {
            //const element = files[index].split(".")[0].split("_")[0];
            const element = files[index].split(".")[0].split("_")[0];
            arr.push(element)
        }

        console.log(arr)

        // const arr2 = []
        // //delete after youre done
        // for (let ww = 0; ww < files.length; ww++) {
        //     //const element = files[ww].split(".")[0].split("_")[0];
        //     const element = files[ww]
        //     arr2.push(element)
        // }
        // console.log(arr2)
        
    } catch (err) {console.error('Error reading directory:', err);}

    return isAlreadyAppliedFor;
};

const writeAndSaveCoverLetter = async (excelPaths,text,companyName) => {
    if (await alreadyApplied(companyName)){
        console.log("Company was already applied for")
    } else {
        await writeToAFile(excelPaths.TXT_DIR, text)
        //await copyFromTextToDocxDir(excelPaths, companyName)
        await updateDB(companyName)
    }    
}

module.exports = { writeAndSaveCoverLetter };
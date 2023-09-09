const { formatDate } = require('./helpers')
const fs = require('fs');

const DB_PATH = "/Users/dajveechols/remoteSrc/node.js/dynamic-cover-letter/db/DB.txt";

const addApplicationToDB = async (nameOfCompany) => {

  try {
    const json = await fs.promises.readFile(DB_PATH, 'utf-8');
    const dbJson = JSON.parse(json);

    const lastIndex = dbJson.length - 1
    const todaysDate = formatDate();
    const companies = dbJson[lastIndex].dailyStats.applications;
    const latestDbDate = dbJson[lastIndex].today

    if (latestDbDate === todaysDate) {
      companies.push(nameOfCompany);
      dbJson[lastIndex].dailyStats.applicationAmount = companies.length;
    } else {
      const newObject = {
        today: todaysDate,
        dailyStats: {
          applicationAmount: 1,
          applications: [nameOfCompany]
        }
      };
      dbJson.push(newObject)
    }

    const updatedJsonData = JSON.stringify(dbJson, null, 2);

    await fs.promises.writeFile(DB_PATH, updatedJsonData);
  } catch (err) {
    console.error(err.message);
  }
};

const printOccurence = async () => {
  try {
    const response = await fs.promises.readFile(DB_PATH, 'utf-8');
    const json = JSON.parse(response)
    const applicationAmount = json[json.length - 1].dailyStats.applicationAmount
    console.log("You're at " + applicationAmount + " today");
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = { addApplicationToDB, printOccurence }
const { formatDate } = require('./helpers')
const fs = require('fs');

const DB_PATH = "/Users/dajveechols/remoteSrc/node.js/dynamic-cover-letter/db/DB.txt";

const updateDB = async (nameOfCompany) => {

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

    console.log('Database updated successfully.');
  } catch (err) {
    console.error(err.message);
  }
};

const getOccurrence = async () => {
  try {
    const response = await fs.promises.readFile(DB_PATH, 'utf-8');
    const json = JSON.parse(response)
    return json[json.length - -1].dailyStats.applicationAmount;
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = { updateDB, getOccurrence }
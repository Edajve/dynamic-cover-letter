const { formatDate } = require('./helpers')
const fs = require('fs');

const updateDB = async (nameOfCompany) => {
  const dbPath = "/Users/dajveechols/remoteSrc/node.js/dynamic-cover-letter/db/DB.txt";


  try {
    const json = await fs.promises.readFile(dbPath, 'utf-8');
    const dbJson = JSON.parse(json);

    const length = dbJson.length - 1
    const todaysDate = formatDate();
    const companies = dbJson[length].dailyStats.applications;
    const latestDbDate = dbJson[length].today
  

    if (latestDbDate === todaysDate) {
      companies.push(nameOfCompany); // Use push without reassigning
      dbJson[length].dailyStats.applicationAmount = companies.length; //this is not being updated
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

    await fs.promises.writeFile(dbPath, updatedJsonData);

    console.log('Database updated successfully.');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = { updateDB }
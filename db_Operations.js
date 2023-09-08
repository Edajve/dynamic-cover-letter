const { formatDate } = require('./helpers')

const updateDB = async (nameOfCompany) => {
  const dbPath = "./DB.txt";

  try {
    const response = await readFile(dbPath, 'utf-8');
    const json = JSON.parse(response);

    const todaysDate = formatDate();
    const companies = json.applications;

    if (json.today === todaysDate) {
      companies.push(nameOfCompany);
      json.dailyStats.applicationAmount = companies.length;
    } else {
      const newObject = {
        today: todaysDate,
        dailyStats: {
          applicationAmount: 1,
          applications: []
        }
      };
      newObject.dailyStats.applicationAmount.push(nameOfCompany)
      data.push(newObject);
    }

    const updatedJsonData = JSON.stringify(json, null, 2);

    await writeFile(dbPath, updatedJsonData);
    console.log('Database updated successfully.');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = { updateDB }
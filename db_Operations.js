

const updateDB = async () => {
  console.log("works")
    /*
        {
  "today": "September 07, 2023",
  "dailyStats": {
    "applicationAmount": 4,
    "applications": [
      "application one",
      "application two"
    ]
  }
}
    */
    const dbPath = "./DB.txt";
        //write to DB
    //await writeToExcel(dbPath, "hello")
        //read from DB
    // const json = readFile(dbPath, 'utf-8')
    // .then(textFile => console.log(JSON.parse(textFile)))
    //     .catch(err => console.log(err.message))

    
        //grap the date property
        //if the date property looks different
            //its a new day so add another new template object to the db
}

module.exports = { updateDB }
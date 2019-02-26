const connection = require('./connection');
const fs = require('fs');
const path = require('path');

const sql = fs.readFileSync(path.join(__dirname,'build.sql')).toString();
const runBuild = () => {
    connection.query(sql, () => { console.log('database is build successfully');
    })
}
module.exports = runBuild;

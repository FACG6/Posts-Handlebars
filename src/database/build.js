const connection = require('./connection');
const fs = require('fs');
const path = require('path');

const sql = fs.readFileSync(path.join(__dirname,'build.sql')).toString();
const runBuild = (file, cb) => {
    connection.query(sql, (err, res) => { 
        if (err) return cb(err) 
        return cb(null, res);
       
    })
}

module.exports = runBuild;

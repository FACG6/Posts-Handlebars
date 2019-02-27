const connection = require('./../database/connection');
const addUser = (firstName, lastName, email, password) => {
const sql = `INSERT INTO users (first_name,last_name,email,password) values ($1, $2, $3, $4)`;
const values = [firstName, lastName, email, password];
return new Promise((resolve, reject) => {
    connection.query(sql,values,(err, res)=>{
        if(err) reject(err)
        resolve('ok');
    })
})
}
module.exports = addUser;

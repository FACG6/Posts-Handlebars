const connection = require('../database/connection');
const getUser = (email) => {
const sql = `select * from users where email='${email}'`;

return new Promise((resolve, reject) => {
    connection.query(sql,(err, res)=>{
        if(err) reject(err)
        resolve(res.rows);
    })
})
}
module.exports = getUser;

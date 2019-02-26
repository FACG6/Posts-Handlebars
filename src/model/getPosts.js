const connection = require('./../database/connection');
const getPost = () => {
const sql = `select * from posts`;

return new Promise((resolve, reject) => {
    connection.query(sql,(err, res)=>{
        if(err) reject(err)
        resolve(res.rows)
  
    })
})
}
module.exports = getPost;

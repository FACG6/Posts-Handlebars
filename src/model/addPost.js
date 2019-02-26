const connection = require('./../database/connection');
const addPost = (postContent, userID) => {
const sql = `INSERT INTO posts (post, user_id) values ($1, $2)`;
const values = [postContent,userID];
return new Promise((resolve, reject) => {
    connection.query(sql,values,(err, res)=>{
        if(err) reject(err);
        resolve('ok');
    })
})
}
module.exports = addPost;

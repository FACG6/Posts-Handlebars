const connection = require('./../database/connection');
const getPost = () => connection.query('select * from posts');

module.exports = getPost;

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'yourusername',
    password: 'yourpassword',
    database: 'mydatabase'
});

connection.connect(err => {
    if (err) throw err;
    console.log('MySQL connected');
});

module.exports = connection;
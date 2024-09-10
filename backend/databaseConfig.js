const mysql = require('mysql')

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "veer123456",
    database: "manage_pannel"
})

module.exports = connection


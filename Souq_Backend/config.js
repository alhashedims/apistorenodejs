const mysql = require('mysql');

const connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: 'sql205.epizy.com',
    user: 'epiz_33390211',
    password: '6naCXlsi8AiLs',
    database: 'epiz_33390211_khatf',
})

module.exports = connectionPool;
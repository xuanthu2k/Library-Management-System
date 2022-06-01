var sql = require('mssql/msnodesqlv8')
let maychu = 'DESKTOP-4U8BTB2\\MAYCHU'
let tram1 = 'DESKTOP-4U8BTB2\\TRAM1'
let tram2 = 'DESKTOP-4U8BTB2\\TRAM2'
let tram3 = 'DESKTOP-4U8BTB2\\TRAM3'

var config = (dbName)=>{
    return{
        server:dbName,
        user: 'sa',
        password: 'xuanthu99',
        database: 'QuanLyThuVien',
        drive: 'msnodesqlv8'
    }
} 

const connMaychu = new sql.ConnectionPool(config(maychu)).connect().then(
    pool=>{
        return pool 
    }
)

const connTram1 = new sql.ConnectionPool(config(tram1)).connect().then(
    pool=>{
        return pool 
    }
)

const connTram2 = new sql.ConnectionPool(config(tram2)).connect().then(
    pool=>{
        return pool 
    }
)

const connTram3 = new sql.ConnectionPool(config(tram3)).connect().then(
    pool=>{
        return pool 
    }
)

module.exports = {
    sql,
    connMaychu,
    connTram1,
    connTram2,
    connTram3
}
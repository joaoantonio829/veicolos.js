const mysql = require('mysql2/promise')

const connection = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'estacionamento',
    password:''
});

async function obiterVeiculos()
{
 
   const sql = 'select * from veiculos'
    const [rows, fields] = await connection.execute(sql)

    return rows;

}

async function incluirVeiculos(placa, modelo, cor, tipo)
{
    const sql = 'insert into veiculos (placa, modelo, cor, tipo) values (?,?,?,?)';
    
    const [result] = await connection.execute(sql, [placa, modelo, cor, tipo])
    
    return result;
}

module.exports = {
    obiterVeiculos,
    incluirVeiculos
}
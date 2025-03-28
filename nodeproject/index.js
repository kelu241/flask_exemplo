const express = require('express')
const app = express()
const port = 333
const sql = require('mssql2')
const config = {
    user: 'sa',
    password: 'Panzer37*',
    server: 'sqlserver',  // ou o IP/nome do servidor
    database: 'pockemons',
    options: {
      encrypt: false,  // true se estiver usando Azure
      trustServerCertificate: true, // necessário para conexões locais
    }
  };

  
  app.get('/pocker', async (req, res) => {
    let pool;

    try {
        // Tenta conectar ao banco
        pool = await sql.connect(config);
        console.log("Conectado ao banco com sucesso!");

        // Executa a consulta
        const result = await pool.request().query('SELECT * FROM [pockemons].[dbo].[pockemons]');

        

        // Retorna os dados da consulta como JSON
        res.send(JSON.stringify(result))
    } catch (err) {
        console.error("Erro ao buscar dados:", err);
        res.status(500).send("Erro ao buscar dados");
    } finally {
        if (pool) {
            await pool.close(); // Fecha a conexão
            console.log("Conexão fechada.");
        }
    }
});

app.listen(3333, ()=>{
    
    console.log('ouvindo na 3333')
    })


    
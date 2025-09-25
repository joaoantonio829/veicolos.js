const express = require('express');
const { obiterVeiculos, incluirVeiculos } = require('./repositorio/bancoDados');

const server = express();
server.use(express .json());

server.get('/', async(req, res) => {
    const veiculos = await obiterVeiculos()
    res.json(veiculos);
});
server.post('/veiculos', async (req, res) => {
    const {modelo, cor, placa, tipo} = req.body
    
    const resposta = await incluirVeiculos(placa, modelo, cor, tipo)
    if(resposta.affectedRows)
    {
        res.json ({msg:'Ok'}
        )
    }
    else{
        res.json({msg:'Não cadastrado!'})
    }

})

server.listen(3000, () => {
    console.log('Servidor Online');
});

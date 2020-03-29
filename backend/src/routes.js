const express = require('express');
const crypto = require('crypto')
const connection = require('./database/connection')

const ongController = require('./controllers/orgController');

const router = express.Router();
router.get("/", function yago(request, response) {
    response.send("Bem vindo");
});

router.post('/teste', async (request, response) => {
    const data = request.body;
    console.log(data);
    const {name, email, whastapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id, name, email, whastapp, city, uf
        })
    return response.json();
});
router.get("/ongs", ongController.index);
router.post('/ongs', ongController.create);
module.exports = router;

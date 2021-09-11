const express = require('express');
const router = express.Router();
const { getAllFromDatabase } = require('../db')
const { addToDatabase } = require('../db')

router.get('/', function(req, res) {
    res.send(getAllFromDatabase('minions'))
})
router.post('/', function(req, res) {
    console.log(req.query)
})
module.exports = router;

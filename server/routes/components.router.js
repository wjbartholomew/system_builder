const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let query = `SELECT * FROM "Components" ORDER BY id;`;
    pool.query(query).then(result => {
        res.send(result.rows);
        console.log('component result.rows', result.rows)
    })
        .catch(error => {
            console.log('Error retrieving source components', error);
            res.sendStatus(500);
        });
});


/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
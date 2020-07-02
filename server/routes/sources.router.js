const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let query = `SELECT * FROM "Components" WHERE component_category = $1 ORDER BY id;`;
    pool.query(query, [1]).then(result => {
        res.send(result.rows);
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
const express = require('express');
const pool = require('../modules/pool');
const { response } = require('express');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    console.log('req.params:',req.params);
    let query = `SELECT * FROM "Components" WHERE id = $1 ORDER BY id;`;
    pool.query(query, [req.params.id]).then(result => {
        res.send(result.rows);
        console.log('result.rows',result.rows)
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
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let query = `SELECT * FROM "Saved_Systems";`;
    pool.query(query).then(result => {
        res.send(result.rows);
        console.log('result.rows for existing systems', result.rows)
    })
        .catch(error => {
            console.log('Error retrieving existing systems', error);
            res.sendStatus(500);
        });
});




/**
 * POST route template
 */
router.post('/', (req, res) => {

});


router.delete('/:id', (req, res) => {
    let query = `DELETE FROM "Saved_Systems" WHERE id = $1;`;
    pool.query(query, [req.params.id]).then(result => {
        res.send(result.rows);
    })
        .catch(error => {
            console.log('DELETE SYSTEM FAILED', error);
            res.sendStatus(500);
        });
});

module.exports = router;
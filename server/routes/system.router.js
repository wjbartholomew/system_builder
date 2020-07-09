const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    console.log('req.params:',req.params);
    let query = `SELECT * FROM "Components" WHERE id = $1 ORDER BY id;`;
    pool.query(query, [req.params.id]).then(result => {
        res.send(result.rows);
        console.log('result.rows for adding a single component',result.rows)
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
    console.log('req.body',req.body)
    let query = `
    INSERT INTO "Saved_System" 
    ('user_id', 'name', 'description', 'recommendations', 'appropriate_room_size', 'potential_mismatches', 'most_expensive_components', 'source_type', 'listening_habits', 'system_price')
    VALUES 
    ()`

});

module.exports = router;
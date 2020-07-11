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

let query = `
INSERT INTO "Components" 
("brand", "name", "image", "description", "inventory", "price", "sensitivity", "component_category", "component_category_name", "bass_output", "power_output", "heat_output", "source_type")
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);`;
    pool.query(query, [req.body.brand, req.body.componentName, req.body.imageUrl, req.body.description, req.body.inventory, req.body.price, req.body.sensitivity,req.body.componentCategory, req.body.componentCategoryName, req.body.bassOutput, req.body.powerOutput, req.body.heatOutput, req.body.sourceType]).then(result => {
        res.send(result.rows);
        console.log('component result.rows', result.rows)
    })
        .catch(error => {
            console.log('Error POSTING custom component', error);
            res.sendStatus(500);
        });
});

module.exports = router;
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/sources', (req, res) => {
    let query = `SELECT * FROM "Components" WHERE component_category = $1 ORDER BY id;`;
    pool.query(query, [1]).then(result => {
        res.send(result.rows);
        console.log('component result.rows', result.rows)
    })
        .catch(error => {
            console.log('Error retrieving source components', error);
            res.sendStatus(500);
        });
});

router.get('/amplification', (req, res) => {
    let query = `SELECT * FROM "Components" WHERE component_category = $1 ORDER BY id;`;
    pool.query(query, [2]).then(result => {
        res.send(result.rows);
    })
        .catch(error => {
            console.log('Error retrieving source components', error);
            res.sendStatus(500);
        });
});

router.get('/speakers', (req, res) => {
    let query = `SELECT * FROM "Components" WHERE component_category = $1 ORDER BY id;`;
    pool.query(query, [3]).then(result => {
        res.send(result.rows);
    })
        .catch(error => {
            console.log('Error retrieving source components', error);
            res.sendStatus(500);
        });
});

router.get('/cables', (req, res) => {
    let query = `SELECT * FROM "Components" WHERE component_category = $1 ORDER BY id;`;
    pool.query(query, [4]).then(result => {
        res.send(result.rows);
    })
        .catch(error => {
            console.log('Error retrieving source components', error);
            res.sendStatus(500);
        });
});

router.get('/accessories', (req, res) => {
    let query = `SELECT * FROM "Components" WHERE component_category = $1 ORDER BY id;`;
    pool.query(query, [5]).then(result => {
        res.send(result.rows);
        console.log('component result.rows',result.rows)
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
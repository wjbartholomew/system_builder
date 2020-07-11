const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// router.get('/', (req, res) => {
    // let query = `SELECT * FROM "System_Components";`;
//     pool.query(query).then(result => {
//         res.send(result.rows);
//         console.log('result.rows for existing system components', result.rows)
//     })
//         .catch(error => {
//             console.log('Error retrieving existing system components', error);
//             res.sendStatus(500);
//         });
// });


router.get('/', (req, res) => {
    let query = `SELECT * FROM
"Components"
JOIN
"System_Components"
ON
"Components"."id" = "System_Components"."component_id";
`;
    pool.query(query).then(result => {
        res.send(result.rows);
        console.log('result.rows for existing system components', result.rows)
    })
        .catch(error => {
            console.log('Error retrieving existing system components', error);
            res.sendStatus(500);
        });
});




/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;







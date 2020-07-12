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
    INSERT INTO "Saved_Systems" 
    ("id","user_id", "name", "description", "recommendations",  "user_room", "listening_habits")
    VALUES 
    ($1, $2, $3, $4, $5, $6, $7)`
    pool.query(query, [req.body.uniqueSystemId, req.body.userId, req.body.name, req.body.description, req.body.recommendations, req.body.userRoomSize, req.body.userListeningHabits])
    
        .catch(error => {
            console.log('ERROR STORING SYSTEM DETAILS', error);
            res.sendStatus(500);
        });
});


router.post('/components', async (req, res) => {

    const connection = await pool.connect();
    try {
        await connection.query('BEGIN');
        const query = `
    INSERT INTO "System_Components" 
    ("component_id", "system_id", "user_id")
    VALUES 
    ($1, $2, $3)`
        const result = await connection.query(query, [req.body.componentId, req.body.systemId, req.body.userId])
        await connection.query('COMMIT');
        res.sendStatus(200);

    }catch (error){
        await connection.query('ROLLBACK');
        res.sendStatus(500);
    }
    finally {
        connection.release()
    }

})









    // console.log('req.body', req.body)
    // let query = `
    // INSERT INTO "System_Components" 
    // ("component_id", "system_id", "user_id")
    // VALUES 
    // ($1, $2, $3)`
    // pool.query(query, [req.body.componentId,req.body.systemId,req.body.userId])

    //     .catch(error => {
    //         console.log('ERROR STORING SYSTEM DETAILS', error);
    //         res.sendStatus(500);
    //     });
// });

module.exports = router;
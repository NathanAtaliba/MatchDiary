// FUNÇOES DAS ROTAS DOS TEAMS
import { pool } from "../database/db.js";

async function getTeams(req, res) {
    const tableName = "Teams";
   try{
        const query = `SELECT * FROM "${tableName}"`;
        const client = await pool.connect();
        const result = await client.query(query);
        client.release();
        const teams = result.rows;
        return res.status(200).json(teams);
    }catch (error) {
        console.error('Erro ao executar a consulta:', error);
        client.release();
        return res.status(500).send('Erro no servidor.');
    }
}


function deleteTeam( req, res ){
    const id = req.params.id;
    const values = [id];
    const query = `DELETE FROM "Teams" WHERE id = $1;`
    pool.query( query, values, function( err ){
        if(err){
            res.status(500).json(`Error to delete team: ${err}`)
        }
        else{
            console.log(`Team deleted with successfully`)
            res.status(200).json(`Team deleted with successfully`)
        }
    })
}

function updateTeam( req, res ){
    let id = req.params.id
    let name = req.body.name
    let photo_url = req.body.photo_url
    let values = [ name, photo_url, id ]
    const query = `UPDATE "Teams" SET name = $1, photo_url = $2 WHERE id = $3;`;
    pool.query(query, values, function(err){
        if(err){
            return res.status(500).json(`Error to update team ${err}`)
        }else{
            return res.status(200).json(`Team updated with successfully`)
        }
    })
}

async function createTeam( req, res ){
    try{
        let id = req.body.id;
        let name = req.body.name;
        let state = req.body.state;
        let photo_url = req.body.photo_url; 
        let query = `INSERT INTO "Teams" (id, name, state, photo_url) VALUES('${id}', '${name}', '${state}', '${photo_url}');`
        pool.query(query,function(err) {
            if (err) {
                console.error('Erro ao executar a consulta: ' + err);
                return res.status(500).json({ error: 'server error' });
            }
            else{
                return res.status(200).json({ message: 'Team created with success.' });
            }  
        });
    }catch(error){
        return res.status(500).json("Erro ao executar query: ", error)
    }
}


export { getTeams, deleteTeam, updateTeam, createTeam }
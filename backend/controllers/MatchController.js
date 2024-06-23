import { pool } from "../database/db.js";
// FUNÇOES DAS ROTAS DAS MATCHS

async function getMatchs(req, res) {
  try {
    const tableName = "Matchs";
    const query = `SELECT * FROM "${tableName}"`;
    const client = await pool.connect();
    const result = await client.query(query);
    client.release();
    const matchs = result.rows;
    return res.status(200).json(matchs);
  }catch(error) {
    console.error('Erro ao executar a consulta:', error);
    client.release();
    return res.status(500).send('Erro no servidor.');
  }
}

function deleteMatch( req, res ){
  const id = req.params.id;
  const values = [id];
  const query = `DELETE FROM "Matchs" WHERE id = $1;`
  pool.query( query, values, function( err ){
      if(err){
          res.status(500).json(`Error to delete match: ${err}`)
      }
      else{
          console.log(`Match deleted with successfully`)
          res.status(200).json(`Match deleted with successfully`)
      }
  })
}

function updateMatch( req, res ){
  let id = req.params.id
  let team_one = req.body.name
  let team_two = req.body.photo_url
  let score_team_one = req.body.name
  let score_team_two = req.body.photo_url
  
  let values = [ team_one, team_two, score_team_one, score_team_two, id ]
  const query = `UPDATE "Matchs" SET team_one = $1, team_two = $2, score_team_one = $3, score_team_two = $4 WHERE id = $5;`;
  pool.query(query, values, function(err){
      if(err){
          return res.status(500).json(`Error to update match ${err}`)
      }else{
          return res.status(200).json(`Match updated with successfully`)
      }
  })
}

async function createMatch( req, res ){
    try{ 
      let id = req.body.id;
      let date = req.body.date;
      let team_one = req.body.team_one;
      let team_two = req.body.team_two;
      let score_team_one = req.body.score_team_one;
      let score_team_two = req.body.score_team_two;
      let q = `INSERT INTO "Matchs" (id, date, team_one, team_two , score_team_one, score_team_two) VALUES ( '${id}', '${date}' ,'${team_one}' , '${team_two}', '${score_team_one}', '${score_team_two}');`
      pool.query(q, function(err) {
          if (err) {
              console.error('Erro ao executar a consulta: ' + err);
              return res.status(500).json({ error: 'server error' });
          }
          else {
              return res.status(200).json({ message: 'Match created with success.' });
          }  
      });
    }catch (error) {
        console.error('Erro na função createMatch: ' + error);
        return res.status(500).send('Erro no servidor.');
      }
}


export { getMatchs, deleteMatch, updateMatch, createMatch }
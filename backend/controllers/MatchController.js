import { pool } from "../database/db.js";
// FUNÇOES DAS ROTAS DAS MATCHS

function getMatchs( req, res ){
    let q = 'select * from "Matchs"';
    try{
        pool.query(q, function(err, results) {
            if (err) {
                console.error('Erro ao executar a consulta: ' + err);
                return res.status(500).send('Erro no servidor.');
            }
            else {
                let matchs =  results;
                return res.status(200).json(matchs);
            }  
        });
    } catch (error) {
        console.error('Erro na função getMatchs: ' + error);
        return res.status(500).send('Erro no servidor.');
    }
    }

function deleteMatch( req, res ){
    console.log('deleteMatch')
}

function updateMatch( req, res ){
    console.log('updateMatch')
}

function createMatch( req, res ){
   
    try{
        let pre = req.body;
        let id = req.body.id;
        let date = req.body.date;
        let team_one = req.body.team_one;
        let team_two = req.body.team_two;
        console.log(pre);
       
        let q = `INSERT INTO Matchs (id, date, team_one, team_two , score_team_one, score_team_two) VALUES (${id}, ${date} ,${team_one} , ${team_two}, ${score_team_one}, ${score_team_two});`

        pool.query(q, function(err, results) {
            if (err) {
                console.error('Erro ao executar a consulta: ' + err);
                return res.status(500).send('Erro no servidor.');
            }
            else {
                let matchs =  results;
                return res.status(200).json(matchs);
            }  
        });
    } catch (error) {
        console.error('Erro na função createUsers: ' + error);
        return res.status(500).send('Erro no servidor.');
    }

}


export { getMatchs, deleteMatch, updateMatch, createMatch }
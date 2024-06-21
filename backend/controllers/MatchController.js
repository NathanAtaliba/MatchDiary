import { pool } from "../database/db.js";
// FUNÇOES DAS ROTAS DAS MATCHS
async function tableExists(tableName) {
    const client = await pool.connect();
  
    try {
      const query = `
        SELECT EXISTS (
          SELECT 1
          FROM information_schema.tables
          WHERE table_schema = 'public' AND table_name = $1
        );
      `;
      const result = await client.query(query, [tableName]);
      return result.rows[0].exists;
    } catch (error) {
      console.error('Erro ao verificar a existência da tabela:', error);
      throw error; 
    } finally {
      client.release();
    }
  }

async function createTable(){
  const client = await pool.connect();
  
  try {
    const tableExistsResult = await tableExists('Matchs');
    if (!tableExistsResult) {
      const createTableQuery = `
        CREATE TABLE "Matchs" (
          id VARCHAR(50) PRIMARY KEY,
          date DATE NOT NULL,
          team_one VARCHAR(100) NOT NULL,
          team_two VARCHAR(100) NOT NULL,
          score_team_one INTEGER NOT NULL,
          score_team_two INTEGER NOT NULL
        );
      `;
      await client.query(createTableQuery);
      console.log(`Tabela 'Matchs' criada com sucesso.`);
    } else {
      console.log(`Tabela 'Matchs' já existe.`);
    }
  } catch (error) {
    console.error('Erro ao criar a tabela:', error);
    throw error; // Lança o erro para ser tratado pela função chamadora
  } finally {
    client.release();
  }
}

async function getMatchs(req, res) {
  const tableName = "Matchs";

  try {
    const exists = await tableExists(tableName);

    if (!exists) {
      console.log(`A tabela '${tableName}' não existe.`);
      return res.status(404).send(`A tabela '${tableName}' não existe.`);
    }

    const query = `SELECT * FROM ${tableName}`;
    const client = await pool.connect();

    try {
      client.query(query, (err, result) => {
        client.release();

        if (err) {
          console.error('Erro ao executar a consulta:', err);
          return res.status(500).send('Erro no servidor.');
        }

        const matchs = result.rows;
        return res.status(200).json(matchs);
      });
    } catch (error) {
      console.error('Erro na função getMatchs:', error);
      return res.status(500).send('Erro no servidor.');
    }
  } catch (error) {
    console.error('Erro ao verificar a existência da tabela:', error);
    return res.status(500).send('Erro no servidor.');
  }
}

function deleteMatch( req, res ){
    console.log('deleteMatch')
}

function updateMatch( req, res ){
    console.log('updateMatch')
}

async function createMatch( req, res ){
  var table = await tableExists('Matchs')

  if(table){
    try{ 
      let id = req.body.id;
      let date = req.body.date;
      let team_one = req.body.team_one;
      let team_two = req.body.team_two;
      let score_team_one = req.body.score_team_one;
      let score_team_two = req.body.score_team_two;
     
      let q = `INSERT INTO Matchs (id, date, team_one, team_two , score_team_one, score_team_two) VALUES ( '${id}', '${date}' ,'${team_one}' , '${team_two}', '${score_team_one}', '${score_team_two}');`
      
      pool.query(q, function(err) {
          if (err) {
              console.error('Erro ao executar a consulta: ' + err);
              return res.status(500).json({ error: 'server error' });
          }
          else {
              return res.status(200).json({ message: 'Match created with success.' });
          }  
      });
  } catch (error) {
      console.error('Erro na função createMatch: ' + error);
      return res.status(500).send('Erro no servidor.');
  }
  }else{
    createTable()
    try{ 
      let id = req.body.id;
      let date = req.body.date;
      let team_one = req.body.team_one;
      let team_two = req.body.team_two;
      let score_team_one = req.body.score_team_one;
      let score_team_two = req.body.score_team_two;
     
      let q = `INSERT INTO Matchs (id, date, team_one, team_two , score_team_one, score_team_two) VALUES ( '${id}', '${date}' ,'${team_one}' , '${team_two}', '${score_team_one}', '${score_team_two}');`
      
      pool.query(q, function(err) {
          if (err) {
              console.error('Erro ao executar a consulta: ' + err);
              return res.status(500).json({ error: 'server error' });
          }
          else {
              return res.status(200).json({ message: 'Match created with success.' });
          }  
      });
  } catch (error) {
      console.error('Erro na função createMatch: ' + error);
      return res.status(500).send('Erro no servidor.');
  }
  }

}


export { getMatchs, deleteMatch, updateMatch, createMatch }
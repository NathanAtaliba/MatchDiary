// FUNÇOES DAS ROTAS DOS TEAMS

function getTeams( req, res ){
    const query = 'select * from teams';
    console.log('getTeam')
}

function deleteTeam( req, res ){
    console.log('deleteTeam')
}

function updateTeam( req, res ){
    console.log('updateTeam')
}

function createTeam( req, res ){
    console.log('createTeam')
}

export { getTeams, deleteTeam, updateTeam, createTeam }
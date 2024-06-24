import express from 'express';
import { getMatchs, createMatch, deleteMatch, updateMatch } from '../controllers/MatchController.js';
import { getTeams, createTeam, deleteTeam, updateTeam } from '../controllers/TeamController.js';
const router = express.Router()

// MATCHS ROUTES
router.get('/matchs/search', getMatchs );
router.post('/matchs/create', createMatch );
router.delete('/matchs/delete/:id', deleteMatch );
router.put('/matchs/update/:id', updateMatch );

// TEAMS ROUTE
router.get('/teams/search', getTeams );
router.post('/teams/create', createTeam );
router.delete('/teams/delete/:id', deleteTeam );
router.put('/teams/update/:id', updateTeam );

export default router;
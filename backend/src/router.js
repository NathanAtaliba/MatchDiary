import express from 'express';
import { getMatchs, createMatch, deleteMatch, updateMatch } from '../controllers/MatchController.js';
import { getTeams, createTeam, deleteTeam, updateTeam } from '../controllers/TeamController.js';
const router = express.Router()

// MATCHS ROUTES
router.get('/matchs', getMatchs );
router.post('/matchs', createMatch );
router.delete('/matchs/:id', deleteMatch );
router.put('/matchs/:id', updateMatch );

// TEAMS ROUTE
router.get('/teams', getTeams );
router.post('/teams', createTeam );
router.delete('/teams/:id', deleteTeam );
router.put('/teams/:id', updateTeam );

export default router;
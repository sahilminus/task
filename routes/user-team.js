const express = require('express');
const router = express.Router();
const userTeamController = require('../controllers/user-team')

router.get('/', userTeamController.getUserTeams);

router.get('/user_team', userTeamController.getUsers);

module.exports = router;
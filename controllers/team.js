const Team = require('../models/team');



exports.getTeams = async function (req, res, next) {
    try {
        let page = req.query.page;
        let offset = 0;
        if (page) {
            offset = (page - 1) * 10
        } else {
            page = 1
        }
        const teams = await Team.find().limit(10).skip(offset);
        const teamsJson = JSON.parse(JSON.stringify(teams));
        // console.log(teams)
        res.render('team', {
            teams: teamsJson,
            page: parseInt(page)
        })
    } catch (err) {
        res.render('error', {
            title: "404",
            error: " page not found"
        })
    }
}
const Team = require('../models/team');
const User = require('../models/user');


exports.getUsers = async function (req, res, next) {
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
        res.render('user_team', {
            teams: teamsJson,
            page: parseInt(page)
        })
    } catch (err) {
        res.status(500).json({
            status: 0
        })
    }
}


exports.getUserTeams = async function (req, res, next) {

    try {
        let page = req.query.page;
        let offset = 0;
        if (page) {
            offset = (page - 1) * 10
        } else {
            page = 1
        }
        const users = await User.aggregate([{
            $match: {}
        }, {
            $skip: offset
        }, {
            $limit: 10
        }, {
            $lookup: {
                from: 'teams',
                localField: 'email',
                foreignField: 'email',
                as: 'teams'
            }
        }]);
        const userJson = JSON.parse(JSON.stringify(users))
        res.render('user_team', {
            teams: userJson,
            page: parseInt(page)
        })
    } catch (err) {
        console.log(err);
        res.render('error', {
            title: "404",
            error: " page not found"
        })
    }
}
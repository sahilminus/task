const User = require('../models/user');


exports.getUsers = async function (req, res, next) {

    try {
        let page = req.query.page;
        let offset = 0;
        if (page) {
            offset = (page - 1) * 10;
        } else {
            page = 1;
        }
        const users = await User.find().limit(10).skip(offset);
        const userJson = JSON.parse(JSON.stringify(users));
        // res.status(200).json({
        //     data: users
        // })
        res.render('user', {
            users: userJson,
            getNext: getNextUsers,
            page: parseInt(page)
        })
    } catch (err) {
        console.log(err)
        res.render('error', {
            title: "404",
            error: " page not found"
        })
    }
}


async function getNextUsers(offset) {
    try {
        console.log("In");
        const users = await User.find().limit(20);
        const userJson = JSON.parse(JSON.stringify(users));
        // res.status(200).json({
        //     data: users
        // })
        render('table', {
            users: userJson
        })
    } catch (err) {
        console.log(err);
        render('404', {})

    }
}
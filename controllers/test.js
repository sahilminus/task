const User = require('../models/user');

exports.addUser = async function (req, res, next) {


    try {
        const user = new User(req.body);
        await user.save();

        res.render(
            'user', {

            }
        );
    } catch (e) {
        console.log(e)
        res.status(400).send(e);
    }


}
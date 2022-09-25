const userService = require('../../services/User');

module.exports = async (req, res, next) => {
    try {
        const {name, email} = req.body;
        const response = await userService.create({name, email});
        return res.status(201).json(response);
    } catch(e){
       console.log(e);
    }
}
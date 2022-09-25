const userService = require('../../services/User');

module.exports = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const response = await userService.remove({ id });
        if (response === 0) {
            return res.status(404).json({message: "User not found"});
        }
        return res.status(200).json({ id, message: 'User deleted', status: 'Success' });
    } catch (e) {
        console.log(e);
    }
}
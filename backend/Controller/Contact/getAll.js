const contactService = require('../../services/Contact');

module.exports = async (_req, res, next) => {
    try {
        const users = await contactService.getAll();
        return res.status(200).json(users);
    } catch (e) {
        return next(e);
    }
};
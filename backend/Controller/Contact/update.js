const contactService = require('../../services/Contact');

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, email, phone, whatsapp } = req.body;
        const response = await contactService.update(id, { name, email, phone, whatsapp });
        return res.status(200).json({ id, message: 'User updated', status: 'Success' });
    } catch (e) {
        return next(e);
    }
};
const contactService = require('../../services/Contact');

module.exports = async (req, res, next) => {
    try {
        const { name, phone, email, whatsapp, userId } = req.body;
        const response = await contactService.create({ name, phone, email, whatsapp, userId });
        return res.status(201).json(response);
    } catch (e) {
        console.log(e);
    }
}
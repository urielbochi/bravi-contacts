const contactService = require('../../services/Contact');

module.exports = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const contacts = await contactService.getAllById(id);
        if (!contacts) return res.status(400).json({ message: "Contact not found" });
        return res.status(200).json(contacts);
    } catch (e) {
        return next(e);
    }
};
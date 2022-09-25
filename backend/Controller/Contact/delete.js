const contactService = require('../../services/Contact');

module.exports = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const response = await contactService.remove({ id });
        if (response === 0) {
            return res.status(404).json({ message: "Contact not found" });
        }
        return res.status(200).json({ id, message: 'Contact deleted', status: 'Success' });
    } catch (e) {
        console.log(e);
    }
}
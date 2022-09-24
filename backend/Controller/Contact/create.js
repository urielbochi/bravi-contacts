const contactService = require('../../services/Contact');

module.exports = async (req, res, next) => {
    try {
        const {name, phone, mail, whatsapp} = req.body;
        const response = await contactService.create({name, phone, mail, whatsapp});
        return res.status(201).json(response);
    } catch(e){
       console.log(e);
    }
}
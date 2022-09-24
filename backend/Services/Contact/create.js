const Contact = require('../../Models/Contact');

module.exports = async({name, phone, mail, whatsapp}) => {
    const created = await Contact.create({name, phone, mail, whatsapp})
    return created;
}

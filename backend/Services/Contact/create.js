const Contact = require('../../Models/Contact');

module.exports = async({name, phone, email, whatsapp, userId}) => {
    const created = await Contact.create({name, phone, email, whatsapp, userId})
    return created;
}

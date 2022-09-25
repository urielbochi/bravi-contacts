const Contact = require('../../Models/Contact');

module.exports = async ( id ) => {
    const contactsById = await Contact.findAll({
        where: {
            userId: id,
        },
    });

    return contactsById;
}

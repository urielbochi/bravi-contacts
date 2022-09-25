const Contact = require('../../Models/Contact');

module.exports = async ({ id }) => {
    const deleted = await Contact.destroy({
        where: {
            id: id,
        },
    });

    return deleted;
}

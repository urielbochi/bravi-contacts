const Contact = require('../../Models/Contact');
const User = require('../../Models/User');

module.exports = async ({ id }) => {
    const contactDeleted = await Contact.destroy({
        where: {
            userId: id,
        },
    });

    const userDeleted = await User.destroy({
        where: {
            id: id,
        },
    })


    return userDeleted;
}

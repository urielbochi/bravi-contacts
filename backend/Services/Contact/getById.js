const Contact = require('../../Models/Contact');


module.exports = async (id) => Contact.findByPk(id);
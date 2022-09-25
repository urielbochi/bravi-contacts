const Contact = require('../../Models/Contact');

module.exports = async (id, { name, email, phone, whatsapp }) => {

  const user = await Contact.findByPk(id);
  if (!user) return { error: 'Contact not found' };

  const updated = await Contact.update(
    { name, email, phone, whatsapp },
    { where: { id } },
  );
  return updated;
};
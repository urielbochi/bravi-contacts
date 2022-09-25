const User = require('../../Models/User');

module.exports = async({name, email}) => {
    const created = await User.create({name, email})
    return created;
}

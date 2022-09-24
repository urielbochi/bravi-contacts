const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const Contact = sequelize.define(
  "Contact",
  {
    name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    mail: {
      type: DataTypes.STRING,
    },
    whatsapp: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Contact;
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
    email: {
      type: DataTypes.STRING,
    },
    whatsapp: {
      type: DataTypes.STRING,
    },
    userId: {
        type: DataTypes.INTEGER,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = Contact;
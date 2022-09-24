const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
    },
    mail: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
const express = require('express');

const userRouter = require('./user');
const contactsRouter = require('./contact');

const root = express.Router({ mergeParams: true });

root.use('/user', userRouter);
root.use('/contacts', contactsRouter);

module.exports = root;
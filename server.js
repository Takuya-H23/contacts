const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'Welcome to Contacts!' }));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));

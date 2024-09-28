const express = require('express');
const dotenv = require('dotenv');
const kindeAuthRoutes = require('./routes/kindeAuthRoutes');

dotenv.config();

const app = express();

app.use(express.json()); // To parse incoming JSON requests
app.use('/auth', kindeAuthRoutes); // Kinde Auth routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

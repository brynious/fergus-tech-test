const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require("body-parser")

const jobRoutes = require('./routes/api/jobs');
const noteRoutes = require('./routes/api/notes');

const app = express();
app.use(bodyParser.json())

// TODO: Setup user profiles and add JWT authentication requirements to all routes

app.use('/api/jobs', jobRoutes);
app.use('/api/notes', noteRoutes);

// Connect Database
connectDB();

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

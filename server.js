// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const tasksRoutes = require('./routes/tasks');
const formRoutes = require('./routes/forms');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

// Use tasks routes
app.use('/tasks', tasksRoutes);
app.use('/forms', formRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

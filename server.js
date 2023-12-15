// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const tasksRoutes = require('./routes/tasks');
const formRoutes = require('./routes/forms');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDBconst MONGO_URI = process.env.MONGO_URI;
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    console.error('MONGO_URI environment variable is not defined.');
    process.exit(1);
}

mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Use tasks routes
app.use('/tasks', tasksRoutes);
app.use('/forms', formRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

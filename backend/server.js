const connectDB = require('./config/db');
const express = require('express')

// DB Connection
connectDB();

const app = express();
const port = 3030;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API started');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
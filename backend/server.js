const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const tempRouter = require('./routes/tempallocation');
const detailRouter = require('./routes/detail');

app.use('/temps', tempRouter);
app.use('/details', detailRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

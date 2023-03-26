const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const uri = 'mongodb://localhost:27017/appointment-form'; 
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const appointmentRouter = require('./routes/appointments');
app.use('/appointments', appointmentRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

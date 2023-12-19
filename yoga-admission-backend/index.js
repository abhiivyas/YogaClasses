const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const DB ='mongodb+srv://studio:yoga@cluster0.wvrdpcv.mongodb.net/yogaclass?retryWrites=true&w=majority'
 mongoose.connect(DB).then(( ) => {
  console.log('connnection successful');
 }).catch((err) => console.log('no connection'));

const app = express();
const PORT = 3001;




const conn = mongoose.connection;

conn.once('open', () => {
  console.log('Successfully connected to the database');
});

conn.on('error', (error) => {
  console.error('Error connecting to the database:', error);
  process.exit(1);
});


const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email:String,
  selectedBatch: String,
});

const UserModel = mongoose.model("users", UserSchema);

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/getUsers", (req, res) => {
  UserModel.find({}).then(function (users) {
    res.json(users);
  }).catch(function (err) {
    console.log(err);
  });
});


app.post('/api/register', async (req, res) => {
  try {
    const { name, age, email, selectedBatch } = req.body;


    if (!name || !age || !selectedBatch) {
      return res.status(400).json({ error: 'All fields are required' });
    }


    const ageNumber = parseInt(age, 10);
    if (isNaN(ageNumber) || ageNumber < 18 || ageNumber > 65) {
      return res.status(400).json({ error: 'Invalid age. Must be between 18 and 65' });
    }


    const user = new UserModel({ name, age, email, selectedBatch });
    await user.save();



    return res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});



app.get('/profile/:id', async (req, res) => {
  const user = await UserModel.findById(req.params.id)
  res.status(200).json({
    success: true,
    user
  })
});

app.get('/profile', async (req, res) => {
  const user = await UserModel.find({});
  res.status(200).json({
    success: true,
    user
  })
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//monngo

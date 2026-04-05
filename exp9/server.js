// server.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// middleware to parse JSON body
app.use(express.json());

// 1. Basic route to check server
app.get('/', (req, res) => {
  res.send('Server is running');
});

// 2. Connect to MongoDB (local)
mongoose
  mongoose
  .connect('mongodb://127.0.0.1:27017/studentDB')
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB connection error:', err));
  
// 3. Schema + Model (Student)
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String,
  email: String
});

const Student = mongoose.model('Student', studentSchema);

// 4. POST /addStudent – insert data
app.post('/addStudent', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.send('Student added successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding student');
  }
});

// 5. GET /students – fetch all data
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching students');
  }
});

// 6. Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
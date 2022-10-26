const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
  res.send('Course API running');
});

app.get('/courses', (req, res) => {
  res.send(courses);
});

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const selectedCourses = courses.find(course => course.id === id);
  res.send(selectedCourses);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require("express");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;;

const uvRoutes = require('./routes/uv');
const questionRoutes = require('./routes/question');

app.use(cors());
app.use(express.json());
app.use('/', uvRoutes);
app.use('/', questionRoutes);

app.listen(PORT, () => {
  console.log(`Quiz API running on http://localhost:${PORT}`);
});
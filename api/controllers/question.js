const path = require("path");
const fs = require("fs");

exports.getQuestionsbyUV = (req, res) => {
  const uv = req.params.uv;
  const filePath = path.join(__dirname, "../../json", uv, "questions.json");

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: `${uv} UV directory or questions.js file not found for that directory` });
  }

  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    const questions = JSON.parse(fileData);
    res.json(questions);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error reading questions file", error: error.message });
  }
};

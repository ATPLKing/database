const path = require("path");
const fs = require("fs");

/**
 * Handles the request to retrieve questions based on the specified UV parameter.
 * 
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object used to send back the result.
 * 
 * Checks if the questions.json file exists in the specified UV directory.
 * If the file exists, reads and parses the JSON data, then sends it as a response.
 * If the file does not exist, sends a 404 error response.
 * If an error occurs during file reading, sends a 500 error response.
 */
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

const path = require("path");
const fs = require("fs");

/**
 * Retrieves the list of UVs from the 'uv.json' file and sends it as a JSON response.
 *
 * @function
 * @param  req - Express request object.
 * @param  res - Express response object.
 * @returns {void}
 *
 * @description
 * Checks if the 'uv.json' file exists in the current directory. If the file does not exist,
 * responds with a 404 status and an error message. If the file exists, reads and parses the file,
 * then sends the parsed data as a JSON response. If an error occurs during reading or parsing,
 * responds with a 500 status and an error message.
 */
exports.getUVList = (req, res) => {
  const filePath = path.join(__dirname,'../../json', "uv.json");

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: `file: uv.json not found` });
  }

  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    const uvList = JSON.parse(fileData);
    res.json(uvList);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error reading questions file", error: error.message });
  }
};

/**
 * Retrieves the list of subjects for a specific UV from the 'metadata.json' file and sends it as a JSON response.
 *
 * @function
 * @param  req - Express request object containing the UV parameter.
 * @param  res - Express response object.
 * @returns {void}
 *
 * @description
 * Checks if the 'metadata.json' file exists for the specified UV in the current directory. If the file does not exist,
 * responds with a 404 status and an error message. If the file exists, reads and parses the file,
 * then sends the parsed data as a JSON response. If an error occurs during reading or parsing,
 * responds with a 500 status and an error message.
 */
exports.getSubjectListByUV = (req, res) => {
  const uv = req.params.uv;
  const filePath = path.join(__dirname,'../../json' , uv, "metadata.json");

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: `file: metadata.json not found` });
  }

  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    const subjectList = JSON.parse(fileData);
    res.json(subjectList);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error reading questions file", error: error.message });
  }
};

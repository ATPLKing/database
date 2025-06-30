# ATPLKing Database

This repository contains the database schema, and questions and api for the ATPLKing project.

# CONTRIBUTION GUIDE
## Adding Questions

To contribute questions, refer to the example `example.json` file in the `json` folder. Your file should follow this structure:

```json
[
  {
    "subtopic": "",
    "database": "",
    "id":"TBD",
    "question": "",
    "options": [
      { "text": "", "correct": true },
      { "text": "", "correct": false },
      { "text": "", "correct": false },
      { "text": "", "correct": false }
    ],
    "explanation": ""
  }
]
```

**Instructions:**
- Each question is an object in the array.
- Fill :
  - `subtopic`: with the correct subtopic or leave it blank if not sure, 
  - `database` : add the letter A for Airplaine, H for Helicopter, or leave it blank for both, 
  - `id` : let the TBD value, it will be auto-assigned before merging
  - `question`, 
  - `options`: the four options with the correct value set to true for the right answer
  - and optionally `explanation` (references).


- The `options` array must have one correct answer (`"correct": true`) and the rest as false.
- Provide an `explanation` for the answer.
- Place your `objects` in the appropriate subject folder (e.g., `034`) in the `questions.json` file.
- Submit your changes via a pull request.


## LICENSE 


This project is licensed under the GNU General Public License v3.0.
You are free to use, modify, and distribute it under the terms of the license.

![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)

## Contact Me

Feel free to reach out to me through any of the following platforms:

<div align="center">
  <a href="https://github.com/Chesterkxng" target="_blank" style="text-decoration: none; color: #333;">
    <img src="https://img.shields.io/badge/GitHub-%23121011?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="mailto:cgoita00@gmail.com" target="_blank" style="text-decoration: none; color: #333;">
    <img src="https://img.shields.io/badge/Email-%23D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
  </a>
  <a href="https://discord.com/users/chesterkxng" target="_blank" style="text-decoration: none; color: #333;">
    <img src="https://img.shields.io/badge/Discord-%237289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" />
  </a>
  <a href="https://www.linkedin.com/in/cheick-goïta" target="_blank" style="text-decoration: none; color: #333;">
    <img src="https://img.shields.io/badge/LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
</div>


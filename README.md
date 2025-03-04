# Quiz App

## Overview
This is a simple Quiz App built using React.js. The app presents multiple-choice questions to users, tracks their score, and displays the result at the end.

## Features
- Displays multiple-choice quiz questions
- Timer for each question (15 seconds per question)
- Score tracking (only increases for correct answers)
- Shows final results at the end
- Play again option

## Technologies Used
- React.js
- React Router
- Tailwind CSS

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Sajid788/QuizMaster.git
   cd quizmaster
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development client:
   ```bash
   npm start
   ```

## File Structure
```
quiz-app/
│── src/
│   ├── components/
│   │   ├── QuestionCard.js
│   │   ├── Quiz.js
│   │   ├── Result.js
│   ├── data
│   ├── App.js
│   ├── index.js
│── public/
│   ├── assets/
│   │   ├── bg-quiz1.png
│   │   ├── bg-results.png
│── package.json
│── README.md
```

## Usage
1. The app starts with a multiple-choice question.
2. Users must select an answer before the timer runs out.
3. If the answer is correct, the score increases by 1.
4. The next question appears automatically.
5. After all questions are answered, the final score is displayed.
6. Users can restart the quiz.

## Future Enhancements
- Add different quiz categories
- Implement a leaderboard system
- Store user scores using local storage or a backend

## License
This project is licensed under the MIT License.


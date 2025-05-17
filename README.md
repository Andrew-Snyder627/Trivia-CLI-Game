🎮 CLI Trivia Challenge

Welcome to the Trivia Challenge, a fully interactive Command-Line Interface (CLI) game built with JavaScript! Test your knowledge across various categories and question types, including multiple choice and fill-in-the-blank. Timed gameplay, real-time feedback, and randomized questions make each playthrough unique.

📌 Features

🧠 Category selection: Choose from Sports, Movies, History, or test yourself on All Categories

🎯 Supports multiple question types:

Multiple choice

Fill-in-the-blank

⏱ 60-second game timer

🔁 Shuffled questions for a new experience every time

✅ Real-time feedback on your answers

🧪 Tested with Jest to ensure logic correctness

🛠️ Built With Node.js

@inquirer/prompts — for terminal-based user interaction

chalk — for colorful CLI output

jest — for unit testing core logic

📂 Project Structure

trivia-cli-game/
├── __tests__/             # Unit tests (Jest)

│   └── utils.test.js

├── data/

│   └── questions.js       # All trivia questions

├── src/

│   ├── game.js            # Main game logic

│   ├── timer.js           # Countdown timer

│   └── utils.js           # Reusable logic for answers, filtering, shuffling

├── index.js               # Game entry point

├── package.json

└── README.md

🚀 Getting Started
1. Clone the Repo
git clone https://github.com/Andrew-Snyder627/trivia-cli-game.git
cd trivia-cli-game
2. Install Dependencies
npm install
3. Run the Game
npm start
🧪 Run Tests
npm test
This will run unit tests for the answer-checking and category-filtering logic using Jest.

📝 Example Gameplay

Welcome to the Trivia Challenge!!

Choose a category:

❯ Sports

  Movies

  History

  All Categories

Which NFL team has won the most Super Bowls?

❯ Steelers

  Patriots

  Cowboys

  49ers

✅ Correct!!

Game complete! You scored 4/5

🧠 Future Improvements

Score history or high score tracking

Question limit selection

More categories (Science, Literature, etc.)

Sound effects or CLI animations

📬 Author

Andrew Snyder

Made as a summative JavaScript lab project for Flatiron School coursework.

🔗 GitHub: @Andrew-Snyder627
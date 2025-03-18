# Test Quiz - Cypress Testing

## **📌 Assignment Notice**
**This project is part of an assignment for a coding bootcamp.** It involves testing a pre-built Tech Quiz application using Cypress for component and end-to-end testing.

## **📖 Description**
The **Tech Quiz** application is a MERN stack project that allows users to take a quiz of ten random questions and view their final score. This assignment required implementing Cypress tests to ensure the application's functionality remains reliable and robust.

## **🛠️ Technologies Used**
- **MongoDB** (Database)
- **Express.js** (Backend Server & API)
- **React.js** (Frontend UI)
- **Node.js** (Runtime Environment)
- **TypeScript** (Static Typing)
- **Cypress** (Testing Framework)

## **📌 Assignment Requirements**
As per the assignment guidelines, the following tasks were completed:

✅ Installed Cypress as a development dependency.
✅ Configured Cypress for both **component** and **end-to-end testing**.
✅ Created a **component test** for the `Quiz` component.
✅ Created an **end-to-end test** to simulate a full quiz session.
✅ Documented the results through a **walkthrough video**.

## **📂 Project Structure**
```
├── client/                 # React Frontend
├── cypress/                # Cypress Tests
│   ├── component/          # Component tests
│   │   └── Quiz.cy.ts      # Tests for the Quiz component
│   ├── e2e/                # End-to-end tests
│   │   └── quiz.cy.ts      # Full application testing
│   ├── fixtures/           # Test data
│   └── tsconfig.json       # Cypress configuration
├── server/                 # Express.js Backend
├── .gitignore              # Ignore unnecessary files
├── cypress.config.ts       # Cypress configuration file
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## **🚀 Getting Started**

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Azugr/Module-19-Challenge
cd Module-19-Challenge
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up the Environment**
Rename `.env.example` to `.env` and update your MongoDB URI:
```env
MONGODB_URI=mongodb+srv://<your-database>
PORT=5000
NODE_ENV=development
```

### **4️⃣ Run the Application**
Start the backend and frontend together:
```sh
npm run develop
```

## **🧪 Running Cypress Tests**
Once the app is running, open a new terminal and launch Cypress:
```sh
npm run test		    cypress/e2e/ (E2E tests)
npm run test-component	cypress/component/ (Component tests)
npm run test-gui	    Opens Cypress GUI	Lets you select any test
```
Then, run:
- **Component Tests:** `Quiz.cy.ts`
- **End-to-End Tests:** `quiz.cy.ts`

## **📽️ Walkthrough Video**
📌 **[Click here](https://drive.google.com/file/d/1CF6I5lObKme-6ucmr8pII2eeF_vysaML/view?usp=drive_link) to watch the Cypress test walkthrough.**

## **📌 Notes**
This project follows best practices for file structure, test writing, and documentation. It was completed as part of an **educational assignment** and may not be a full-featured application beyond testing purposes.

---
**© 2025 - Assignment Submission for Coding Bootcamp**

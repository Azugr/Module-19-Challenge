import React from "react";
import Quiz from "../../client/src/components/Quiz"; 
import { mount } from "cypress/react18";

describe("Quiz Functionality", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/questions/random", { fixture: "questions.json" }).as("fetchQuestions");
  });

  it("displays the quiz welcome screen", () => {
    cy.then(() => {
      mount(<Quiz />);
    });

    cy.contains("Welcome to the Tech Quiz!").should("be.visible");
    cy.contains("Start Quiz").should("be.visible");

    // Capture an image of the initial screen
    cy.screenshot("quiz-home");
  });

  it("begins the quiz when 'Start Quiz' is clicked", () => {
    cy.then(() => {
      mount(<Quiz />);
    });

    cy.get("button").contains("Start Quiz").click();
    cy.wait("@fetchQuestions");

    cy.get("body").should("include.text", "Which of the following");

    // Screenshot after quiz starts
    cy.screenshot("quiz-in-progress");
  });

  it("displays the final screen upon completing the quiz", () => {
    cy.then(() => {
      mount(<Quiz />);
    });

    cy.get("button").contains("Start Quiz").click();
    cy.wait("@fetchQuestions");

    cy.get("body").should("include.text", "Which of the following");

    // Select an answer (Assumes buttons contain answers)
    cy.get("button").contains("except").click();

    // Confirm the quiz has been completed
    cy.contains("Quiz Completed", { timeout: 10000 }).should("be.visible");

    // Take a screenshot of the completion message
    cy.screenshot("quiz-finished");
  });
});



import React from "react";
import Quiz from "../../client/src/components/Quiz";
import { mount } from "cypress/react18";

describe("Quiz Component", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/questions/random", { fixture: "questions.json" }).as("fetchQuestions");
  });

  it("renders the quiz start screen", () => {
    mount(<Quiz />);
    cy.contains("Welcome to the Tech Quiz!").should("exist");
    cy.contains("Start Quiz").should("exist");

  });

  it("starts the quiz when clicking 'Start Quiz'", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();
    cy.wait("@fetchQuestions");
    cy.contains("What is the capital of France?").should("exist");

  });

  it("shows the completion screen after finishing the quiz", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();
    cy.wait("@fetchQuestions");

    cy.contains("What is the capital of France?").should("exist");

    cy.contains("Paris").click(); 

    cy.contains("Quiz Completed", { timeout: 10000 }).should("exist");

  });
});
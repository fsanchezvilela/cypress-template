import { email } from "../../fixtures/example.json";
import Todo from "../../PageObjects/TodoPage";

describe("Page Object Model / class example", () => {
  const todoPage = new Todo();

  beforeEach(() => {
    todoPage.visitPage();
  });

  it.only("Fixture usando .fixture metodo", () => {
    cy.fixture("example").then((data) => {
      todoPage.setTodo(data.email);
      todoPage.validateLastValueOfList(3, data.email)
    });
  });

  // usando el import required example
  it.only("Fixture usando Imports", () => {
    todoPage.setTodo(email);
    todoPage.validateLastValueOfList(3, email)
  });
});

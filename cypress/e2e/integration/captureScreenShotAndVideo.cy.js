import Todo from "../../PageObjects/TodoPage";
/* 
    Cypress Captura las imagenes y
    video automaticamente en test fallidos
*/
describe("capture screenshot", () => {
  const todoPage = new Todo();
  beforeEach(() => {
    todoPage.visitPage();
  });
  it("Screenshot Todo Page", () => {
    // Todo Example
    cy.screenshot("body");
    cy.wait(5000);
    cy.get(".todo-list").screenshot("todo-before");
    todoPage.setTodo("nuevo todo");
    todoPage.validateLastValueOfList(3, "nuevo todo");
    cy.get(".todo-list").screenshot("todo-after");
  });
});

/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

class Todo {
    
    visitPage(){
        cy.visit("https://example.cypress.io/todo");
    }

    setTodo(todo) {
        cy.get("[data-test=new-todo]").type(`${todo}{enter}`);
    }

    validateLastValueOfList(lengthOfElements, lastElement){
        cy.get(".todo-list li")
        .should("have.length", lengthOfElements)
        .last()
        .should("have.text", lastElement);
    }
}

export default Todo
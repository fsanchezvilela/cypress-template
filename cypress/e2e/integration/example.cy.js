describe("example", () => {
  beforeEach(() => {
    // Cypress comienza con una pizarra en blanco para cada prueba
    // entonces debemos decirle que visite nuestro sitio web con el comando `cy.visit()`.
    // Como queremos visitar la misma URL al comienzo de todas nuestras pruebas,
    // lo incluimos en nuestra función beforeEach para que se ejecute antes de cada prueba
    cy.visit("https://example.cypress.io/todo");
  });

  it("displays two todo items by default", () => {
    // Usamos el comando `cy.get()` para obtener todos los elementos que coinciden con el selector.
    // Luego usamos `should` para afirmar que hay dos elementos coincidentes,
    // cuáles son los dos elementos predeterminados.
    cy.get(".todo-list li").should("have.length", 2);

    // Podemos ir aún más lejos y verificar que cada uno de los todos predeterminados contenga
    // el texto correcto. Usamos las funciones `primera` y `última`
    // para obtener solo el primer y el último elemento coincidente individualmente,
    // y luego realizar una afirmación con `should`.
    cy.get(".todo-list li").first().should("have.text", "Pay electric bill");
    cy.get(".todo-list li").last().should("have.text", "Walk the dog");
  });

  it("can add new todo items", () => {
    // Almacenaremos el texto de nuestro elemento en una variable para poder reutilizarlo
    const newItem = "Feed the cat";

    // Obtengamos el elemento de entrada y usemos el comando `type` para
    // ingresa nuestro nuevo elemento de lista. Después de escribir el contenido de nuestro artículo,
    // también necesitamos escribir la tecla Intro para enviar la entrada.
    // Esta entrada tiene un atributo de prueba de datos, por lo que lo usaremos para seleccionar el
    // elemento de acuerdo con las mejores prácticas:
    // https://on.cypress.io/selecting-elements
    cy.get("[data-test=new-todo]").type(`${newItem}{enter}`);

    // Ahora que hemos escrito nuestro nuevo elemento, verifiquemos que realmente se haya agregado a la lista.
    // Dado que es el elemento más nuevo, debería existir como el último elemento de la lista.
    // Además, con los dos elementos predeterminados, deberíamos tener un total de 3 elementos en la lista.
    // Dado que las aserciones producen el elemento sobre el que se afirmó,
    // podemos encadenar ambas afirmaciones en una sola declaración.
    cy.get(".todo-list li")
      .should("have.length", 3)
      .last()
      .should("have.text", newItem);
  });
});

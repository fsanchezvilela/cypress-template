// Hooks and build it task
// - before (ejecuta antes de todos los test)
// - after (ejecuta despues de todos los test)
// - beforeEach (ejecuta antes de cada caso)
// - afterEach (ejecuta despues de cada caso)

describe.skip('Hooks & tags and filters', ()=>{
    // - before (ejecuta antes de todos los test)
    before(()=>{
        cy.log("******* Launch app *******")
    })
    // - after (ejecuta despues de todos los test)
    after(()=>{
        cy.log("****** Close app ******")
    })
    // - beforeEach (ejecuta antes de cada caso)
    beforeEach(()=>{
        cy.log("***** Login *****")
    })
    // - afterEach (ejecuta despues de cada caso)
    afterEach(()=>{
        cy.log("***** Logout *****")
    })

    it('search', ()=>{
        // -> ejecuta el beforeEach
        /* Bloque de prueba */ 
        cy.log("***** search *****")
        // -> ejecuta el afterEach 
    })
    // Podemos Saltar una prueba usando el .skip (esto no ejecutara los hooks "each")
    it.skip(('advance search', ()=>{
        cy.log("***** advance search *****")
    }))
    // Podemos solo ejecutar un bloque de prueba con el .only 
    // haciendo esto ignoramos los hooks
    it.only('listing products', ()=>{
        cy.log("***** products list *****")
    })
})
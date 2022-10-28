import Navbar from "../../src/components/Navbar"
import React from "react"


describe("Navbar Test",()=>{
    beforeEach(()=>{
        cy.mount(
                <Navbar/> 
        )
    })
    it("Navbar Test",()=>{
        cy.get("a")
        cy.get('a').eq(1).should('contain', 'ABOUT')
    })

    it("First Link Test",()=>{
        const firstLink="[data-cy=first]"
        cy.get(firstLink).should("have.text","HOME")
    })
    it("Testing if the number of links equals to 4",()=>{
        cy.get("[aria-label=link]").should("have.length",4)
        cy.get(".linkDiv a").should("have.length",4)
    })
    it("Testing if the links have 'hover:text-red-500' classname ",()=>{
        cy.get(".linkDiv a").should("have.class","hover:text-red-500")
    })
    it("Testing if last link contains 'SERVICES' ",()=>{
        cy.get(".linkDiv a").last()
        .should("have.text","SERVICES")
    })
    it("Testing if 'CONTACT' link has a class named 'third' ",()=>{
        cy.get(".linkDiv a")
        .contains(/contact/i)
        .should("have.class","third")
    })
    it("Testing if the number of links without 'temp' classname equals to 2 ",()=>{
        cy.get(".linkDiv a:not('.temp')")
        .should("have.length",2)
        .within(() => {
            cy.root().eq(0).should('have.text', "ABOUT")
            cy.root().eq(1).should('have.text', "SERVICES")
          })
    })


})
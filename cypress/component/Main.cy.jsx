import Main from "../../src/components/Main"
import React from "react"


describe("Main Test",()=>{
    beforeEach(()=>{
        cy.mount(
                <Main/> 
        )
    })
    it("button text", () => {
        cy.get("button").should("have.text","SHOW MODAL")
        cy.get("button").should("have.class","bg-purple-600")
      });
    it("testing if the modal is visible when the button is clicked", () => {
        cy.get("button").click()
        cy.get(".modal").should("be.visible")
      });
    it("testing modal", () => {
        cy.get("button").click()
        cy.get(".modal").first().should("contain","This Is Modal")
      });

})
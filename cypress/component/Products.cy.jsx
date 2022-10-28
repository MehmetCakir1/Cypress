import Products from "../../src/components/Products"
import React from "react"


describe("Products Test",()=>{
    beforeEach(()=>{
        cy.mount(
                <Products/> 
        )
    })
    it("img attribute test", () => {
        cy.get("img").should("have.attr","src")
      });
    it("testing if the title is truncated", () => {
        cy.get("div").find("h2").should("have.class","truncate")
      });
    it("testing if the price has dollar sign before itself", () => {
        cy.get("div").find("h1").should("contain","$")
      });

})
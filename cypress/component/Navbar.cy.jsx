import cypress from "cypress"
import Navbar from "../../src/components/Navbar"
import React from "react"


describe("Navbar Test",()=>{
    beforeEach(()=>{
        cy.mount(
                <Navbar/> 
        )
    })
    it("Navbar Test",()=>{
        cy.get("nav")
    })




})
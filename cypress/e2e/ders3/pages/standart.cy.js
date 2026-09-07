describe("Standart Test Yazma",function(){ 
it("tc01_standart test",function(){ 
cy.visit("https://www.edu.goit.global/account/login")
cy.get('.next-10stgr7').should("be.visible").and("have.text","Login")
cy.get('[name="email"]').should("be.visible").and("exist")
cy.get('[name="password"]').should("be.visible")
cy.get('.next-1jphuq5').should("be.visible").and("exist")
cy.get('.next-1v2ri13 > .next-mtc523').should("be.visible").and("have.text","I can't remember the password")

f


})






})
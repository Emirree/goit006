class Login{ 
navigateURL(){ 
cy.visit("https://www.edu.goit.global/account/login")
 }

 checkTitle(){ 
 cy.get('.next-10stgr7 > .next-c1vj7d').should("be.visible").and("have.text","Login")   
 }

 checkEmailField(){ 
 cy.get('[name="email"]').should("be.visible").and("exist")   
 }

 checkPasswordField(){ 
 cy.get('[name="password"]').should("be.visible")   
 }

 checkLoginbutton(){ 
 cy.get('.eckniwg2').should("be.visible").and("exist")   
 }

 forgetPassword(){ 
 cy.get('.next-1v2ri13 > .next-mtc523').should("be.visible").and("have.text","I can't remember the password")   
 }
}
export default new Login()
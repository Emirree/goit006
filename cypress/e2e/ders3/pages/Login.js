export class Login {

 
 navigateURL(){ 
cy.visit("https://www.edu.goit.global/account/login")
 }
 

checkTitle(){ 
cy.get('.next-10stgr7').
should("be.visible").
and("have.text","Login")    
}

checkEmailField(){ 
cy.get('[name="email"]').should("be.visible").and("exist")
}

checkPasswordField(){ 
cy.get('[name="password"]').should("be.visible").and("exist")    
}

checkLoginbutton(){ 
cy.get('.next-1jphuq5').should("be.visible").and("exist")    
}

forgetPassword(text){ 
cy.get('.next-1v2ri13 > .next-mtc523').should("be.visible").and("have.text",text)    
}


}
export default new Login()
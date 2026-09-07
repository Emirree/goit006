class Login{ 
navigateURL(){ 
cy.visit("https://www.edu.goit.global/account/login")
 }

checkemail(){ 
cy.get('[name="email"]').type("user888@gmail.com ")
}

checkpassword(){ 
cy.get('[name="password"]').type("1234567890")    
}

checklogin(){ 
cy.get('.eckniwg2').click()    
}

checkwait(){ 
cy.wait(3000)   
}

 checklogo(){ 
cy.get('.logo-icon').should("be.visible")

 }

 checkcoursebutton(){ 
 cy.get('.ehpfpvn0 > .next-1jphuq5').should("be.visible")   
 }

 checknavigasyonbutton(){ 
 cy.get('#open-navigation-menu-mobile').should("be.visible")   
 }

 checkimg(){ 
cy.get('.next-1sh4jrc > img').should("be.visible")    
 }

 checkcourseimg(){ 
 cy.get('.next-yzbslz').should("be.visible")   
 }

 checkclassbutton(){ 
 cy.get('.emdezhw2 > .next-1jphuq5').should("be.visible")   
 }

 checkjobimg(){ 
 cy.get('.next-3zy62z').should("be.visible")   
 }

 checkbonusimg(){ 
cy.get('.next-qqgo2q').should("be.visible")    
 }



}
export default new Login()
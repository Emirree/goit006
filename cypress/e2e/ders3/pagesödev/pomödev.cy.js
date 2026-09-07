import Loginödev from "./Loginödev"
describe("Page Object Model",function(){
it("tc03_Page Object Pattern",function(){ 
Loginödev.navigateURL()
Loginödev.checkTitle("Login")
Loginödev.checkEmailField()
Loginödev.checkPasswordField()
Loginödev.checkLoginbutton()
Loginödev.forgetPassword("I can't remember the password")





})    
})
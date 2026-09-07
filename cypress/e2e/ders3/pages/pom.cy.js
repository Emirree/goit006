import  Login  from "./Login"
describe("Page Object Model",function(){ 
it("tc02_Page Object Pattern ",function(){ 

Login.navigateURL()
Login.checkTitle("Login")
Login.checkEmailField()
Login.checkPasswordField()
Login.checkLoginbutton()
Login.forgetPassword("I can't remember the password")



})






})
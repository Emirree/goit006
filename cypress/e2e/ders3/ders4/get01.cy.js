describe("API Testing" ,function(){
it("tc01_get isteği" ,function(){
cy.request("http://api.thecatapi.com/v1/images/search").then((response) => {
expect(response.status).to.eq(200);
})

})
it("tc02_get isteği" ,function(){
cy.request("http://api.thecatapi.com/v1/images/search").then((response) => {
expect(response.status).to.eq(200);
})

cy.request("http://api.thecatapi.com/v1/images/search")
.then((response) => {
expect(response.status).to.eq(200);
console.log("responce::::::",response )
cy.log("responce::::::",JSON.stringify(response))
cy.log("responce body::::::",JSON.stringify(response.body))
cy.log("responce headers::::::",JSON.stringify(response.headers))
cy.log("responce status::::::",JSON.stringify(response.status))
cy.log("responce duration::::::",JSON.stringify(response.duration))
})

})

it("tc03_get isteği", () => {

const request = {
  method: 'GET',
  url: 'https://api.thecatapi.com/v1/images/search',

  headers: {
    'User-Agent': 'PostmanRuntime/2.5.0',
    'Accept': '*/*',
    'Accept-Encoding': 'gzip,deflate,br',
    'Connection': 'keep-alive'
  },

  failOnStatusCode: false
}
cy.request(request).then((response) => {

  expect(request.headers['User-Agent']).to.eq('PostmanRuntime/2.5.0')
  expect(request.headers['Accept']).to.eq('*/*')
  expect(request.headers['Accept-Encoding']).to.eq('gzip,deflate,br')
  expect(request.headers['Connection']).to.eq('keep-alive')

})

cy.request(request).then((response) => {

cy.log("STATUS: " + response.status)
cy.log("BODY: " + JSON.stringify(response.body))
cy.log("HEADERS: " + JSON.stringify(response.headers))

})
})

});












describe("API Testing - Httpbin", function () {

it("tc01_GET isteği", function () {

cy.request({
method: "GET",
url: "https://httpbin.org/get"
}).then(function(response) {

expect(response.status).to.eq(200)

});
});
it("tc02_POST isteği", function () {

cy.request({
method: "POST",
url: "https://httpbin.org/post",

body: {
name: "Emir",
course: "QA",
age: "20"
}

}).then(function(response) {

expect(response.status).to.eq(200);
expect(response.body.json.name).to.eq("Emir")
expect(response.body.json.course).to.eq("QA")
expect(response.body.json.age).to.eq("20")

});

});
it("tc03_QS testi", function () {

cy.request({
method: "GET",
url: "https://httpbin.org/get",

qs: {
id:"1",
name: "Emir",
age:"20",
role:"QA"            
}

}).then(function(response) {

expect(response.status).to.eq(200);
expect(response.body.args.id).to.eq("1")
expect(response.body.args.name).to.eq("Emir")
expect(response.body.args.age).to.eq("20")
expect(response.body.args.role).to.eq("QA")       
});
});

it("tc05_ headers testi", function () {

cy.request({
method: "GET",
url: "https://httpbin.org/headers",

headers: {
"Host":"<calculated when request is sent>",
"User-Agent": "PostmanRunTime/2.5.0",
"Accept":"*/*",
"Accept-Encoding":"gzip,deflate,br",
"Connection":"keep-alive"
}

}).then(function(response) {

expect(response.status).to.eq(200)

expect(response.body.headers["User-Agent"])
.to.eq("PostmanRunTime/2.5.0");

expect(response.body.headers["Accept"])
.to.eq("*/*");

expect(response.body.headers["Host"])
.to.eq("<calculated when request is sent>")

expect(response.body.headers["Accept-Encoding"])
.to.eq("gzip,deflate,br")
});
});
it("tc06_PUT isteği", function () {

cy.request({
method: "PUT",
url: "https://httpbin.org/put",

body: {
name: "Emir",
surname: "Efe",
age: 22,
role: "QA"
}

}).then(function(response) {

expect(response.status).to.eq(200);
expect(response.body.json.name).to.eq("Emir")
expect(response.body.json.surname).to.eq("Efe")
expect(response.body.json.age).to.eq(22)
expect(response.body.json.role).to.eq("QA")
})
})

it("tc07_PATCH isteği", function () {

cy.request({
method: "PATCH",
url: "https://httpbin.org/patch",

body: {
name: "Emir67",
surname:"Efe67",
age:24,
status: "updated"
}

}).then(function(response) {

expect(response.status).to.eq(200);
expect(response.body.json.name).to.eq("Emir67")
expect(response.body.json.surname).to.eq("Efe67");
expect(response.body.json.age).to.eq(24)
expect(response.body.json.status).to.eq("updated")
})
})
it("tc08_DELETE isteği", function () {

cy.request({
method: "DELETE",
url: "https://httpbin.org/delete"
}).then(function(response) {
expect(response.status).to.eq(200)
})
})
it("tc09_Response body kontrolü", function () {
cy.request({
method: "GET",
url: "https://httpbin.org/get"
}).then(function(response) {

expect(response.status).to.eq(200);
expect(response.body).to.have.property("args")
expect(response.body).to.have.property("headers")
expect(response.body).to.have.property("origin")
expect(response.body).to.have.property("url")
})
})
it("TC10 - Response time testi", function () {

cy.request({
 method: "GET",
url: "https://httpbin.org/get"
}).then(function(response) {

expect(response.status).to.eq(200);
cy.log("Response Time: " + response.duration + " ms");
expect(response.duration).to.be.lessThan(3000);
});
});
})

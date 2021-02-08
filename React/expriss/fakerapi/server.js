const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

// req is short for request
// res is short for response
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
class user {
  constructor(){
      this.name = faker.name.firstName();
      this.name = faker.name.lastName();
      this.phoneNumber = faker.phone.phoneNumber();
      this.email = faker.internet.email();
      this.password = faker.internet.password();
  }
}
class company {
    constructor(){
        this.name = faker.company.companyName();
        this.address ={ "street":faker.address.streetName(),"city":faker.address.city(),"state":faker.address.state(),"zipcode":faker.address.zipCode(),"country":faker.address.country()}
    }
  }

  const users =[];
  const companies=[];

app.get("/api/user", (req, res) => {
  res.json(users);
});
app.get("/api/company", (req, res) => {
  res.json(companies);
});
app.post("/api/newuser", (req, res) => {
  users.push( new user());
  res.json( { status: "done!" } );
});
app.post("/api/newcompany", (req, res) => {

    companies.push( new company());
    res.json( { status: "done!" } );
  });
  app.post("/api/newcompany/newuser", (req, res) => {
    users.push( new user());

    companies.push( new company());
    res.json( { status: "done!" } );
  });




 app.listen(port, () =>
  console.log(`Listening on port: ${port}`)
);

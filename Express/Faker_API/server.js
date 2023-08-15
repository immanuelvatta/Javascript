const express = require("express");
const app = express();
const port  = 8000;

// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require('@faker-js/faker');


// user
const createUser = () =>{
    const userObj = {
        _id : faker.string.uuid(),
        firstName : faker.person.firstName(),
        lastName : faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number('###-###-####'),
    };
    return userObj;
}
//company
const createCompany = () =>{
    const companyObj = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        },
    };
    return companyObj;
}

const userAndCompany = () => {
    const userAndCompObj = {
        user: createUser(),
        company: createCompany(),
    }
    return userAndCompObj
}


const newFakeUser = createUser();
const newFakeCompany = createCompany();
const newFakeUserAndCompany = userAndCompany();


app.get('/api/user/new', (req,res) =>{
    res.json(newFakeUser);
});

app.get('/api/company/new', (req,res) =>{
    res.json(newFakeCompany);
});

app.get('/api/user/company', (req,res) =>{
    res.json(newFakeUserAndCompany)
})

const server = app.listen(port , () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
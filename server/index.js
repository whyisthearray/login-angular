const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var users = [
    {
        id: 1,
        name: "Alex",
        login: "alex123",
        pass: "qweqwe",
        city: "Lviv",
        contact: ""
    },
    {
        id: 2,
        name: "Dima",
        login: "dima123",
        pass: "qweqwe",
        city: "Kyiv",
        contact: ""
    },
    {
        id: 3,
        name: "Oleg",
        login: "oleg123",
        pass: "qweqwe",
        city: "Odessa",
        contact: ""
    }
];


app.get('/', (req, res) => {
    res.send("hi");
});

app.post('/login', (req, res) => {
    let user = users.find(x => x.login === req.body.login);
    if (user === undefined)
        res.send({ error: "user not found" });
    else {
        if (user.login === req.body.login && user.pass === req.body.pass) {
            res.send(user);
        }
    }

});

app.get('/users/:id', (req, res) => {
    let user = users.find(x => x.id === +req.params.id);
    if (user === undefined)
        res.send({ error: "user not found" });
    else
        res.send(user);
});

app.post('/users', (req, res) => {
    let user = {
        name: req.body.name,
        login: req.body.login,
        pass: req.body.pass,
        city: req.body.city,
        contact: req.body.contact
    }
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.put('/users/:id', (req, res) => {
    let user = users.find(x => x.id === +req.params.id);
    if (user === undefined)
        res.send({ error: "user not found" });
    else {
        user.name = req.body.name;
        user.login = req.body.login;
        user.pass = req.body.pass;
        user.city = req.body.city;
        user.contact = req.body.contact;
        res.send(user);
    }
});

app.delete('/users/:id', (req, res) => {
    let user = users.find(x => x.id === +req.params.id);
    if (user === undefined)
        res.send({ error: "user not found" });
    else {
        users.splice(users.indexOf(user), 1);
        res.send({ result: 0 });
    }
})


app.listen(3000, () => {
    console.log('Server started');
});
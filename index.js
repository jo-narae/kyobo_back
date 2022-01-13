const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

var sequelize = require('./db/models').sequelize;
sequelize.sync();

const Book = require("./db/query/books");
app.use(express.json());

app.get('/books', async function(req, res) {
    await Book.findAll()
        .then((books) => {
            if(!books.length) return res.status(404).send({ err: 'Todo not found' });
            res.send(books);
        })
        .catch(err => res.status(500).send(err));
});

app.get('/books/:id', async function(req, res) {
    await Book.findAll({ where: { id: req.params.id } })
        .then((books) => {
            if(!books.length) return res.status(404).send({ err: 'Todo not found' });
            res.send(books);
        })
        .catch(err => res.status(500).send(err));
});

app.post('/books', async function(req, res) {
    await Book.create(req.body)
        .then((book) => res.send(book))
        .catch(err => res.status(500).send(err));
});

app.put('/books/:id', async function(req, res) {
    await Book.update({ id: req.params.id, ...req.body })
        .then((book) => res.send(book))
        .catch(err => res.status(500).send(err));
});

app.delete('/books/:id', async function(req, res) {
    await Book.destroy({ id: req.params.id })
        .then((book) => res.send(book))
        .catch(err => res.status(500).send(err));
});


app.listen(port, () => {
    console.log('Server is up on port ' + port);
});
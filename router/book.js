const express = require('express');
const router = express.Router();

const Book = require("../db/query/books");

router.get('/', async function(req, res) {
    await Book.findAll()
        .then((books) => {
            if(!books.length) return res.status(404).send({ err: 'Todo not found' });
            res.send(books);
        })
        .catch(err => res.status(500).send(err));
});

router.get('/:id', async function(req, res) {
    await Book.findAll({ where: { id: req.params.id } })
        .then((books) => {
            if(!books.length) return res.status(404).send({ err: 'Todo not found' });
            res.send(books);
        })
        .catch(err => res.status(500).send(err));
});

router.post('/', async function(req, res) {
    await Book.create(req.body)
        .then((book) => res.send(book))
        .catch(err => res.status(500).send(err));
});

router.put('/:id', async function(req, res) {
    await Book.update({ id: req.params.id, ...req.body })
        .then((book) => res.send(book))
        .catch(err => res.status(500).send(err));
});

router.delete('/:id', async function(req, res) {
    await Book.destroy({ id: req.params.id })
        .then(() => res.status(200).send({ message: 'It has been successfully deleted.' }))
        .catch(err => console.log(err));
});

module.exports = router;
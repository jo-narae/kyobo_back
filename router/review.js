const express = require('express');
const router = express.Router();

const Review = require("../db/query/reviews");

router.get('/', async function(req, res) {
    await Review.findAll()
        .then((reviews) => {
            if(!reviews.length) return res.status(404).send({ err: 'Todo not found' });
            res.send(reviews);
        })
        .catch(err => res.status(500).send(err));
});

router.get('/:id', async function(req, res) {
    await Review.findAll({ where: { id: req.params.id } })
        .then((reviews) => {
            if(!reviews.length) return res.status(404).send({ err: 'Todo not found' });
            res.send(reviews);
        })
        .catch(err => res.status(500).send(err));
});

router.post('/', async function(req, res) {
    await Review.create(req.body)
        .then((review) => res.send(review))
        .catch(err => res.status(500).send(err));
});

router.put('/:id', async function(req, res) {
    await Review.update({ id: req.params.id, ...req.body })
        .then((review) => res.send(review))
        .catch(err => res.status(500).send(err));
});

router.delete('/:id', async function(req, res) {
    await Review.destroy({ id: req.params.id })
        .then(() => res.status(200).send({ message: 'It has been successfully deleted.' }))
        .catch(err => console.log(err));
});

module.exports = router;
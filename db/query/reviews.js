const models = require('../models');

async function findAll(args) {
    return await models.Review.findAll(args);
}

async function create(args) {
    return await models.Review.create(args);
}

async function update(args) {
    return await models.Review.update(args, { where: { id: args.id } });
}

async function destroy(args) {
    return await models.Review.destroy({ where: { id: args.id } });
}

module.exports = {
    findAll,
    create,
    update,
    destroy
};
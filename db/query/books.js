const models = require('../models');

async function findAll(args) {
    return await models.Book.findAll(args);
}

async function create(args) {
    return await models.Book.create(args);
}

async function update(args) {
    return await models.Book.update(args, { where: { id: args.id } });
}

async function destroy(args) {
    return await models.Book.destroy({ where: { id: args.id } });
}

module.exports = {
    findAll,
    create,
    update,
    destroy
};
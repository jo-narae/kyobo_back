const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const cors = require('cors');

var sequelize = require('./db/models').sequelize;
sequelize.sync();

app.use(express.json());
app.use(cors());

const Router = require('./router');

app.use(Router);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});
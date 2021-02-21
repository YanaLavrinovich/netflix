import {ROUTES} from "../src/routes";

const express = require('express');
const path = require('path');

const PORT = 3000;

const serverRenderer = require('./serverRenderer');

const app = express();

ROUTES.forEach(route => {
    app.get(route.path, serverRenderer.render(route));
});

app.use(express.static(path.resolve(__dirname, '../build')))
app.use(express.static(path.resolve(__dirname, '../public')))

app.use(serverRenderer.render());

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

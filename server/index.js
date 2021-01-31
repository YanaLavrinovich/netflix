const express = require('express');
const path = require('path');

const PORT = 3000;

const serverRenderer = require('./serverRenderer');

/**
 * initialize the application and create the routes
 */
const app = express();

/** 
 * "/path-in-out-routes-arr" should always serve our server rendered page;
 * otherwise, continue with next handlers 
 */
app.get('/*', serverRenderer.render());

/**
 * Set the location of the static assets (ie the js bundle generated by webapck)
 */
app.use(express.static(path.resolve(__dirname, '../build')))
app.use(express.static(path.resolve(__dirname, '../public')))

/**
 * Since this is the last non-error-handling
 * middleware use()d, we assume 404, as nothing else
 * responded.
 */
app.use(serverRenderer.render());

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
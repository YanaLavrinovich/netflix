import React from 'react';
import {matchPath, StaticRouter} from "react-router";
import path from 'path';
import {ChunkExtractor} from '@loadable/server'

const renderToString = require('react-dom/server').renderToString;
const fs = require('fs');
const configureStore = require('../src/redux/configureStore').default;

const store = configureStore();
const App = require('../src/App').default;
const statsFile = path.resolve(path.resolve(__dirname, '../build/asset-manifest.json'))
const extractor = new ChunkExtractor({statsFile})

const handleRequest = ({res, htmlData, location, context}) => {
    const jsx = extractor.collectChunks(<App
        store={store}
        location={location}
        context={context}
        Router={StaticRouter}
    />)
    const reactDom = renderToString(jsx);

    return res.end(
        htmlData.replace(
            '<div id="root"></div>',
            `<div id="root">${reactDom}</div>`
        ).replace(
            '__REDUX__',
            JSON.stringify(store.getState())
        )
    );
}

exports = module.exports;

exports.render = (route) => {
    return (req, res, next) => {

        let match = matchPath(req.path, {
            path: route.path,
            exact: true,
        });

        const is404 = req._possible404;
        if (!match && !is404) {
            req._possible404 = true;
            return next();
        }

        const filePath = path.resolve(__dirname, '..', 'build', 'index.html');

        let htmlData;

        try {
            htmlData = fs.readFileSync(filePath, 'utf8');
        } catch (err) {
            console.error('err', err);
            return res.status(404).end();
        }

        if (is404) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            console.log(`SSR of unrouted path ${req.path} (404 ahead)`)
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            console.log(`SSR of ${req.path}`);
        }

        if (route.action && req.params) {
            const param = Object.entries(req.params)[0][1];
            store.dispatch(route.action(param)).then(() => {
                handleRequest({
                    res,
                    htmlData,
                    store,
                    location: req.url,
                    context: {},
                })
            })
            return;
        }

        handleRequest({
            res,
            htmlData,
            store,
            location: req.url,
            context: {},
        })
    };
};

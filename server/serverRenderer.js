import {StaticRouter} from "react-router";
import {ROUTES} from "./routes";

const React = require('react')
const renderToString = require('react-dom/server').renderToString;
const matchPath = require('react-router').matchPath;
const path = require('path');
const fs = require('fs');
const configureStore = require('../src/redux/configureStore').default;


const App = require('../src/App').default;

const handleRequest = (res, htmlData, store, location, context) => {
    const jsx = <App
        store={store}
        location={location}
        context={context}
        Router={StaticRouter}
    />
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

exports.render = () => {
    return (req, res, next) => {

        let match = ROUTES.find(route => matchPath(req.path, {
            path: route.path,
            exact: true,
        }));

        const context = {}
        const is404 = req._possible404;

        if (match || is404) {
            const filePath = path.resolve(__dirname, '..', 'build', 'index.html');

            fs.readFile(filePath, 'utf8', (err, htmlData) => {
                if (err) {
                    console.error('err', err);
                    return res.status(404).end();
                }

                const location = req.url;

                if (is404) {
                    res.writeHead(404, {'Content-Type': 'text/html'})
                    console.log(`SSR of unrouted path ${req.path} (404 ahead)`)
                } else {
                    res.writeHead(200, {'Content-Type': 'text/html'})
                    console.log(`SSR of ${req.path}`);
                }

                const store = configureStore();

                if (match && match?.loadData) {
                    match.loadData(store.dispatch, location)
                    setTimeout(() => {
                        handleRequest(res, htmlData, store, location, context)
                    }, 500)
                } else {
                    handleRequest(res, htmlData, store, location, context)
                }
            })
        } else {
            req._possible404 = true;
            return next();
        }
    };
};

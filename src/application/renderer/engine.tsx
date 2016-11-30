import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { RouterContext } from 'react-router';

const page = require('views/index.ejs');

const renderContext = (renderProps) => ({
    html: ReactDOMServer.renderToString(<RouterContext {...renderProps} />),
    css: '<style id="render-bundle-css">\n' + global.bundleCss + '</style>'
});

export const renderHTML = (renderProps, iconLinks, clientScripts) =>
    new Promise((resolve, reject) => {
        console.log("rendering context...");
        let { html, css } = renderContext(renderProps);
        try {
            resolve(
                page({
                    serverApp: html,
                    styles: css,
                    links: iconLinks,
                    scripts: clientScripts
                })
            );
        } catch (err) {
            reject(err);
        }
    });

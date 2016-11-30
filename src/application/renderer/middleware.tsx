import { renderHTML } from 'application/renderer/engine';
import routes from 'application/routes';
import { match } from 'react-router';

const serverSideRenderer = (req, res, next) => {
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        if (error) {
            console.log(error);
            res.status(500).send(JSON.stringify(error, null, 2));
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            renderHTML(renderProps, req.app.get('icons'), req.app.get('clientScripts'))
            .then(html => res.status(200).send(html))
            .catch(error => {console.log(error); res.status(500).send(JSON.stringify(error, null, 2));});
        } else {
            res.status(404).send();
        }
    });
};

export default serverSideRenderer;

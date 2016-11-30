import { default as Express, static as expressStatic } from 'express';
import { resolve } from 'path';

import serverSideRenderer from 'application/renderer/middleware';
import { iconLinks, clientScripts } from 'application/data/buildData';

const port = (process.env.PORT || 3700);
let app = Express();

app.use(expressStatic(resolve('www'), { index: false }));
app.use(serverSideRenderer);

app.set('icons', iconLinks);
app.set('clientScripts', clientScripts);
app.listen(port, () => {
    console.log(`Running express app on port ${port}`);
});

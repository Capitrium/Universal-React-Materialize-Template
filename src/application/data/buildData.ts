const iconStats = require('../../../www/iconstats.json');
const assetStats = require('../../../www/assets.json');

export const clientScripts = Object.keys(assetStats).map((entry:string) => {
    if (entry.indexOf('async') === -1) {
        return '<script type="text/javascript" src="' + assetStats[entry].js + '"></script>';
    }
}).reverse().join("\n");

export const iconLinks = iconStats.html.join("\n\t");

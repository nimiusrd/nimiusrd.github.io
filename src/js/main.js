const SVG = require('svg.js');

if (SVG.supported) {

  const draw = SVG('draw').size(500, 500);
  const line = draw.line(250, 500, 250, 250).stroke({
    width: 10
  });

} else {

  console.warn('SVG not supported');

}

var clusterSize = 0;
function categories_Municipalities(feature, value, clusterSize, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       textPlacement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'BOLOGNA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(57,60,55,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(134,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CASALECCHIO DI RENO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(57,60,55,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(202,0,32,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CASTEL MAGGIORE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(57,60,55,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(255,127,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CASTENASO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(57,60,55,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(255,213,84,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'GRANAROLO DELL`EMILIA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(57,60,55,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(178,223,138,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'MONTE SAN PIETRO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(57,60,55,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(38,115,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PIANORO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(57,60,55,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(46,163,225,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SAN LAZZARO DI SAVENA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(57,60,55,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(111,64,155,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SASSO MARCONI':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(57,60,55,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(35,39,177,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ZOLA PREDOSA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(57,60,55,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(25,33,83,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(57,60,55,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(231,131,236,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Municipalities = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "13.0px \'Nirmala UI\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var textPlacement = 'point';
    var offsetX = 8;
    var offsetY = 3; 
        var value = feature.get("NOME_C") || "";
        if ("" !== null) {
            labelText = String("");
        }
        
var style = categories_Municipalities(feature, value, clusterSize, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, textPlacement);

    return style;
};

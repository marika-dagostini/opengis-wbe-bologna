var clusterSize = 0;

var style_Wastewatertreatmentplant = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var textPlacement = 'point';
    var offsetX = 8;
    var offsetY = 3; 
        // Check if the feature is a cluster
        var clusteredFeatures = feature.get("features");	
        var feature
        var value
        // Checks if clusteredFeatures is defined and if it is an array
        if (Array.isArray(clusteredFeatures)) {
            clusterSize = clusteredFeatures.length;
            feature = clusteredFeatures[0];
            value = clusteredFeatures[0].get("");
        } else {
            feature = feature
            value = feature.get("");
        }
        if ("" !== null) {
            labelText = String("");
        }    
        var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + clusterSize,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(46,96,43,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(153,227,87,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];

    return style;
};

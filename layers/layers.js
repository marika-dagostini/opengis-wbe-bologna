var wms_layers = [];

var lyr_OSMStandard = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a> &nbsp&nbsp ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
        
var format_RiskCoefficientsWi = new ol.format.GeoJSON();
var features_RiskCoefficientsWi = format_RiskCoefficientsWi.readFeatures(json_RiskCoefficientsWi, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiskCoefficientsWi = new ol.source.Vector({
    attributions: '<a class="legend"><b>Risk Coefficients Wi</b><br />\
        <img src="styles/legend/RiskCoefficientsWi_0.png" /> 0,13 - 0,7<br />\
        <img src="styles/legend/RiskCoefficientsWi_1.png" /> 0,7 - 0,85<br />\
        <img src="styles/legend/RiskCoefficientsWi_2.png" /> 0,85 - 0,95<br />\
        <img src="styles/legend/RiskCoefficientsWi_3.png" /> 0,95 - 1<br />\
        <img src="styles/legend/RiskCoefficientsWi_4.png" /> 1 - 1,1<br />\
        <img src="styles/legend/RiskCoefficientsWi_5.png" /> 1,1 - 1,3<br />\
        <img src="styles/legend/RiskCoefficientsWi_6.png" /> 1,3 - 24,04<br /></a>'
        });
var lyr_RiskCoefficientsWi = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_RiskCoefficientsWi, 
    style: style_RiskCoefficientsWi,
    permalink: "RiskCoefficientsWi",
    popuplayertitle: 'Risk Coefficients Wi',
    creationdate: '2025-07-11 00:36:49',
    interactive: false,
    title: '<div id="layertitle">Risk Coefficients Wi<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/RiskCoefficientsWi_0.png" /> 0,13 - 0,7<br />\
        <img src="styles/legend/RiskCoefficientsWi_1.png" /> 0,7 - 0,85<br />\
        <img src="styles/legend/RiskCoefficientsWi_2.png" /> 0,85 - 0,95<br />\
        <img src="styles/legend/RiskCoefficientsWi_3.png" /> 0,95 - 1<br />\
        <img src="styles/legend/RiskCoefficientsWi_4.png" /> 1 - 1,1<br />\
        <img src="styles/legend/RiskCoefficientsWi_5.png" /> 1,1 - 1,3<br />\
        <img src="styles/legend/RiskCoefficientsWi_6.png" /> 1,3 - 24,04<br /></a>'
        });
var featureCounter_RiskCoefficientsWi = 1;
jsonSource_RiskCoefficientsWi.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_RiskCoefficientsWi++);
    feature.set("layerObject", lyr_RiskCoefficientsWi);
});        
jsonSource_RiskCoefficientsWi.addFeatures(features_RiskCoefficientsWi);

var format_PosteriorMeanPrecisionParameter = new ol.format.GeoJSON();
var features_PosteriorMeanPrecisionParameter = format_PosteriorMeanPrecisionParameter.readFeatures(json_PosteriorMeanPrecisionParameter, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PosteriorMeanPrecisionParameter = new ol.source.Vector({
    attributions: '<a class="legend"><b>Posterior Mean Precision Parameter</b><br />\
        <img src="styles/legend/PosteriorMeanPrecisionParameter_0.png" /> 0,177 - 0,2<br />\
        <img src="styles/legend/PosteriorMeanPrecisionParameter_1.png" /> 0,2 - 0,25<br />\
        <img src="styles/legend/PosteriorMeanPrecisionParameter_2.png" /> 0,25 - 0,3<br />\
        <img src="styles/legend/PosteriorMeanPrecisionParameter_3.png" /> 0,3 - 0,35<br />\
        <img src="styles/legend/PosteriorMeanPrecisionParameter_4.png" /> 0,35 - 0,4<br />\
        <img src="styles/legend/PosteriorMeanPrecisionParameter_5.png" /> 0,4 - 0,42<br /></a>'
        });
var lyr_PosteriorMeanPrecisionParameter = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_PosteriorMeanPrecisionParameter, 
    style: style_PosteriorMeanPrecisionParameter,
    permalink: "PosteriorMeanPrecisionParameter",
    popuplayertitle: 'Posterior Mean Precision Parameter',
    creationdate: '2025-07-11 00:36:49',
    interactive: false,
    title: '<div id="layertitle">Posterior Mean Precision Parameter<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/PosteriorMeanPrecisionParameter_0.png" /> 0,177 - 0,2<br />\
        <img src="styles/legend/PosteriorMeanPrecisionParameter_1.png" /> 0,2 - 0,25<br />\
        <img src="styles/legend/PosteriorMeanPrecisionParameter_2.png" /> 0,25 - 0,3<br />\
        <img src="styles/legend/PosteriorMeanPrecisionParameter_3.png" /> 0,3 - 0,35<br />\
        <img src="styles/legend/PosteriorMeanPrecisionParameter_4.png" /> 0,35 - 0,4<br />\
        <img src="styles/legend/PosteriorMeanPrecisionParameter_5.png" /> 0,4 - 0,42<br /></a>'
        });
var featureCounter_PosteriorMeanPrecisionParameter = 1;
jsonSource_PosteriorMeanPrecisionParameter.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_PosteriorMeanPrecisionParameter++);
    feature.set("layerObject", lyr_PosteriorMeanPrecisionParameter);
});        
jsonSource_PosteriorMeanPrecisionParameter.addFeatures(features_PosteriorMeanPrecisionParameter);

var format_IRt = new ol.format.GeoJSON();
var features_IRt = format_IRt.readFeatures(json_IRt, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IRt = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/IRt.png" /> <b>IR(t) </b>'
    });
var lyr_IRt = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_IRt, 
    style: style_IRt,
    permalink: "IRt",
    popuplayertitle: 'IR(t) ',
    creationdate: '2025-07-11 00:36:49',
    interactive: true,
    title: '<img src="styles/legend/IRt.png" /> IR(t) '
    });
var featureCounter_IRt = 1;
jsonSource_IRt.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_IRt++);
    feature.set("layerObject", lyr_IRt);
});        
jsonSource_IRt.addFeatures(features_IRt);

var format_PopulationDensityresidentsm2 = new ol.format.GeoJSON();
var features_PopulationDensityresidentsm2 = format_PopulationDensityresidentsm2.readFeatures(json_PopulationDensityresidentsm2, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulationDensityresidentsm2 = new ol.source.Vector({
    attributions: '<a class="legend"><b>Population Density (residents/m2)</b><br />\
        <img src="styles/legend/PopulationDensityresidentsm2_0.png" /> 0 - 0,01<br />\
        <img src="styles/legend/PopulationDensityresidentsm2_1.png" /> 0,01 - 0,02<br />\
        <img src="styles/legend/PopulationDensityresidentsm2_2.png" /> 0,02 - 0,03<br />\
        <img src="styles/legend/PopulationDensityresidentsm2_3.png" /> 0,03 - 0,04<br />\
        <img src="styles/legend/PopulationDensityresidentsm2_4.png" /> 0,04 - 0,05<br />\
        <img src="styles/legend/PopulationDensityresidentsm2_5.png" /> 0,05 - 0,06<br />\
        <img src="styles/legend/PopulationDensityresidentsm2_6.png" /> 0,06 - 0,07<br />\
        <img src="styles/legend/PopulationDensityresidentsm2_7.png" /> 0,07 - 0,0736<br /></a>'
        });
var lyr_PopulationDensityresidentsm2 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_PopulationDensityresidentsm2, 
    style: style_PopulationDensityresidentsm2,
    permalink: "PopulationDensityresidentsm2",
    popuplayertitle: 'Population Density (residents/m2)',
    creationdate: '2025-07-11 00:36:49',
    interactive: false,
    title: '<div id="layertitle">Population Density (residents/m2)<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/PopulationDensityresidentsm2_0.png" /> 0 - 0,01<br />\
        <img src="styles/legend/PopulationDensityresidentsm2_1.png" /> 0,01 - 0,02<br />\
        <img src="styles/legend/PopulationDensityresidentsm2_2.png" /> 0,02 - 0,03<br />\
        <img src="styles/legend/PopulationDensityresidentsm2_3.png" /> 0,03 - 0,04<br />\
        <img src="styles/legend/PopulationDensityresidentsm2_4.png" /> 0,04 - 0,05<br />\
        <img src="styles/legend/PopulationDensityresidentsm2_5.png" /> 0,05 - 0,06<br />\
        <img src="styles/legend/PopulationDensityresidentsm2_6.png" /> 0,06 - 0,07<br />\
        <img src="styles/legend/PopulationDensityresidentsm2_7.png" /> 0,07 - 0,0736<br /></a>'
        });
var featureCounter_PopulationDensityresidentsm2 = 1;
jsonSource_PopulationDensityresidentsm2.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_PopulationDensityresidentsm2++);
    feature.set("layerObject", lyr_PopulationDensityresidentsm2);
});        
jsonSource_PopulationDensityresidentsm2.addFeatures(features_PopulationDensityresidentsm2);

var format_ResidentswithOtherComorbidities = new ol.format.GeoJSON();
var features_ResidentswithOtherComorbidities = format_ResidentswithOtherComorbidities.readFeatures(json_ResidentswithOtherComorbidities, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidentswithOtherComorbidities = new ol.source.Vector({
    attributions: '<a class="legend"><b>Residents with Other Comorbidities (%)</b><br />\
        <img src="styles/legend/ResidentswithOtherComorbidities_0.png" /> 0 - 0,5<br />\
        <img src="styles/legend/ResidentswithOtherComorbidities_1.png" /> 0,5 - 1<br />\
        <img src="styles/legend/ResidentswithOtherComorbidities_2.png" /> 1 - 1,5<br />\
        <img src="styles/legend/ResidentswithOtherComorbidities_3.png" /> 1,5 - 2<br /></a>'
        });
var lyr_ResidentswithOtherComorbidities = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_ResidentswithOtherComorbidities, 
    style: style_ResidentswithOtherComorbidities,
    permalink: "ResidentswithOtherComorbidities",
    popuplayertitle: 'Residents with Other Comorbidities (%)',
    creationdate: '2025-07-11 00:36:49',
    interactive: false,
    title: '<div id="layertitle">Residents with Other Comorbidities (%)<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/ResidentswithOtherComorbidities_0.png" /> 0 - 0,5<br />\
        <img src="styles/legend/ResidentswithOtherComorbidities_1.png" /> 0,5 - 1<br />\
        <img src="styles/legend/ResidentswithOtherComorbidities_2.png" /> 1 - 1,5<br />\
        <img src="styles/legend/ResidentswithOtherComorbidities_3.png" /> 1,5 - 2<br /></a>'
        });
var featureCounter_ResidentswithOtherComorbidities = 1;
jsonSource_ResidentswithOtherComorbidities.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_ResidentswithOtherComorbidities++);
    feature.set("layerObject", lyr_ResidentswithOtherComorbidities);
});        
jsonSource_ResidentswithOtherComorbidities.addFeatures(features_ResidentswithOtherComorbidities);

var format_ResidentswithHypertension = new ol.format.GeoJSON();
var features_ResidentswithHypertension = format_ResidentswithHypertension.readFeatures(json_ResidentswithHypertension, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidentswithHypertension = new ol.source.Vector({
    attributions: '<a class="legend"><b>Residents with Hypertension (%)</b><br />\
        <img src="styles/legend/ResidentswithHypertension_0.png" /> 0 - 0,05<br />\
        <img src="styles/legend/ResidentswithHypertension_1.png" /> 0,05 - 0,1<br />\
        <img src="styles/legend/ResidentswithHypertension_2.png" /> 0,1 - 0,15<br />\
        <img src="styles/legend/ResidentswithHypertension_3.png" /> 0,15 - 0,167<br /></a>'
        });
var lyr_ResidentswithHypertension = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_ResidentswithHypertension, 
    style: style_ResidentswithHypertension,
    permalink: "ResidentswithHypertension",
    popuplayertitle: 'Residents with Hypertension (%)',
    creationdate: '2025-07-11 00:36:49',
    interactive: false,
    title: '<div id="layertitle">Residents with Hypertension (%)<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/ResidentswithHypertension_0.png" /> 0 - 0,05<br />\
        <img src="styles/legend/ResidentswithHypertension_1.png" /> 0,05 - 0,1<br />\
        <img src="styles/legend/ResidentswithHypertension_2.png" /> 0,1 - 0,15<br />\
        <img src="styles/legend/ResidentswithHypertension_3.png" /> 0,15 - 0,167<br /></a>'
        });
var featureCounter_ResidentswithHypertension = 1;
jsonSource_ResidentswithHypertension.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_ResidentswithHypertension++);
    feature.set("layerObject", lyr_ResidentswithHypertension);
});        
jsonSource_ResidentswithHypertension.addFeatures(features_ResidentswithHypertension);

var format_ResidentswithDiabetes = new ol.format.GeoJSON();
var features_ResidentswithDiabetes = format_ResidentswithDiabetes.readFeatures(json_ResidentswithDiabetes, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidentswithDiabetes = new ol.source.Vector({
    attributions: '<a class="legend"><b>Residents with Diabetes (%)</b><br />\
        <img src="styles/legend/ResidentswithDiabetes_0.png" /> 0 - 0,2<br />\
        <img src="styles/legend/ResidentswithDiabetes_1.png" /> 0,2 - 0,4<br />\
        <img src="styles/legend/ResidentswithDiabetes_2.png" /> 0,4 - 0,6<br />\
        <img src="styles/legend/ResidentswithDiabetes_3.png" /> 0,6 - 0,8<br />\
        <img src="styles/legend/ResidentswithDiabetes_4.png" /> 0,8 - 1<br /></a>'
        });
var lyr_ResidentswithDiabetes = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_ResidentswithDiabetes, 
    style: style_ResidentswithDiabetes,
    permalink: "ResidentswithDiabetes",
    popuplayertitle: 'Residents with Diabetes (%)',
    creationdate: '2025-07-11 00:36:49',
    interactive: false,
    title: '<div id="layertitle">Residents with Diabetes (%)<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/ResidentswithDiabetes_0.png" /> 0 - 0,2<br />\
        <img src="styles/legend/ResidentswithDiabetes_1.png" /> 0,2 - 0,4<br />\
        <img src="styles/legend/ResidentswithDiabetes_2.png" /> 0,4 - 0,6<br />\
        <img src="styles/legend/ResidentswithDiabetes_3.png" /> 0,6 - 0,8<br />\
        <img src="styles/legend/ResidentswithDiabetes_4.png" /> 0,8 - 1<br /></a>'
        });
var featureCounter_ResidentswithDiabetes = 1;
jsonSource_ResidentswithDiabetes.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_ResidentswithDiabetes++);
    feature.set("layerObject", lyr_ResidentswithDiabetes);
});        
jsonSource_ResidentswithDiabetes.addFeatures(features_ResidentswithDiabetes);

var format_Familieswith3components = new ol.format.GeoJSON();
var features_Familieswith3components = format_Familieswith3components.readFeatures(json_Familieswith3components, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Familieswith3components = new ol.source.Vector({
    attributions: '<a class="legend"><b>Families with 3+ components (%)</b><br />\
        <img src="styles/legend/Familieswith3components_0.png" /> 0 - 0,1<br />\
        <img src="styles/legend/Familieswith3components_1.png" /> 0,1 - 0,2<br />\
        <img src="styles/legend/Familieswith3components_2.png" /> 0,2 - 0,3<br />\
        <img src="styles/legend/Familieswith3components_3.png" /> 0,3 - 0,4<br />\
        <img src="styles/legend/Familieswith3components_4.png" /> 0,4 - 0,5<br />\
        <img src="styles/legend/Familieswith3components_5.png" /> 0,5 - 0,6<br />\
        <img src="styles/legend/Familieswith3components_6.png" /> 0,6 - 0,7<br />\
        <img src="styles/legend/Familieswith3components_7.png" /> 0,7 - 0,8<br />\
        <img src="styles/legend/Familieswith3components_8.png" /> 0,8 - 0,9<br />\
        <img src="styles/legend/Familieswith3components_9.png" /> 0,9 - 1<br /></a>'
        });
var lyr_Familieswith3components = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Familieswith3components, 
    style: style_Familieswith3components,
    permalink: "Familieswith3components",
    popuplayertitle: 'Families with 3+ components (%)',
    creationdate: '2025-07-11 00:36:49',
    interactive: false,
    title: '<div id="layertitle">Families with 3+ components (%)<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/Familieswith3components_0.png" /> 0 - 0,1<br />\
        <img src="styles/legend/Familieswith3components_1.png" /> 0,1 - 0,2<br />\
        <img src="styles/legend/Familieswith3components_2.png" /> 0,2 - 0,3<br />\
        <img src="styles/legend/Familieswith3components_3.png" /> 0,3 - 0,4<br />\
        <img src="styles/legend/Familieswith3components_4.png" /> 0,4 - 0,5<br />\
        <img src="styles/legend/Familieswith3components_5.png" /> 0,5 - 0,6<br />\
        <img src="styles/legend/Familieswith3components_6.png" /> 0,6 - 0,7<br />\
        <img src="styles/legend/Familieswith3components_7.png" /> 0,7 - 0,8<br />\
        <img src="styles/legend/Familieswith3components_8.png" /> 0,8 - 0,9<br />\
        <img src="styles/legend/Familieswith3components_9.png" /> 0,9 - 1<br /></a>'
        });
var featureCounter_Familieswith3components = 1;
jsonSource_Familieswith3components.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Familieswith3components++);
    feature.set("layerObject", lyr_Familieswith3components);
});        
jsonSource_Familieswith3components.addFeatures(features_Familieswith3components);

var format_Familieswith2components = new ol.format.GeoJSON();
var features_Familieswith2components = format_Familieswith2components.readFeatures(json_Familieswith2components, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Familieswith2components = new ol.source.Vector({
    attributions: '<a class="legend"><b>Families with 2 components (%)</b><br />\
        <img src="styles/legend/Familieswith2components_0.png" /> 0 - 0,1<br />\
        <img src="styles/legend/Familieswith2components_1.png" /> 0,1 - 0,2<br />\
        <img src="styles/legend/Familieswith2components_2.png" /> 0,2 - 0,3<br />\
        <img src="styles/legend/Familieswith2components_3.png" /> 0,3 - 0,4<br />\
        <img src="styles/legend/Familieswith2components_4.png" /> 0,4 - 0,5<br />\
        <img src="styles/legend/Familieswith2components_5.png" /> 0,5 - 0,6<br />\
        <img src="styles/legend/Familieswith2components_6.png" /> 0,6 - 0,7<br />\
        <img src="styles/legend/Familieswith2components_7.png" /> 0,7 - 0,8<br />\
        <img src="styles/legend/Familieswith2components_8.png" /> 0,8 - 0,9<br />\
        <img src="styles/legend/Familieswith2components_9.png" /> 0,9 - 1<br /></a>'
        });
var lyr_Familieswith2components = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Familieswith2components, 
    style: style_Familieswith2components,
    permalink: "Familieswith2components",
    popuplayertitle: 'Families with 2 components (%)',
    creationdate: '2025-07-11 00:36:49',
    interactive: false,
    title: '<div id="layertitle">Families with 2 components (%)<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/Familieswith2components_0.png" /> 0 - 0,1<br />\
        <img src="styles/legend/Familieswith2components_1.png" /> 0,1 - 0,2<br />\
        <img src="styles/legend/Familieswith2components_2.png" /> 0,2 - 0,3<br />\
        <img src="styles/legend/Familieswith2components_3.png" /> 0,3 - 0,4<br />\
        <img src="styles/legend/Familieswith2components_4.png" /> 0,4 - 0,5<br />\
        <img src="styles/legend/Familieswith2components_5.png" /> 0,5 - 0,6<br />\
        <img src="styles/legend/Familieswith2components_6.png" /> 0,6 - 0,7<br />\
        <img src="styles/legend/Familieswith2components_7.png" /> 0,7 - 0,8<br />\
        <img src="styles/legend/Familieswith2components_8.png" /> 0,8 - 0,9<br />\
        <img src="styles/legend/Familieswith2components_9.png" /> 0,9 - 1<br /></a>'
        });
var featureCounter_Familieswith2components = 1;
jsonSource_Familieswith2components.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Familieswith2components++);
    feature.set("layerObject", lyr_Familieswith2components);
});        
jsonSource_Familieswith2components.addFeatures(features_Familieswith2components);

var format_Population65 = new ol.format.GeoJSON();
var features_Population65 = format_Population65.readFeatures(json_Population65, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Population65 = new ol.source.Vector({
    attributions: '<a class="legend"><b>Population 65+ (%)</b><br />\
        <img src="styles/legend/Population65_0.png" /> 0 - 0,1<br />\
        <img src="styles/legend/Population65_1.png" /> 0,1 - 0,2<br />\
        <img src="styles/legend/Population65_2.png" /> 0,2 - 0,3<br />\
        <img src="styles/legend/Population65_3.png" /> 0,3 - 0,4<br />\
        <img src="styles/legend/Population65_4.png" /> 0,4 - 0,5<br />\
        <img src="styles/legend/Population65_5.png" /> 0,5 - 0,6<br />\
        <img src="styles/legend/Population65_6.png" /> 0,6 - 0,7<br />\
        <img src="styles/legend/Population65_7.png" /> 0,7 - 0,8<br />\
        <img src="styles/legend/Population65_8.png" /> 0,8 - 0,9<br />\
        <img src="styles/legend/Population65_9.png" /> 0,9 - 1<br /></a>'
        });
var lyr_Population65 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Population65, 
    style: style_Population65,
    permalink: "Population65",
    popuplayertitle: 'Population 65+ (%)',
    creationdate: '2025-07-11 00:36:49',
    interactive: false,
    title: '<div id="layertitle">Population 65+ (%)<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/Population65_0.png" /> 0 - 0,1<br />\
        <img src="styles/legend/Population65_1.png" /> 0,1 - 0,2<br />\
        <img src="styles/legend/Population65_2.png" /> 0,2 - 0,3<br />\
        <img src="styles/legend/Population65_3.png" /> 0,3 - 0,4<br />\
        <img src="styles/legend/Population65_4.png" /> 0,4 - 0,5<br />\
        <img src="styles/legend/Population65_5.png" /> 0,5 - 0,6<br />\
        <img src="styles/legend/Population65_6.png" /> 0,6 - 0,7<br />\
        <img src="styles/legend/Population65_7.png" /> 0,7 - 0,8<br />\
        <img src="styles/legend/Population65_8.png" /> 0,8 - 0,9<br />\
        <img src="styles/legend/Population65_9.png" /> 0,9 - 1<br /></a>'
        });
var featureCounter_Population65 = 1;
jsonSource_Population65.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Population65++);
    feature.set("layerObject", lyr_Population65);
});        
jsonSource_Population65.addFeatures(features_Population65);

var format_Population2064 = new ol.format.GeoJSON();
var features_Population2064 = format_Population2064.readFeatures(json_Population2064, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Population2064 = new ol.source.Vector({
    attributions: '<a class="legend"><b>Population 20-64 (%)</b><br />\
        <img src="styles/legend/Population2064_0.png" /> 0 - 0,1<br />\
        <img src="styles/legend/Population2064_1.png" /> 0,1 - 0,2<br />\
        <img src="styles/legend/Population2064_2.png" /> 0,2 - 0,3<br />\
        <img src="styles/legend/Population2064_3.png" /> 0,3 - 0,4<br />\
        <img src="styles/legend/Population2064_4.png" /> 0,4 - 0,5<br />\
        <img src="styles/legend/Population2064_5.png" /> 0,5 - 0,6<br />\
        <img src="styles/legend/Population2064_6.png" /> 0,6 - 0,7<br />\
        <img src="styles/legend/Population2064_7.png" /> 0,7 - 0,8<br />\
        <img src="styles/legend/Population2064_8.png" /> 0,8 - 0,9<br />\
        <img src="styles/legend/Population2064_9.png" /> 0,9 - 1<br /></a>'
        });
var lyr_Population2064 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Population2064, 
    style: style_Population2064,
    permalink: "Population2064",
    popuplayertitle: 'Population 20-64 (%)',
    creationdate: '2025-07-11 00:36:49',
    interactive: false,
    title: '<div id="layertitle">Population 20-64 (%)<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/Population2064_0.png" /> 0 - 0,1<br />\
        <img src="styles/legend/Population2064_1.png" /> 0,1 - 0,2<br />\
        <img src="styles/legend/Population2064_2.png" /> 0,2 - 0,3<br />\
        <img src="styles/legend/Population2064_3.png" /> 0,3 - 0,4<br />\
        <img src="styles/legend/Population2064_4.png" /> 0,4 - 0,5<br />\
        <img src="styles/legend/Population2064_5.png" /> 0,5 - 0,6<br />\
        <img src="styles/legend/Population2064_6.png" /> 0,6 - 0,7<br />\
        <img src="styles/legend/Population2064_7.png" /> 0,7 - 0,8<br />\
        <img src="styles/legend/Population2064_8.png" /> 0,8 - 0,9<br />\
        <img src="styles/legend/Population2064_9.png" /> 0,9 - 1<br /></a>'
        });
var featureCounter_Population2064 = 1;
jsonSource_Population2064.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Population2064++);
    feature.set("layerObject", lyr_Population2064);
});        
jsonSource_Population2064.addFeatures(features_Population2064);

var format_MalePopulation = new ol.format.GeoJSON();
var features_MalePopulation = format_MalePopulation.readFeatures(json_MalePopulation, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MalePopulation = new ol.source.Vector({
    attributions: '<a class="legend"><b>Male Population (%)</b><br />\
        <img src="styles/legend/MalePopulation_0.png" /> 0 - 0,1<br />\
        <img src="styles/legend/MalePopulation_1.png" /> 0,1 - 0,2<br />\
        <img src="styles/legend/MalePopulation_2.png" /> 0,2 - 0,3<br />\
        <img src="styles/legend/MalePopulation_3.png" /> 0,3 - 0,4<br />\
        <img src="styles/legend/MalePopulation_4.png" /> 0,4 - 0,5<br />\
        <img src="styles/legend/MalePopulation_5.png" /> 0,5 - 0,6<br />\
        <img src="styles/legend/MalePopulation_6.png" /> 0,6 - 0,7<br />\
        <img src="styles/legend/MalePopulation_7.png" /> 0,7 - 0,8<br />\
        <img src="styles/legend/MalePopulation_8.png" /> 0,8 - 0,9<br />\
        <img src="styles/legend/MalePopulation_9.png" /> 0,9 - 1<br /></a>'
        });
var lyr_MalePopulation = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_MalePopulation, 
    style: style_MalePopulation,
    permalink: "MalePopulation",
    popuplayertitle: 'Male Population (%)',
    creationdate: '2025-07-11 00:36:49',
    interactive: false,
    title: '<div id="layertitle">Male Population (%)<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/MalePopulation_0.png" /> 0 - 0,1<br />\
        <img src="styles/legend/MalePopulation_1.png" /> 0,1 - 0,2<br />\
        <img src="styles/legend/MalePopulation_2.png" /> 0,2 - 0,3<br />\
        <img src="styles/legend/MalePopulation_3.png" /> 0,3 - 0,4<br />\
        <img src="styles/legend/MalePopulation_4.png" /> 0,4 - 0,5<br />\
        <img src="styles/legend/MalePopulation_5.png" /> 0,5 - 0,6<br />\
        <img src="styles/legend/MalePopulation_6.png" /> 0,6 - 0,7<br />\
        <img src="styles/legend/MalePopulation_7.png" /> 0,7 - 0,8<br />\
        <img src="styles/legend/MalePopulation_8.png" /> 0,8 - 0,9<br />\
        <img src="styles/legend/MalePopulation_9.png" /> 0,9 - 1<br /></a>'
        });
var featureCounter_MalePopulation = 1;
jsonSource_MalePopulation.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_MalePopulation++);
    feature.set("layerObject", lyr_MalePopulation);
});        
jsonSource_MalePopulation.addFeatures(features_MalePopulation);

var format_DomiciledPopulation = new ol.format.GeoJSON();
var features_DomiciledPopulation = format_DomiciledPopulation.readFeatures(json_DomiciledPopulation, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DomiciledPopulation = new ol.source.Vector({
    attributions: '<a class="legend"><b>Domiciled Population</b><br />\
        <img src="styles/legend/DomiciledPopulation_0.png" /> 1 - 20<br />\
        <img src="styles/legend/DomiciledPopulation_1.png" /> 20 - 50<br />\
        <img src="styles/legend/DomiciledPopulation_2.png" /> 51 - 100<br />\
        <img src="styles/legend/DomiciledPopulation_3.png" /> 100 - 150<br />\
        <img src="styles/legend/DomiciledPopulation_4.png" /> 150 - 200<br />\
        <img src="styles/legend/DomiciledPopulation_5.png" /> 200 - 400<br />\
        <img src="styles/legend/DomiciledPopulation_6.png" /> 400 - 700<br />\
        <img src="styles/legend/DomiciledPopulation_7.png" /> 700 - 1000<br />\
        <img src="styles/legend/DomiciledPopulation_8.png" /> 1000 - 13343<br /></a>'
        });
var lyr_DomiciledPopulation = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_DomiciledPopulation, 
    style: style_DomiciledPopulation,
    permalink: "DomiciledPopulation",
    popuplayertitle: 'Domiciled Population',
    creationdate: '2025-07-11 00:36:49',
    interactive: false,
    title: '<div id="layertitle">Domiciled Population<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/DomiciledPopulation_0.png" /> 1 - 20<br />\
        <img src="styles/legend/DomiciledPopulation_1.png" /> 20 - 50<br />\
        <img src="styles/legend/DomiciledPopulation_2.png" /> 51 - 100<br />\
        <img src="styles/legend/DomiciledPopulation_3.png" /> 100 - 150<br />\
        <img src="styles/legend/DomiciledPopulation_4.png" /> 150 - 200<br />\
        <img src="styles/legend/DomiciledPopulation_5.png" /> 200 - 400<br />\
        <img src="styles/legend/DomiciledPopulation_6.png" /> 400 - 700<br />\
        <img src="styles/legend/DomiciledPopulation_7.png" /> 700 - 1000<br />\
        <img src="styles/legend/DomiciledPopulation_8.png" /> 1000 - 13343<br /></a>'
        });
var featureCounter_DomiciledPopulation = 1;
jsonSource_DomiciledPopulation.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_DomiciledPopulation++);
    feature.set("layerObject", lyr_DomiciledPopulation);
});        
jsonSource_DomiciledPopulation.addFeatures(features_DomiciledPopulation);

var format_ObservedIR = new ol.format.GeoJSON();
var features_ObservedIR = format_ObservedIR.readFeatures(json_ObservedIR, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObservedIR = new ol.source.Vector({
    attributions: '<a class="legend"><b>Observed IR</b><br />\
        <img src="styles/legend/ObservedIR_0.png" /> 0 - 0,2<br />\
        <img src="styles/legend/ObservedIR_1.png" /> 0,2 - 0,28<br />\
        <img src="styles/legend/ObservedIR_2.png" /> 0,28 - 0,32<br />\
        <img src="styles/legend/ObservedIR_3.png" /> 0,32 - 0,35<br />\
        <img src="styles/legend/ObservedIR_4.png" /> 0,35 - 0,37<br />\
        <img src="styles/legend/ObservedIR_5.png" /> 0,37 - 0,41<br />\
        <img src="styles/legend/ObservedIR_6.png" /> 0,41 - 0,48<br />\
        <img src="styles/legend/ObservedIR_7.png" /> 0,48 - 8,95<br /></a>'
        });
var lyr_ObservedIR = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_ObservedIR, 
    style: style_ObservedIR,
    permalink: "ObservedIR",
    popuplayertitle: 'Observed IR',
    creationdate: '2025-07-11 00:36:49',
    interactive: false,
    title: '<div id="layertitle">Observed IR<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/ObservedIR_0.png" /> 0 - 0,2<br />\
        <img src="styles/legend/ObservedIR_1.png" /> 0,2 - 0,28<br />\
        <img src="styles/legend/ObservedIR_2.png" /> 0,28 - 0,32<br />\
        <img src="styles/legend/ObservedIR_3.png" /> 0,32 - 0,35<br />\
        <img src="styles/legend/ObservedIR_4.png" /> 0,35 - 0,37<br />\
        <img src="styles/legend/ObservedIR_5.png" /> 0,37 - 0,41<br />\
        <img src="styles/legend/ObservedIR_6.png" /> 0,41 - 0,48<br />\
        <img src="styles/legend/ObservedIR_7.png" /> 0,48 - 8,95<br /></a>'
        });
var featureCounter_ObservedIR = 1;
jsonSource_ObservedIR.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_ObservedIR++);
    feature.set("layerObject", lyr_ObservedIR);
});        
jsonSource_ObservedIR.addFeatures(features_ObservedIR);

var format_Municipalities = new ol.format.GeoJSON();
var features_Municipalities = format_Municipalities.readFeatures(json_Municipalities, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipalities = new ol.source.Vector({
    attributions: '<a class="legend"><b>Municipalities</b><br />\
        <img src="styles/legend/Municipalities_0.png" /> BOLOGNA<br />\
        <img src="styles/legend/Municipalities_1.png" /> CASALECCHIO DI RENO<br />\
        <img src="styles/legend/Municipalities_2.png" /> CASTEL MAGGIORE<br />\
        <img src="styles/legend/Municipalities_3.png" /> CASTENASO<br />\
        <img src="styles/legend/Municipalities_4.png" /> GRANAROLO DELL`EMILIA<br />\
        <img src="styles/legend/Municipalities_5.png" /> MONTE SAN PIETRO<br />\
        <img src="styles/legend/Municipalities_6.png" /> PIANORO<br />\
        <img src="styles/legend/Municipalities_7.png" /> SAN LAZZARO DI SAVENA<br />\
        <img src="styles/legend/Municipalities_8.png" /> SASSO MARCONI<br />\
        <img src="styles/legend/Municipalities_9.png" /> ZOLA PREDOSA<br />\
        <img src="styles/legend/Municipalities_10.png" /> <br /></a>'
        });
var lyr_Municipalities = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Municipalities, 
    style: style_Municipalities,
    permalink: "Municipalities",
    popuplayertitle: 'Municipalities',
    creationdate: '2025-07-11 00:36:49',
    interactive: false,
    title: '<div id="layertitle">Municipalities<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/Municipalities_0.png" /> BOLOGNA<br />\
        <img src="styles/legend/Municipalities_1.png" /> CASALECCHIO DI RENO<br />\
        <img src="styles/legend/Municipalities_2.png" /> CASTEL MAGGIORE<br />\
        <img src="styles/legend/Municipalities_3.png" /> CASTENASO<br />\
        <img src="styles/legend/Municipalities_4.png" /> GRANAROLO DELL`EMILIA<br />\
        <img src="styles/legend/Municipalities_5.png" /> MONTE SAN PIETRO<br />\
        <img src="styles/legend/Municipalities_6.png" /> PIANORO<br />\
        <img src="styles/legend/Municipalities_7.png" /> SAN LAZZARO DI SAVENA<br />\
        <img src="styles/legend/Municipalities_8.png" /> SASSO MARCONI<br />\
        <img src="styles/legend/Municipalities_9.png" /> ZOLA PREDOSA<br />\
        <img src="styles/legend/Municipalities_10.png" /> <br /></a>'
        });
var featureCounter_Municipalities = 1;
jsonSource_Municipalities.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Municipalities++);
    feature.set("layerObject", lyr_Municipalities);
});        
jsonSource_Municipalities.addFeatures(features_Municipalities);

var format_AggregatedAreas = new ol.format.GeoJSON();
var features_AggregatedAreas = format_AggregatedAreas.readFeatures(json_AggregatedAreas, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AggregatedAreas = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/AggregatedAreas.png" /> <b>Aggregated Areas</b>'
    });
var lyr_AggregatedAreas = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_AggregatedAreas, 
    style: style_AggregatedAreas,
    permalink: "AggregatedAreas",
    popuplayertitle: 'Aggregated Areas',
    creationdate: '2025-07-11 00:36:49',
    interactive: true,
    title: '<img src="styles/legend/AggregatedAreas.png" /> Aggregated Areas'
    });
var featureCounter_AggregatedAreas = 1;
jsonSource_AggregatedAreas.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_AggregatedAreas++);
    feature.set("layerObject", lyr_AggregatedAreas);
});        
jsonSource_AggregatedAreas.addFeatures(features_AggregatedAreas);

var format_SmallAreas = new ol.format.GeoJSON();
var features_SmallAreas = format_SmallAreas.readFeatures(json_SmallAreas, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmallAreas = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/SmallAreas.png" /> <b>Small Areas</b>'
    });
var lyr_SmallAreas = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SmallAreas, 
    style: style_SmallAreas,
    permalink: "SmallAreas",
    popuplayertitle: 'Small Areas',
    creationdate: '2025-07-11 00:36:49',
    interactive: true,
    title: '<img src="styles/legend/SmallAreas.png" /> Small Areas'
    });
var featureCounter_SmallAreas = 1;
jsonSource_SmallAreas.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_SmallAreas++);
    feature.set("layerObject", lyr_SmallAreas);
});        
jsonSource_SmallAreas.addFeatures(features_SmallAreas);

var lyr_LandUse2023 = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/LandUse2023.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1235262.205802, 5519976.745626, 1276475.747650, 5558681.708518],
    attributions: '<a class="legend"><b>Land Use 2023</b><br />\
        <img src="styles/legend/LandUse2023_0.png" /> Residential Areas<br /></a>'
        }),
    opacity: 1,
    permalink: "LandUse2023",
    
     
    title: '<div id="layertitle">Land Use 2023<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/LandUse2023_0.png" /> Residential Areas<br /></a>'
        });
    
var format_SewerNetwork = new ol.format.GeoJSON();
var features_SewerNetwork = format_SewerNetwork.readFeatures(json_SewerNetwork, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SewerNetwork = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/SewerNetwork.png" /> <b>Sewer Network</b>'
    });
var lyr_SewerNetwork = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SewerNetwork, 
    style: style_SewerNetwork,
    permalink: "SewerNetwork",
    popuplayertitle: 'Sewer Network',
    creationdate: '2025-07-11 00:36:49',
    interactive: false,
    title: '<img src="styles/legend/SewerNetwork.png" /> Sewer Network'
    });
var featureCounter_SewerNetwork = 1;
jsonSource_SewerNetwork.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_SewerNetwork++);
    feature.set("layerObject", lyr_SewerNetwork);
});        
jsonSource_SewerNetwork.addFeatures(features_SewerNetwork);

var format_WastewaterTreatmentPlant = new ol.format.GeoJSON();
var features_WastewaterTreatmentPlant = format_WastewaterTreatmentPlant.readFeatures(json_WastewaterTreatmentPlant, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WastewaterTreatmentPlant = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/WastewaterTreatmentPlant.png" /> <b>Wastewater Treatment Plant</b>'
    });
var lyr_WastewaterTreatmentPlant = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_WastewaterTreatmentPlant, 
    style: style_WastewaterTreatmentPlant,
    permalink: "WastewaterTreatmentPlant",
    popuplayertitle: 'Wastewater Treatment Plant',
    creationdate: '2025-07-11 00:36:49',
    interactive: false,
    title: '<img src="styles/legend/WastewaterTreatmentPlant.png" /> Wastewater Treatment Plant'
    });
var featureCounter_WastewaterTreatmentPlant = 1;
jsonSource_WastewaterTreatmentPlant.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_WastewaterTreatmentPlant++);
    feature.set("layerObject", lyr_WastewaterTreatmentPlant);
});        
jsonSource_WastewaterTreatmentPlant.addFeatures(features_WastewaterTreatmentPlant);

var format_GeometricCentroids = new ol.format.GeoJSON();
var features_GeometricCentroids = format_GeometricCentroids.readFeatures(json_GeometricCentroids, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeometricCentroids = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/GeometricCentroids.png" /> <b>Geometric Centroids</b>'
    });
var lyr_GeometricCentroids = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_GeometricCentroids, 
    style: style_GeometricCentroids,
    permalink: "GeometricCentroids",
    popuplayertitle: 'Geometric Centroids',
    creationdate: '2025-07-11 00:36:49',
    interactive: false,
    title: '<img src="styles/legend/GeometricCentroids.png" /> Geometric Centroids'
    });
var featureCounter_GeometricCentroids = 1;
jsonSource_GeometricCentroids.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_GeometricCentroids++);
    feature.set("layerObject", lyr_GeometricCentroids);
});        
jsonSource_GeometricCentroids.addFeatures(features_GeometricCentroids);

var format_LandusebasedCentroids = new ol.format.GeoJSON();
var features_LandusebasedCentroids = format_LandusebasedCentroids.readFeatures(json_LandusebasedCentroids, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandusebasedCentroids = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/LandusebasedCentroids.png" /> <b>Land-use-based Centroids</b>'
    });
var lyr_LandusebasedCentroids = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_LandusebasedCentroids, 
    style: style_LandusebasedCentroids,
    permalink: "LandusebasedCentroids",
    popuplayertitle: 'Land-use-based Centroids',
    creationdate: '2025-07-11 00:36:49',
    interactive: false,
    title: '<img src="styles/legend/LandusebasedCentroids.png" /> Land-use-based Centroids'
    });
var featureCounter_LandusebasedCentroids = 1;
jsonSource_LandusebasedCentroids.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_LandusebasedCentroids++);
    feature.set("layerObject", lyr_LandusebasedCentroids);
});        
jsonSource_LandusebasedCentroids.addFeatures(features_LandusebasedCentroids);

var group_Centroids = new ol.layer.Group({
                                layers: [lyr_GeometricCentroids,lyr_LandusebasedCentroids,],
                                openInLayerSwitcher: true,
                                title: 'Centroids'});
var group_StudyArea = new ol.layer.Group({
                                layers: [lyr_Municipalities,lyr_AggregatedAreas,lyr_SmallAreas,lyr_LandUse2023,lyr_SewerNetwork,lyr_WastewaterTreatmentPlant,],
                                openInLayerSwitcher: true,
                                title: 'Study Area'});
var group_Data = new ol.layer.Group({
                                layers: [lyr_PopulationDensityresidentsm2,lyr_ResidentswithOtherComorbidities,lyr_ResidentswithHypertension,lyr_ResidentswithDiabetes,lyr_Familieswith3components,lyr_Familieswith2components,lyr_Population65,lyr_Population2064,lyr_MalePopulation,lyr_DomiciledPopulation,lyr_ObservedIR,],
                                openInLayerSwitcher: true,
                                title: 'Data'});
var group_Results = new ol.layer.Group({
                                layers: [lyr_RiskCoefficientsWi,lyr_PosteriorMeanPrecisionParameter,lyr_IRt,],
                                openInLayerSwitcher: true,
                                title: 'Results'});

lyr_OSMStandard.setVisible(true);lyr_RiskCoefficientsWi.setVisible(false);lyr_PosteriorMeanPrecisionParameter.setVisible(false);lyr_IRt.setVisible(false);lyr_PopulationDensityresidentsm2.setVisible(false);lyr_ResidentswithOtherComorbidities.setVisible(false);lyr_ResidentswithHypertension.setVisible(false);lyr_ResidentswithDiabetes.setVisible(false);lyr_Familieswith3components.setVisible(false);lyr_Familieswith2components.setVisible(false);lyr_Population65.setVisible(false);lyr_Population2064.setVisible(false);lyr_MalePopulation.setVisible(false);lyr_DomiciledPopulation.setVisible(false);lyr_ObservedIR.setVisible(false);lyr_Municipalities.setVisible(false);lyr_AggregatedAreas.setVisible(false);lyr_SmallAreas.setVisible(true);lyr_LandUse2023.setVisible(false);lyr_SewerNetwork.setVisible(true);lyr_WastewaterTreatmentPlant.setVisible(true);lyr_GeometricCentroids.setVisible(false);lyr_LandusebasedCentroids.setVisible(false);
var layersList = [lyr_OSMStandard,group_Results,group_Data,group_StudyArea,group_Centroids];
lyr_RiskCoefficientsWi.set('fieldAliases', {'fid': 'fid', 'nome_area': 'nome_area', 'codice_area': 'codice_area', 'area': 'area', 'COMUNE': 'COMUNE', 'CODCOM': 'CODCOM', 'PROCOM': 'PROCOM', 'Pop': 'Pop', 'grouped_area': 'grouped_area', 'PopDom': 'PopDom', 'P_Tot': 'P_Tot', 'P_0_19': 'P_0_19', 'P_20_64': 'P_20_64', 'P_65oltre': 'P_65oltre', 'P_Femmine': 'P_Femmine', 'P_Maschi': 'P_Maschi', 'Fam_1': 'Fam_1', 'Fam_2': 'Fam_2', 'Fam_3oltre': 'Fam_3oltre', 'Fam_numero': 'Fam_numero', 'Diabete': 'Diabete', 'Ipertensione': 'Ipertensione', 'Altre_comorbidità': 'Altre_comorbidità', 'Casi_COVID': 'Casi_COVID', 'Casi_COVID_wave1': 'Casi_COVID_wave1', 'Casi_COVID_wave2': 'Casi_COVID_wave2', 'Casi_COVID_wave3': 'Casi_COVID_wave3', 'Casi_COVID_no_wave': 'Casi_COVID_no_wave', 'cases_more_people': 'cases_more_people', 'prop_0_19': 'prop_0_19', 'prop_20_64': 'prop_20_64', 'prop_65oltre': 'prop_65oltre', 'prop_Femmine': 'prop_Femmine', 'prop_Maschi': 'prop_Maschi', 'prop_Fam1': 'prop_Fam1', 'prop_Fam2': 'prop_Fam2', 'prop_Fam3oltre': 'prop_Fam3oltre', 'prop_Diabete': 'prop_Diabete', 'prop_Ipertensione': 'prop_Ipertensione', 'prop_Altre_Comorbidità': 'prop_Altre_Comorbidità', 'prop_Comorbidità': 'prop_Comorbidità', 'id.area': 'id.area', 'total_casi': 'total_casi', 'IR_obs': 'IR_obs', 'pop_density': 'pop_density', 'Wi_values_webapp_Wi_median': 'Wi_values_webapp_Wi_median', 'Wi_values_webapp_Wi': 'Wi_values_webapp_Wi', });
lyr_PosteriorMeanPrecisionParameter.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ISTAT': 'ISTAT', 'NOME_C': 'NOME_C', 'Shape_Area': 'Shape_Area', 'Tau': 'Tau', });
lyr_IRt.set('fieldAliases', {'fid': 'fid', 'nome_area': 'Small Area', 'codice_area': 'codice_area', 'area': 'area', 'COMUNE': 'COMUNE', 'CODCOM': 'CODCOM', 'PROCOM': 'PROCOM', 'Pop': 'Pop', 'grouped_area': 'grouped_area', 'paths_plots_plots': 'COVID-19 Cases', });
lyr_PopulationDensityresidentsm2.set('fieldAliases', {'fid': 'fid', 'nome_area': 'nome_area', 'codice_area': 'codice_area', 'area': 'area', 'COMUNE': 'COMUNE', 'CODCOM': 'CODCOM', 'PROCOM': 'PROCOM', 'Pop': 'Pop', 'grouped_area': 'grouped_area', 'PopDom': 'PopDom', 'P_Tot': 'P_Tot', 'P_0_19': 'P_0_19', 'P_20_64': 'P_20_64', 'P_65oltre': 'P_65oltre', 'P_Femmine': 'P_Femmine', 'P_Maschi': 'P_Maschi', 'Fam_1': 'Fam_1', 'Fam_2': 'Fam_2', 'Fam_3oltre': 'Fam_3oltre', 'Fam_numero': 'Fam_numero', 'Diabete': 'Diabete', 'Ipertensione': 'Ipertensione', 'Altre_comorbidità': 'Altre_comorbidità', 'Casi_COVID': 'Casi_COVID', 'Casi_COVID_wave1': 'Casi_COVID_wave1', 'Casi_COVID_wave2': 'Casi_COVID_wave2', 'Casi_COVID_wave3': 'Casi_COVID_wave3', 'Casi_COVID_no_wave': 'Casi_COVID_no_wave', 'cases_more_people': 'cases_more_people', 'prop_0_19': 'prop_0_19', 'prop_20_64': 'prop_20_64', 'prop_65oltre': 'prop_65oltre', 'prop_Femmine': 'prop_Femmine', 'prop_Maschi': 'prop_Maschi', 'prop_Fam1': 'prop_Fam1', 'prop_Fam2': 'prop_Fam2', 'prop_Fam3oltre': 'prop_Fam3oltre', 'prop_Diabete': 'prop_Diabete', 'prop_Ipertensione': 'prop_Ipertensione', 'prop_Altre_Comorbidità': 'prop_Altre_Comorbidità', 'prop_Comorbidità': 'prop_Comorbidità', 'id.area': 'id.area', 'total_casi': 'total_casi', 'IR_obs': 'IR_obs', 'pop_density': 'pop_density', });
lyr_ResidentswithOtherComorbidities.set('fieldAliases', {'fid': 'fid', 'nome_area': 'nome_area', 'codice_area': 'codice_area', 'area': 'area', 'COMUNE': 'COMUNE', 'CODCOM': 'CODCOM', 'PROCOM': 'PROCOM', 'Pop': 'Pop', 'grouped_area': 'grouped_area', 'PopDom': 'PopDom', 'P_Tot': 'P_Tot', 'P_0_19': 'P_0_19', 'P_20_64': 'P_20_64', 'P_65oltre': 'P_65oltre', 'P_Femmine': 'P_Femmine', 'P_Maschi': 'P_Maschi', 'Fam_1': 'Fam_1', 'Fam_2': 'Fam_2', 'Fam_3oltre': 'Fam_3oltre', 'Fam_numero': 'Fam_numero', 'Diabete': 'Diabete', 'Ipertensione': 'Ipertensione', 'Altre_comorbidità': 'Altre_comorbidità', 'Casi_COVID': 'Casi_COVID', 'Casi_COVID_wave1': 'Casi_COVID_wave1', 'Casi_COVID_wave2': 'Casi_COVID_wave2', 'Casi_COVID_wave3': 'Casi_COVID_wave3', 'Casi_COVID_no_wave': 'Casi_COVID_no_wave', 'cases_more_people': 'cases_more_people', 'prop_0_19': 'prop_0_19', 'prop_20_64': 'prop_20_64', 'prop_65oltre': 'prop_65oltre', 'prop_Femmine': 'prop_Femmine', 'prop_Maschi': 'prop_Maschi', 'prop_Fam1': 'prop_Fam1', 'prop_Fam2': 'prop_Fam2', 'prop_Fam3oltre': 'prop_Fam3oltre', 'prop_Diabete': 'prop_Diabete', 'prop_Ipertensione': 'prop_Ipertensione', 'prop_Altre_Comorbidità': 'prop_Altre_Comorbidità', 'prop_Comorbidità': 'prop_Comorbidità', 'id.area': 'id.area', 'total_casi': 'total_casi', 'IR_obs': 'IR_obs', });
lyr_ResidentswithHypertension.set('fieldAliases', {'fid': 'fid', 'nome_area': 'nome_area', 'codice_area': 'codice_area', 'area': 'area', 'COMUNE': 'COMUNE', 'CODCOM': 'CODCOM', 'PROCOM': 'PROCOM', 'Pop': 'Pop', 'grouped_area': 'grouped_area', 'PopDom': 'PopDom', 'P_Tot': 'P_Tot', 'P_0_19': 'P_0_19', 'P_20_64': 'P_20_64', 'P_65oltre': 'P_65oltre', 'P_Femmine': 'P_Femmine', 'P_Maschi': 'P_Maschi', 'Fam_1': 'Fam_1', 'Fam_2': 'Fam_2', 'Fam_3oltre': 'Fam_3oltre', 'Fam_numero': 'Fam_numero', 'Diabete': 'Diabete', 'Ipertensione': 'Ipertensione', 'Altre_comorbidità': 'Altre_comorbidità', 'Casi_COVID': 'Casi_COVID', 'Casi_COVID_wave1': 'Casi_COVID_wave1', 'Casi_COVID_wave2': 'Casi_COVID_wave2', 'Casi_COVID_wave3': 'Casi_COVID_wave3', 'Casi_COVID_no_wave': 'Casi_COVID_no_wave', 'cases_more_people': 'cases_more_people', 'prop_0_19': 'prop_0_19', 'prop_20_64': 'prop_20_64', 'prop_65oltre': 'prop_65oltre', 'prop_Femmine': 'prop_Femmine', 'prop_Maschi': 'prop_Maschi', 'prop_Fam1': 'prop_Fam1', 'prop_Fam2': 'prop_Fam2', 'prop_Fam3oltre': 'prop_Fam3oltre', 'prop_Diabete': 'prop_Diabete', 'prop_Ipertensione': 'prop_Ipertensione', 'prop_Altre_Comorbidità': 'prop_Altre_Comorbidità', 'prop_Comorbidità': 'prop_Comorbidità', 'id.area': 'id.area', 'total_casi': 'total_casi', 'IR_obs': 'IR_obs', });
lyr_ResidentswithDiabetes.set('fieldAliases', {'fid': 'fid', 'nome_area': 'nome_area', 'codice_area': 'codice_area', 'area': 'area', 'COMUNE': 'COMUNE', 'CODCOM': 'CODCOM', 'PROCOM': 'PROCOM', 'Pop': 'Pop', 'grouped_area': 'grouped_area', 'PopDom': 'PopDom', 'P_Tot': 'P_Tot', 'P_0_19': 'P_0_19', 'P_20_64': 'P_20_64', 'P_65oltre': 'P_65oltre', 'P_Femmine': 'P_Femmine', 'P_Maschi': 'P_Maschi', 'Fam_1': 'Fam_1', 'Fam_2': 'Fam_2', 'Fam_3oltre': 'Fam_3oltre', 'Fam_numero': 'Fam_numero', 'Diabete': 'Diabete', 'Ipertensione': 'Ipertensione', 'Altre_comorbidità': 'Altre_comorbidità', 'Casi_COVID': 'Casi_COVID', 'Casi_COVID_wave1': 'Casi_COVID_wave1', 'Casi_COVID_wave2': 'Casi_COVID_wave2', 'Casi_COVID_wave3': 'Casi_COVID_wave3', 'Casi_COVID_no_wave': 'Casi_COVID_no_wave', 'cases_more_people': 'cases_more_people', 'prop_0_19': 'prop_0_19', 'prop_20_64': 'prop_20_64', 'prop_65oltre': 'prop_65oltre', 'prop_Femmine': 'prop_Femmine', 'prop_Maschi': 'prop_Maschi', 'prop_Fam1': 'prop_Fam1', 'prop_Fam2': 'prop_Fam2', 'prop_Fam3oltre': 'prop_Fam3oltre', 'prop_Diabete': 'prop_Diabete', 'prop_Ipertensione': 'prop_Ipertensione', 'prop_Altre_Comorbidità': 'prop_Altre_Comorbidità', 'prop_Comorbidità': 'prop_Comorbidità', 'id.area': 'id.area', 'total_casi': 'total_casi', 'IR_obs': 'IR_obs', });
lyr_Familieswith3components.set('fieldAliases', {'fid': 'fid', 'nome_area': 'nome_area', 'codice_area': 'codice_area', 'area': 'area', 'COMUNE': 'COMUNE', 'CODCOM': 'CODCOM', 'PROCOM': 'PROCOM', 'Pop': 'Pop', 'grouped_area': 'grouped_area', 'PopDom': 'PopDom', 'P_Tot': 'P_Tot', 'P_0_19': 'P_0_19', 'P_20_64': 'P_20_64', 'P_65oltre': 'P_65oltre', 'P_Femmine': 'P_Femmine', 'P_Maschi': 'P_Maschi', 'Fam_1': 'Fam_1', 'Fam_2': 'Fam_2', 'Fam_3oltre': 'Fam_3oltre', 'Fam_numero': 'Fam_numero', 'Diabete': 'Diabete', 'Ipertensione': 'Ipertensione', 'Altre_comorbidità': 'Altre_comorbidità', 'Casi_COVID': 'Casi_COVID', 'Casi_COVID_wave1': 'Casi_COVID_wave1', 'Casi_COVID_wave2': 'Casi_COVID_wave2', 'Casi_COVID_wave3': 'Casi_COVID_wave3', 'Casi_COVID_no_wave': 'Casi_COVID_no_wave', 'cases_more_people': 'cases_more_people', 'prop_0_19': 'prop_0_19', 'prop_20_64': 'prop_20_64', 'prop_65oltre': 'prop_65oltre', 'prop_Femmine': 'prop_Femmine', 'prop_Maschi': 'prop_Maschi', 'prop_Fam1': 'prop_Fam1', 'prop_Fam2': 'prop_Fam2', 'prop_Fam3oltre': 'prop_Fam3oltre', 'prop_Diabete': 'prop_Diabete', 'prop_Ipertensione': 'prop_Ipertensione', 'prop_Altre_Comorbidità': 'prop_Altre_Comorbidità', 'prop_Comorbidità': 'prop_Comorbidità', 'id.area': 'id.area', 'total_casi': 'total_casi', 'IR_obs': 'IR_obs', });
lyr_Familieswith2components.set('fieldAliases', {'fid': 'fid', 'nome_area': 'nome_area', 'codice_area': 'codice_area', 'area': 'area', 'COMUNE': 'COMUNE', 'CODCOM': 'CODCOM', 'PROCOM': 'PROCOM', 'Pop': 'Pop', 'grouped_area': 'grouped_area', 'PopDom': 'PopDom', 'P_Tot': 'P_Tot', 'P_0_19': 'P_0_19', 'P_20_64': 'P_20_64', 'P_65oltre': 'P_65oltre', 'P_Femmine': 'P_Femmine', 'P_Maschi': 'P_Maschi', 'Fam_1': 'Fam_1', 'Fam_2': 'Fam_2', 'Fam_3oltre': 'Fam_3oltre', 'Fam_numero': 'Fam_numero', 'Diabete': 'Diabete', 'Ipertensione': 'Ipertensione', 'Altre_comorbidità': 'Altre_comorbidità', 'Casi_COVID': 'Casi_COVID', 'Casi_COVID_wave1': 'Casi_COVID_wave1', 'Casi_COVID_wave2': 'Casi_COVID_wave2', 'Casi_COVID_wave3': 'Casi_COVID_wave3', 'Casi_COVID_no_wave': 'Casi_COVID_no_wave', 'cases_more_people': 'cases_more_people', 'prop_0_19': 'prop_0_19', 'prop_20_64': 'prop_20_64', 'prop_65oltre': 'prop_65oltre', 'prop_Femmine': 'prop_Femmine', 'prop_Maschi': 'prop_Maschi', 'prop_Fam1': 'prop_Fam1', 'prop_Fam2': 'prop_Fam2', 'prop_Fam3oltre': 'prop_Fam3oltre', 'prop_Diabete': 'prop_Diabete', 'prop_Ipertensione': 'prop_Ipertensione', 'prop_Altre_Comorbidità': 'prop_Altre_Comorbidità', 'prop_Comorbidità': 'prop_Comorbidità', 'id.area': 'id.area', 'total_casi': 'total_casi', 'IR_obs': 'IR_obs', });
lyr_Population65.set('fieldAliases', {'fid': 'fid', 'nome_area': 'nome_area', 'codice_area': 'codice_area', 'area': 'area', 'COMUNE': 'COMUNE', 'CODCOM': 'CODCOM', 'PROCOM': 'PROCOM', 'Pop': 'Pop', 'grouped_area': 'grouped_area', 'PopDom': 'PopDom', 'P_Tot': 'P_Tot', 'P_0_19': 'P_0_19', 'P_20_64': 'P_20_64', 'P_65oltre': 'P_65oltre', 'P_Femmine': 'P_Femmine', 'P_Maschi': 'P_Maschi', 'Fam_1': 'Fam_1', 'Fam_2': 'Fam_2', 'Fam_3oltre': 'Fam_3oltre', 'Fam_numero': 'Fam_numero', 'Diabete': 'Diabete', 'Ipertensione': 'Ipertensione', 'Altre_comorbidità': 'Altre_comorbidità', 'Casi_COVID': 'Casi_COVID', 'Casi_COVID_wave1': 'Casi_COVID_wave1', 'Casi_COVID_wave2': 'Casi_COVID_wave2', 'Casi_COVID_wave3': 'Casi_COVID_wave3', 'Casi_COVID_no_wave': 'Casi_COVID_no_wave', 'cases_more_people': 'cases_more_people', 'prop_0_19': 'prop_0_19', 'prop_20_64': 'prop_20_64', 'prop_65oltre': 'prop_65oltre', 'prop_Femmine': 'prop_Femmine', 'prop_Maschi': 'prop_Maschi', 'prop_Fam1': 'prop_Fam1', 'prop_Fam2': 'prop_Fam2', 'prop_Fam3oltre': 'prop_Fam3oltre', 'prop_Diabete': 'prop_Diabete', 'prop_Ipertensione': 'prop_Ipertensione', 'prop_Altre_Comorbidità': 'prop_Altre_Comorbidità', 'prop_Comorbidità': 'prop_Comorbidità', 'id.area': 'id.area', 'total_casi': 'total_casi', 'IR_obs': 'IR_obs', });
lyr_Population2064.set('fieldAliases', {'fid': 'fid', 'nome_area': 'nome_area', 'codice_area': 'codice_area', 'area': 'area', 'COMUNE': 'COMUNE', 'CODCOM': 'CODCOM', 'PROCOM': 'PROCOM', 'Pop': 'Pop', 'grouped_area': 'grouped_area', 'PopDom': 'PopDom', 'P_Tot': 'P_Tot', 'P_0_19': 'P_0_19', 'P_20_64': 'P_20_64', 'P_65oltre': 'P_65oltre', 'P_Femmine': 'P_Femmine', 'P_Maschi': 'P_Maschi', 'Fam_1': 'Fam_1', 'Fam_2': 'Fam_2', 'Fam_3oltre': 'Fam_3oltre', 'Fam_numero': 'Fam_numero', 'Diabete': 'Diabete', 'Ipertensione': 'Ipertensione', 'Altre_comorbidità': 'Altre_comorbidità', 'Casi_COVID': 'Casi_COVID', 'Casi_COVID_wave1': 'Casi_COVID_wave1', 'Casi_COVID_wave2': 'Casi_COVID_wave2', 'Casi_COVID_wave3': 'Casi_COVID_wave3', 'Casi_COVID_no_wave': 'Casi_COVID_no_wave', 'cases_more_people': 'cases_more_people', 'prop_0_19': 'prop_0_19', 'prop_20_64': 'prop_20_64', 'prop_65oltre': 'prop_65oltre', 'prop_Femmine': 'prop_Femmine', 'prop_Maschi': 'prop_Maschi', 'prop_Fam1': 'prop_Fam1', 'prop_Fam2': 'prop_Fam2', 'prop_Fam3oltre': 'prop_Fam3oltre', 'prop_Diabete': 'prop_Diabete', 'prop_Ipertensione': 'prop_Ipertensione', 'prop_Altre_Comorbidità': 'prop_Altre_Comorbidità', 'prop_Comorbidità': 'prop_Comorbidità', 'id.area': 'id.area', 'total_casi': 'total_casi', 'IR_obs': 'IR_obs', });
lyr_MalePopulation.set('fieldAliases', {'fid': 'fid', 'nome_area': 'nome_area', 'codice_area': 'codice_area', 'area': 'area', 'COMUNE': 'COMUNE', 'CODCOM': 'CODCOM', 'PROCOM': 'PROCOM', 'Pop': 'Pop', 'grouped_area': 'grouped_area', 'PopDom': 'PopDom', 'P_Tot': 'P_Tot', 'P_0_19': 'P_0_19', 'P_20_64': 'P_20_64', 'P_65oltre': 'P_65oltre', 'P_Femmine': 'P_Femmine', 'P_Maschi': 'P_Maschi', 'Fam_1': 'Fam_1', 'Fam_2': 'Fam_2', 'Fam_3oltre': 'Fam_3oltre', 'Fam_numero': 'Fam_numero', 'Diabete': 'Diabete', 'Ipertensione': 'Ipertensione', 'Altre_comorbidità': 'Altre_comorbidità', 'Casi_COVID': 'Casi_COVID', 'Casi_COVID_wave1': 'Casi_COVID_wave1', 'Casi_COVID_wave2': 'Casi_COVID_wave2', 'Casi_COVID_wave3': 'Casi_COVID_wave3', 'Casi_COVID_no_wave': 'Casi_COVID_no_wave', 'cases_more_people': 'cases_more_people', 'prop_0_19': 'prop_0_19', 'prop_20_64': 'prop_20_64', 'prop_65oltre': 'prop_65oltre', 'prop_Femmine': 'prop_Femmine', 'prop_Maschi': 'prop_Maschi', 'prop_Fam1': 'prop_Fam1', 'prop_Fam2': 'prop_Fam2', 'prop_Fam3oltre': 'prop_Fam3oltre', 'prop_Diabete': 'prop_Diabete', 'prop_Ipertensione': 'prop_Ipertensione', 'prop_Altre_Comorbidità': 'prop_Altre_Comorbidità', 'prop_Comorbidità': 'prop_Comorbidità', 'id.area': 'id.area', 'total_casi': 'total_casi', 'IR_obs': 'IR_obs', });
lyr_DomiciledPopulation.set('fieldAliases', {'codice_are': 'codice_are', 'area': 'area', 'COMUNE': 'COMUNE', 'CODCOM': 'CODCOM', 'PROCOM': 'PROCOM', 'popolazion': 'popolazion', 'Raggrupp a': 'Raggrupp a', 'popolazi_1': 'popolazi_1', });
lyr_ObservedIR.set('fieldAliases', {'fid': 'fid', 'nome_area': 'nome_area', 'codice_area': 'codice_area', 'area': 'area', 'COMUNE': 'COMUNE', 'CODCOM': 'CODCOM', 'PROCOM': 'PROCOM', 'Pop': 'Pop', 'grouped_area': 'grouped_area', 'PopDom': 'PopDom', 'P_Tot': 'P_Tot', 'P_0_19': 'P_0_19', 'P_20_64': 'P_20_64', 'P_65oltre': 'P_65oltre', 'P_Femmine': 'P_Femmine', 'P_Maschi': 'P_Maschi', 'Fam_1': 'Fam_1', 'Fam_2': 'Fam_2', 'Fam_3oltre': 'Fam_3oltre', 'Fam_numero': 'Fam_numero', 'Diabete': 'Diabete', 'Ipertensione': 'Ipertensione', 'Altre_comorbidità': 'Altre_comorbidità', 'Casi_COVID': 'Casi_COVID', 'Casi_COVID_wave1': 'Casi_COVID_wave1', 'Casi_COVID_wave2': 'Casi_COVID_wave2', 'Casi_COVID_wave3': 'Casi_COVID_wave3', 'Casi_COVID_no_wave': 'Casi_COVID_no_wave', 'cases_more_people': 'cases_more_people', 'prop_0_19': 'prop_0_19', 'prop_20_64': 'prop_20_64', 'prop_65oltre': 'prop_65oltre', 'prop_Femmine': 'prop_Femmine', 'prop_Maschi': 'prop_Maschi', 'prop_Fam1': 'prop_Fam1', 'prop_Fam2': 'prop_Fam2', 'prop_Fam3oltre': 'prop_Fam3oltre', 'prop_Diabete': 'prop_Diabete', 'prop_Ipertensione': 'prop_Ipertensione', 'prop_Altre_Comorbidità': 'prop_Altre_Comorbidità', 'prop_Comorbidità': 'prop_Comorbidità', 'id.area': 'id.area', 'total_casi': 'total_casi', 'IR_obs': 'IR_obs', 'pop_density': 'pop_density', });
lyr_Municipalities.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ISTAT': 'ISTAT', 'NOME_C': 'NOME_C', 'Shape_Area': 'Shape_Area', });
lyr_AggregatedAreas.set('fieldAliases', {'fid': 'fid', 'Raggrupp a': 'Name', 'Pop': 'Resident Population', 'PopDom': 'PopDom', 'P_Tot': 'P_Tot', 'P_Femmine': 'P_Femmine', 'P_Maschi': 'P_Maschi', 'P_0_19': 'P_0_19', 'P_20_64': 'P_20_64', 'P_65oltre': 'P_65oltre', 'Fam_1': 'Fam_1', 'Fam_2': 'Fam_2', 'Fam_3oltre': 'Fam_3oltre', 'Fam_numero': 'Fam_numero', 'Diabete': 'Diabete', 'Ipertensione': 'Ipertensione', 'Altre_comorbidità': 'Altre_comorbidità', 'Casi_COVID': 'Casi_COVID', 'Casi_wave1': 'Casi_wave1', 'Casi_wave2': 'Casi_wave2', 'Casi_wave3': 'Casi_wave3', 'Casi_no_wave': 'Casi_no_wave', 'IR': 'IR', });
lyr_SmallAreas.set('fieldAliases', {'codice_are': 'codice_are', 'area': 'Name', 'COMUNE': 'Municipality', 'CODCOM': 'CODCOM', 'PROCOM': 'PROCOM', 'popolazion': 'popolazion', 'Raggrupp a': 'Aggregated Area', 'popolazi_1': 'popolazi_1', });
lyr_SewerNetwork.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FONTE': 'FONTE', 'NOTE': 'NOTE', 'ULTIMO_AGG': 'ULTIMO_AGG', 'TIPOLOGIA': 'TIPOLOGIA', 'ID_GEST': 'ID_GEST', 'COD_RETE': 'COD_RETE', 'ID': 'ID', 'SISTEMA_FO': 'SISTEMA_FO', 'SHAPE_LEN': 'SHAPE_LEN', 'PROVINCIA': 'PROVINCIA', 'SIGLA': 'SIGLA', });
lyr_WastewaterTreatmentPlant.set('fieldAliases', {'fid': 'fid', 'COD_PROV': 'COD_PROV', 'NOME_PROV': 'NOME_PROV', 'COD_DEP': 'COD_DEP', 'DEN_DEP': 'DEN_DEP', 'COD_AGG': 'COD_AGG', 'NOME_AGG': 'NOME_AGG', 'GESTORE': 'GESTORE', 'ISTAT_COD': 'ISTAT_COD', 'COMUNE': 'COMUNE', 'TIPO_DEP': 'TIPO_DEP', 'DESCR_TIPO': 'DESCR_TIPO', 'LIV_DEP': 'LIV_DEP', 'AE_PROG': 'AE_PROG', 'N__CIS_WFD': 'N__CIS_WFD', 'COD_CIS': 'COD_CIS', 'N_CIS': 'N_CIS', 'AE_TOT': 'AE_TOT', 'X_E32': 'X_E32', 'Y_E32': 'Y_E32', 'SIGLA': 'SIGLA', 'CLASSE_AGG': 'CLASSE_AGG', });
lyr_GeometricCentroids.set('fieldAliases', {'fid': 'fid', 'codice_are': 'codice_are', 'area': 'area', 'COMUNE': 'COMUNE', 'CODCOM': 'CODCOM', 'PROCOM': 'PROCOM', 'popolazion': 'popolazion', 'Raggrupp a': 'Raggrupp a', 'popolazi_1': 'popolazi_1', });
lyr_LandusebasedCentroids.set('fieldAliases', {'fid': 'fid', 'codice_area': 'codice_area', 'x': 'x', 'y': 'y', });
lyr_RiskCoefficientsWi.set('fieldImages', {'fid': 'TextEdit', 'nome_area': 'TextEdit', 'codice_area': 'TextEdit', 'area': 'TextEdit', 'COMUNE': 'TextEdit', 'CODCOM': 'TextEdit', 'PROCOM': 'TextEdit', 'Pop': 'TextEdit', 'grouped_area': 'TextEdit', 'PopDom': 'TextEdit', 'P_Tot': 'TextEdit', 'P_0_19': 'TextEdit', 'P_20_64': 'TextEdit', 'P_65oltre': 'TextEdit', 'P_Femmine': 'TextEdit', 'P_Maschi': 'TextEdit', 'Fam_1': 'TextEdit', 'Fam_2': 'TextEdit', 'Fam_3oltre': 'TextEdit', 'Fam_numero': 'TextEdit', 'Diabete': 'TextEdit', 'Ipertensione': 'TextEdit', 'Altre_comorbidità': 'TextEdit', 'Casi_COVID': 'TextEdit', 'Casi_COVID_wave1': 'TextEdit', 'Casi_COVID_wave2': 'TextEdit', 'Casi_COVID_wave3': 'TextEdit', 'Casi_COVID_no_wave': 'TextEdit', 'cases_more_people': 'TextEdit', 'prop_0_19': 'TextEdit', 'prop_20_64': 'TextEdit', 'prop_65oltre': 'TextEdit', 'prop_Femmine': 'TextEdit', 'prop_Maschi': 'TextEdit', 'prop_Fam1': 'TextEdit', 'prop_Fam2': 'TextEdit', 'prop_Fam3oltre': 'TextEdit', 'prop_Diabete': 'TextEdit', 'prop_Ipertensione': 'TextEdit', 'prop_Altre_Comorbidità': 'TextEdit', 'prop_Comorbidità': 'TextEdit', 'id.area': 'TextEdit', 'total_casi': 'TextEdit', 'IR_obs': 'TextEdit', 'pop_density': 'TextEdit', 'Wi_values_webapp_Wi_median': 'TextEdit', 'Wi_values_webapp_Wi': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_PosteriorMeanPrecisionParameter.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'ISTAT': 'TextEdit', 'NOME_C': 'TextEdit', 'Shape_Area': 'TextEdit', 'Tau': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_IRt.set('fieldImages', {'fid': 'TextEdit', 'nome_area': 'TextEdit', 'codice_area': 'TextEdit', 'area': 'TextEdit', 'COMUNE': 'TextEdit', 'CODCOM': 'TextEdit', 'PROCOM': 'TextEdit', 'Pop': 'TextEdit', 'grouped_area': 'TextEdit', 'paths_plots_plots': 'ExternalResource', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_PopulationDensityresidentsm2.set('fieldImages', {'fid': 'TextEdit', 'nome_area': 'TextEdit', 'codice_area': 'TextEdit', 'area': 'TextEdit', 'COMUNE': 'TextEdit', 'CODCOM': 'TextEdit', 'PROCOM': 'TextEdit', 'Pop': 'TextEdit', 'grouped_area': 'TextEdit', 'PopDom': 'TextEdit', 'P_Tot': 'TextEdit', 'P_0_19': 'TextEdit', 'P_20_64': 'TextEdit', 'P_65oltre': 'TextEdit', 'P_Femmine': 'TextEdit', 'P_Maschi': 'TextEdit', 'Fam_1': 'TextEdit', 'Fam_2': 'TextEdit', 'Fam_3oltre': 'TextEdit', 'Fam_numero': 'TextEdit', 'Diabete': 'TextEdit', 'Ipertensione': 'TextEdit', 'Altre_comorbidità': 'TextEdit', 'Casi_COVID': 'TextEdit', 'Casi_COVID_wave1': 'TextEdit', 'Casi_COVID_wave2': 'TextEdit', 'Casi_COVID_wave3': 'TextEdit', 'Casi_COVID_no_wave': 'TextEdit', 'cases_more_people': 'TextEdit', 'prop_0_19': 'TextEdit', 'prop_20_64': 'TextEdit', 'prop_65oltre': 'TextEdit', 'prop_Femmine': 'TextEdit', 'prop_Maschi': 'TextEdit', 'prop_Fam1': 'TextEdit', 'prop_Fam2': 'TextEdit', 'prop_Fam3oltre': 'TextEdit', 'prop_Diabete': 'TextEdit', 'prop_Ipertensione': 'TextEdit', 'prop_Altre_Comorbidità': 'TextEdit', 'prop_Comorbidità': 'TextEdit', 'id.area': 'TextEdit', 'total_casi': 'TextEdit', 'IR_obs': 'TextEdit', 'pop_density': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_ResidentswithOtherComorbidities.set('fieldImages', {'fid': 'TextEdit', 'nome_area': 'TextEdit', 'codice_area': 'TextEdit', 'area': 'TextEdit', 'COMUNE': 'TextEdit', 'CODCOM': 'TextEdit', 'PROCOM': 'TextEdit', 'Pop': 'TextEdit', 'grouped_area': 'TextEdit', 'PopDom': 'TextEdit', 'P_Tot': 'TextEdit', 'P_0_19': 'TextEdit', 'P_20_64': 'TextEdit', 'P_65oltre': 'TextEdit', 'P_Femmine': 'TextEdit', 'P_Maschi': 'TextEdit', 'Fam_1': 'TextEdit', 'Fam_2': 'TextEdit', 'Fam_3oltre': 'TextEdit', 'Fam_numero': 'TextEdit', 'Diabete': 'TextEdit', 'Ipertensione': 'TextEdit', 'Altre_comorbidità': 'TextEdit', 'Casi_COVID': 'TextEdit', 'Casi_COVID_wave1': 'TextEdit', 'Casi_COVID_wave2': 'TextEdit', 'Casi_COVID_wave3': 'TextEdit', 'Casi_COVID_no_wave': 'TextEdit', 'cases_more_people': 'TextEdit', 'prop_0_19': 'TextEdit', 'prop_20_64': 'TextEdit', 'prop_65oltre': 'TextEdit', 'prop_Femmine': 'TextEdit', 'prop_Maschi': 'TextEdit', 'prop_Fam1': 'TextEdit', 'prop_Fam2': 'TextEdit', 'prop_Fam3oltre': 'TextEdit', 'prop_Diabete': 'TextEdit', 'prop_Ipertensione': 'TextEdit', 'prop_Altre_Comorbidità': 'TextEdit', 'prop_Comorbidità': 'TextEdit', 'id.area': 'TextEdit', 'total_casi': 'TextEdit', 'IR_obs': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_ResidentswithHypertension.set('fieldImages', {'fid': 'TextEdit', 'nome_area': 'TextEdit', 'codice_area': 'TextEdit', 'area': 'TextEdit', 'COMUNE': 'TextEdit', 'CODCOM': 'TextEdit', 'PROCOM': 'TextEdit', 'Pop': 'TextEdit', 'grouped_area': 'TextEdit', 'PopDom': 'TextEdit', 'P_Tot': 'TextEdit', 'P_0_19': 'TextEdit', 'P_20_64': 'TextEdit', 'P_65oltre': 'TextEdit', 'P_Femmine': 'TextEdit', 'P_Maschi': 'TextEdit', 'Fam_1': 'TextEdit', 'Fam_2': 'TextEdit', 'Fam_3oltre': 'TextEdit', 'Fam_numero': 'TextEdit', 'Diabete': 'TextEdit', 'Ipertensione': 'TextEdit', 'Altre_comorbidità': 'TextEdit', 'Casi_COVID': 'TextEdit', 'Casi_COVID_wave1': 'TextEdit', 'Casi_COVID_wave2': 'TextEdit', 'Casi_COVID_wave3': 'TextEdit', 'Casi_COVID_no_wave': 'TextEdit', 'cases_more_people': 'TextEdit', 'prop_0_19': 'TextEdit', 'prop_20_64': 'TextEdit', 'prop_65oltre': 'TextEdit', 'prop_Femmine': 'TextEdit', 'prop_Maschi': 'TextEdit', 'prop_Fam1': 'TextEdit', 'prop_Fam2': 'TextEdit', 'prop_Fam3oltre': 'TextEdit', 'prop_Diabete': 'TextEdit', 'prop_Ipertensione': 'TextEdit', 'prop_Altre_Comorbidità': 'TextEdit', 'prop_Comorbidità': 'TextEdit', 'id.area': 'TextEdit', 'total_casi': 'TextEdit', 'IR_obs': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_ResidentswithDiabetes.set('fieldImages', {'fid': 'TextEdit', 'nome_area': 'TextEdit', 'codice_area': 'TextEdit', 'area': 'TextEdit', 'COMUNE': 'TextEdit', 'CODCOM': 'TextEdit', 'PROCOM': 'TextEdit', 'Pop': 'TextEdit', 'grouped_area': 'TextEdit', 'PopDom': 'TextEdit', 'P_Tot': 'TextEdit', 'P_0_19': 'TextEdit', 'P_20_64': 'TextEdit', 'P_65oltre': 'TextEdit', 'P_Femmine': 'TextEdit', 'P_Maschi': 'TextEdit', 'Fam_1': 'TextEdit', 'Fam_2': 'TextEdit', 'Fam_3oltre': 'TextEdit', 'Fam_numero': 'TextEdit', 'Diabete': 'TextEdit', 'Ipertensione': 'TextEdit', 'Altre_comorbidità': 'TextEdit', 'Casi_COVID': 'TextEdit', 'Casi_COVID_wave1': 'TextEdit', 'Casi_COVID_wave2': 'TextEdit', 'Casi_COVID_wave3': 'TextEdit', 'Casi_COVID_no_wave': 'TextEdit', 'cases_more_people': 'TextEdit', 'prop_0_19': 'TextEdit', 'prop_20_64': 'TextEdit', 'prop_65oltre': 'TextEdit', 'prop_Femmine': 'TextEdit', 'prop_Maschi': 'TextEdit', 'prop_Fam1': 'TextEdit', 'prop_Fam2': 'TextEdit', 'prop_Fam3oltre': 'TextEdit', 'prop_Diabete': 'TextEdit', 'prop_Ipertensione': 'TextEdit', 'prop_Altre_Comorbidità': 'TextEdit', 'prop_Comorbidità': 'TextEdit', 'id.area': 'TextEdit', 'total_casi': 'TextEdit', 'IR_obs': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Familieswith3components.set('fieldImages', {'fid': 'TextEdit', 'nome_area': 'TextEdit', 'codice_area': 'TextEdit', 'area': 'TextEdit', 'COMUNE': 'TextEdit', 'CODCOM': 'TextEdit', 'PROCOM': 'TextEdit', 'Pop': 'TextEdit', 'grouped_area': 'TextEdit', 'PopDom': 'TextEdit', 'P_Tot': 'TextEdit', 'P_0_19': 'TextEdit', 'P_20_64': 'TextEdit', 'P_65oltre': 'TextEdit', 'P_Femmine': 'TextEdit', 'P_Maschi': 'TextEdit', 'Fam_1': 'TextEdit', 'Fam_2': 'TextEdit', 'Fam_3oltre': 'TextEdit', 'Fam_numero': 'TextEdit', 'Diabete': 'TextEdit', 'Ipertensione': 'TextEdit', 'Altre_comorbidità': 'TextEdit', 'Casi_COVID': 'TextEdit', 'Casi_COVID_wave1': 'TextEdit', 'Casi_COVID_wave2': 'TextEdit', 'Casi_COVID_wave3': 'TextEdit', 'Casi_COVID_no_wave': 'TextEdit', 'cases_more_people': 'TextEdit', 'prop_0_19': 'TextEdit', 'prop_20_64': 'TextEdit', 'prop_65oltre': 'TextEdit', 'prop_Femmine': 'TextEdit', 'prop_Maschi': 'TextEdit', 'prop_Fam1': 'TextEdit', 'prop_Fam2': 'TextEdit', 'prop_Fam3oltre': 'TextEdit', 'prop_Diabete': 'TextEdit', 'prop_Ipertensione': 'TextEdit', 'prop_Altre_Comorbidità': 'TextEdit', 'prop_Comorbidità': 'TextEdit', 'id.area': 'TextEdit', 'total_casi': 'TextEdit', 'IR_obs': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Familieswith2components.set('fieldImages', {'fid': 'TextEdit', 'nome_area': 'TextEdit', 'codice_area': 'TextEdit', 'area': 'TextEdit', 'COMUNE': 'TextEdit', 'CODCOM': 'TextEdit', 'PROCOM': 'TextEdit', 'Pop': 'TextEdit', 'grouped_area': 'TextEdit', 'PopDom': 'TextEdit', 'P_Tot': 'TextEdit', 'P_0_19': 'TextEdit', 'P_20_64': 'TextEdit', 'P_65oltre': 'TextEdit', 'P_Femmine': 'TextEdit', 'P_Maschi': 'TextEdit', 'Fam_1': 'TextEdit', 'Fam_2': 'TextEdit', 'Fam_3oltre': 'TextEdit', 'Fam_numero': 'TextEdit', 'Diabete': 'TextEdit', 'Ipertensione': 'TextEdit', 'Altre_comorbidità': 'TextEdit', 'Casi_COVID': 'TextEdit', 'Casi_COVID_wave1': 'TextEdit', 'Casi_COVID_wave2': 'TextEdit', 'Casi_COVID_wave3': 'TextEdit', 'Casi_COVID_no_wave': 'TextEdit', 'cases_more_people': 'TextEdit', 'prop_0_19': 'TextEdit', 'prop_20_64': 'TextEdit', 'prop_65oltre': 'TextEdit', 'prop_Femmine': 'TextEdit', 'prop_Maschi': 'TextEdit', 'prop_Fam1': 'TextEdit', 'prop_Fam2': 'TextEdit', 'prop_Fam3oltre': 'TextEdit', 'prop_Diabete': 'TextEdit', 'prop_Ipertensione': 'TextEdit', 'prop_Altre_Comorbidità': 'TextEdit', 'prop_Comorbidità': 'TextEdit', 'id.area': 'TextEdit', 'total_casi': 'TextEdit', 'IR_obs': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Population65.set('fieldImages', {'fid': 'TextEdit', 'nome_area': 'TextEdit', 'codice_area': 'TextEdit', 'area': 'TextEdit', 'COMUNE': 'TextEdit', 'CODCOM': 'TextEdit', 'PROCOM': 'TextEdit', 'Pop': 'TextEdit', 'grouped_area': 'TextEdit', 'PopDom': 'TextEdit', 'P_Tot': 'TextEdit', 'P_0_19': 'TextEdit', 'P_20_64': 'TextEdit', 'P_65oltre': 'TextEdit', 'P_Femmine': 'TextEdit', 'P_Maschi': 'TextEdit', 'Fam_1': 'TextEdit', 'Fam_2': 'TextEdit', 'Fam_3oltre': 'TextEdit', 'Fam_numero': 'TextEdit', 'Diabete': 'TextEdit', 'Ipertensione': 'TextEdit', 'Altre_comorbidità': 'TextEdit', 'Casi_COVID': 'TextEdit', 'Casi_COVID_wave1': 'TextEdit', 'Casi_COVID_wave2': 'TextEdit', 'Casi_COVID_wave3': 'TextEdit', 'Casi_COVID_no_wave': 'TextEdit', 'cases_more_people': 'TextEdit', 'prop_0_19': 'TextEdit', 'prop_20_64': 'TextEdit', 'prop_65oltre': 'TextEdit', 'prop_Femmine': 'TextEdit', 'prop_Maschi': 'TextEdit', 'prop_Fam1': 'TextEdit', 'prop_Fam2': 'TextEdit', 'prop_Fam3oltre': 'TextEdit', 'prop_Diabete': 'TextEdit', 'prop_Ipertensione': 'TextEdit', 'prop_Altre_Comorbidità': 'TextEdit', 'prop_Comorbidità': 'TextEdit', 'id.area': 'TextEdit', 'total_casi': 'TextEdit', 'IR_obs': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Population2064.set('fieldImages', {'fid': 'TextEdit', 'nome_area': 'TextEdit', 'codice_area': 'TextEdit', 'area': 'TextEdit', 'COMUNE': 'TextEdit', 'CODCOM': 'TextEdit', 'PROCOM': 'TextEdit', 'Pop': 'TextEdit', 'grouped_area': 'TextEdit', 'PopDom': 'TextEdit', 'P_Tot': 'TextEdit', 'P_0_19': 'TextEdit', 'P_20_64': 'TextEdit', 'P_65oltre': 'TextEdit', 'P_Femmine': 'TextEdit', 'P_Maschi': 'TextEdit', 'Fam_1': 'TextEdit', 'Fam_2': 'TextEdit', 'Fam_3oltre': 'TextEdit', 'Fam_numero': 'TextEdit', 'Diabete': 'TextEdit', 'Ipertensione': 'TextEdit', 'Altre_comorbidità': 'TextEdit', 'Casi_COVID': 'TextEdit', 'Casi_COVID_wave1': 'TextEdit', 'Casi_COVID_wave2': 'TextEdit', 'Casi_COVID_wave3': 'TextEdit', 'Casi_COVID_no_wave': 'TextEdit', 'cases_more_people': 'TextEdit', 'prop_0_19': 'TextEdit', 'prop_20_64': 'TextEdit', 'prop_65oltre': 'TextEdit', 'prop_Femmine': 'TextEdit', 'prop_Maschi': 'TextEdit', 'prop_Fam1': 'TextEdit', 'prop_Fam2': 'TextEdit', 'prop_Fam3oltre': 'TextEdit', 'prop_Diabete': 'TextEdit', 'prop_Ipertensione': 'TextEdit', 'prop_Altre_Comorbidità': 'TextEdit', 'prop_Comorbidità': 'TextEdit', 'id.area': 'TextEdit', 'total_casi': 'TextEdit', 'IR_obs': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_MalePopulation.set('fieldImages', {'fid': 'TextEdit', 'nome_area': 'TextEdit', 'codice_area': 'TextEdit', 'area': 'TextEdit', 'COMUNE': 'TextEdit', 'CODCOM': 'TextEdit', 'PROCOM': 'TextEdit', 'Pop': 'TextEdit', 'grouped_area': 'TextEdit', 'PopDom': 'TextEdit', 'P_Tot': 'TextEdit', 'P_0_19': 'TextEdit', 'P_20_64': 'TextEdit', 'P_65oltre': 'TextEdit', 'P_Femmine': 'TextEdit', 'P_Maschi': 'TextEdit', 'Fam_1': 'TextEdit', 'Fam_2': 'TextEdit', 'Fam_3oltre': 'TextEdit', 'Fam_numero': 'TextEdit', 'Diabete': 'TextEdit', 'Ipertensione': 'TextEdit', 'Altre_comorbidità': 'TextEdit', 'Casi_COVID': 'TextEdit', 'Casi_COVID_wave1': 'TextEdit', 'Casi_COVID_wave2': 'TextEdit', 'Casi_COVID_wave3': 'TextEdit', 'Casi_COVID_no_wave': 'TextEdit', 'cases_more_people': 'TextEdit', 'prop_0_19': 'TextEdit', 'prop_20_64': 'TextEdit', 'prop_65oltre': 'TextEdit', 'prop_Femmine': 'TextEdit', 'prop_Maschi': 'TextEdit', 'prop_Fam1': 'TextEdit', 'prop_Fam2': 'TextEdit', 'prop_Fam3oltre': 'TextEdit', 'prop_Diabete': 'TextEdit', 'prop_Ipertensione': 'TextEdit', 'prop_Altre_Comorbidità': 'TextEdit', 'prop_Comorbidità': 'TextEdit', 'id.area': 'TextEdit', 'total_casi': 'TextEdit', 'IR_obs': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_DomiciledPopulation.set('fieldImages', {'codice_are': 'TextEdit', 'area': 'TextEdit', 'COMUNE': 'TextEdit', 'CODCOM': 'TextEdit', 'PROCOM': 'TextEdit', 'popolazion': 'TextEdit', 'Raggrupp a': 'TextEdit', 'popolazi_1': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_ObservedIR.set('fieldImages', {'fid': 'TextEdit', 'nome_area': 'TextEdit', 'codice_area': 'TextEdit', 'area': 'TextEdit', 'COMUNE': 'TextEdit', 'CODCOM': 'TextEdit', 'PROCOM': 'TextEdit', 'Pop': 'TextEdit', 'grouped_area': 'TextEdit', 'PopDom': 'TextEdit', 'P_Tot': 'TextEdit', 'P_0_19': 'TextEdit', 'P_20_64': 'TextEdit', 'P_65oltre': 'TextEdit', 'P_Femmine': 'TextEdit', 'P_Maschi': 'TextEdit', 'Fam_1': 'TextEdit', 'Fam_2': 'TextEdit', 'Fam_3oltre': 'TextEdit', 'Fam_numero': 'TextEdit', 'Diabete': 'TextEdit', 'Ipertensione': 'TextEdit', 'Altre_comorbidità': 'TextEdit', 'Casi_COVID': 'TextEdit', 'Casi_COVID_wave1': 'TextEdit', 'Casi_COVID_wave2': 'TextEdit', 'Casi_COVID_wave3': 'TextEdit', 'Casi_COVID_no_wave': 'TextEdit', 'cases_more_people': 'TextEdit', 'prop_0_19': 'TextEdit', 'prop_20_64': 'TextEdit', 'prop_65oltre': 'TextEdit', 'prop_Femmine': 'TextEdit', 'prop_Maschi': 'TextEdit', 'prop_Fam1': 'TextEdit', 'prop_Fam2': 'TextEdit', 'prop_Fam3oltre': 'TextEdit', 'prop_Diabete': 'TextEdit', 'prop_Ipertensione': 'TextEdit', 'prop_Altre_Comorbidità': 'TextEdit', 'prop_Comorbidità': 'TextEdit', 'id.area': 'TextEdit', 'total_casi': 'TextEdit', 'IR_obs': 'TextEdit', 'pop_density': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Municipalities.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'ISTAT': 'TextEdit', 'NOME_C': 'TextEdit', 'Shape_Area': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_AggregatedAreas.set('fieldImages', {'fid': 'TextEdit', 'Raggrupp a': 'TextEdit', 'Pop': 'TextEdit', 'PopDom': 'TextEdit', 'P_Tot': 'TextEdit', 'P_Femmine': 'TextEdit', 'P_Maschi': 'TextEdit', 'P_0_19': 'TextEdit', 'P_20_64': 'TextEdit', 'P_65oltre': 'TextEdit', 'Fam_1': 'TextEdit', 'Fam_2': 'TextEdit', 'Fam_3oltre': 'TextEdit', 'Fam_numero': 'TextEdit', 'Diabete': 'TextEdit', 'Ipertensione': 'TextEdit', 'Altre_comorbidità': 'TextEdit', 'Casi_COVID': 'TextEdit', 'Casi_wave1': 'TextEdit', 'Casi_wave2': 'TextEdit', 'Casi_wave3': 'TextEdit', 'Casi_no_wave': 'TextEdit', 'IR': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_SmallAreas.set('fieldImages', {'codice_are': 'TextEdit', 'area': 'TextEdit', 'COMUNE': 'TextEdit', 'CODCOM': 'TextEdit', 'PROCOM': 'TextEdit', 'popolazion': 'TextEdit', 'Raggrupp a': 'TextEdit', 'popolazi_1': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_SewerNetwork.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FONTE': 'Range', 'NOTE': 'Range', 'ULTIMO_AGG': 'TextEdit', 'TIPOLOGIA': 'Range', 'ID_GEST': 'Range', 'COD_RETE': 'TextEdit', 'ID': 'Range', 'SISTEMA_FO': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'SIGLA': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_WastewaterTreatmentPlant.set('fieldImages', {'fid': 'TextEdit', 'COD_PROV': 'TextEdit', 'NOME_PROV': 'TextEdit', 'COD_DEP': 'TextEdit', 'DEN_DEP': 'TextEdit', 'COD_AGG': 'TextEdit', 'NOME_AGG': 'TextEdit', 'GESTORE': 'TextEdit', 'ISTAT_COD': 'TextEdit', 'COMUNE': 'TextEdit', 'TIPO_DEP': 'TextEdit', 'DESCR_TIPO': 'TextEdit', 'LIV_DEP': 'TextEdit', 'AE_PROG': 'Range', 'N__CIS_WFD': 'TextEdit', 'COD_CIS': 'TextEdit', 'N_CIS': 'TextEdit', 'AE_TOT': 'Range', 'X_E32': 'Range', 'Y_E32': 'Range', 'SIGLA': 'TextEdit', 'CLASSE_AGG': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_GeometricCentroids.set('fieldImages', {'fid': 'TextEdit', 'codice_are': 'TextEdit', 'area': 'TextEdit', 'COMUNE': 'TextEdit', 'CODCOM': 'TextEdit', 'PROCOM': 'TextEdit', 'popolazion': 'TextEdit', 'Raggrupp a': 'TextEdit', 'popolazi_1': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_LandusebasedCentroids.set('fieldImages', {'fid': 'TextEdit', 'codice_area': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_RiskCoefficientsWi.set('fieldLabels', {'fid': 'no label', 'nome_area': 'inline label - visible with data', 'codice_area': 'no label', 'area': 'no label', 'COMUNE': 'inline label - visible with data', 'CODCOM': 'no label', 'PROCOM': 'no label', 'Pop': 'no label', 'grouped_area': 'no label', 'PopDom': 'no label', 'P_Tot': 'no label', 'P_0_19': 'no label', 'P_20_64': 'no label', 'P_65oltre': 'no label', 'P_Femmine': 'no label', 'P_Maschi': 'no label', 'Fam_1': 'no label', 'Fam_2': 'no label', 'Fam_3oltre': 'no label', 'Fam_numero': 'no label', 'Diabete': 'no label', 'Ipertensione': 'no label', 'Altre_comorbidità': 'no label', 'Casi_COVID': 'no label', 'Casi_COVID_wave1': 'no label', 'Casi_COVID_wave2': 'no label', 'Casi_COVID_wave3': 'no label', 'Casi_COVID_no_wave': 'no label', 'cases_more_people': 'no label', 'prop_0_19': 'no label', 'prop_20_64': 'no label', 'prop_65oltre': 'no label', 'prop_Femmine': 'no label', 'prop_Maschi': 'no label', 'prop_Fam1': 'no label', 'prop_Fam2': 'no label', 'prop_Fam3oltre': 'no label', 'prop_Diabete': 'no label', 'prop_Ipertensione': 'no label', 'prop_Altre_Comorbidità': 'no label', 'prop_Comorbidità': 'no label', 'id.area': 'no label', 'total_casi': 'no label', 'IR_obs': 'no label', 'pop_density': 'no label', 'Wi_values_webapp_Wi_median': 'no label', 'Wi_values_webapp_Wi': 'inline label - visible with data', });
lyr_PosteriorMeanPrecisionParameter.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID': 'hidden field', 'ISTAT': 'hidden field', 'NOME_C': 'inline label - visible with data', 'Shape_Area': 'hidden field', 'Tau': 'no label', });
lyr_IRt.set('fieldLabels', {'fid': 'hidden field', 'nome_area': 'inline label - always visible', 'codice_area': 'hidden field', 'area': 'hidden field', 'COMUNE': 'hidden field', 'CODCOM': 'hidden field', 'PROCOM': 'hidden field', 'Pop': 'hidden field', 'grouped_area': 'hidden field', 'paths_plots_plots': 'inline label - always visible', });
lyr_PopulationDensityresidentsm2.set('fieldLabels', {'fid': 'no label', 'nome_area': 'no label', 'codice_area': 'no label', 'area': 'no label', 'COMUNE': 'no label', 'CODCOM': 'no label', 'PROCOM': 'no label', 'Pop': 'no label', 'grouped_area': 'no label', 'PopDom': 'no label', 'P_Tot': 'no label', 'P_0_19': 'no label', 'P_20_64': 'no label', 'P_65oltre': 'no label', 'P_Femmine': 'no label', 'P_Maschi': 'no label', 'Fam_1': 'no label', 'Fam_2': 'no label', 'Fam_3oltre': 'no label', 'Fam_numero': 'no label', 'Diabete': 'no label', 'Ipertensione': 'no label', 'Altre_comorbidità': 'no label', 'Casi_COVID': 'no label', 'Casi_COVID_wave1': 'no label', 'Casi_COVID_wave2': 'no label', 'Casi_COVID_wave3': 'no label', 'Casi_COVID_no_wave': 'no label', 'cases_more_people': 'no label', 'prop_0_19': 'no label', 'prop_20_64': 'no label', 'prop_65oltre': 'no label', 'prop_Femmine': 'no label', 'prop_Maschi': 'no label', 'prop_Fam1': 'no label', 'prop_Fam2': 'no label', 'prop_Fam3oltre': 'no label', 'prop_Diabete': 'no label', 'prop_Ipertensione': 'no label', 'prop_Altre_Comorbidità': 'no label', 'prop_Comorbidità': 'no label', 'id.area': 'no label', 'total_casi': 'no label', 'IR_obs': 'no label', 'pop_density': 'no label', });
lyr_ResidentswithOtherComorbidities.set('fieldLabels', {'fid': 'no label', 'nome_area': 'no label', 'codice_area': 'no label', 'area': 'no label', 'COMUNE': 'no label', 'CODCOM': 'no label', 'PROCOM': 'no label', 'Pop': 'no label', 'grouped_area': 'no label', 'PopDom': 'no label', 'P_Tot': 'no label', 'P_0_19': 'no label', 'P_20_64': 'no label', 'P_65oltre': 'no label', 'P_Femmine': 'no label', 'P_Maschi': 'no label', 'Fam_1': 'no label', 'Fam_2': 'no label', 'Fam_3oltre': 'no label', 'Fam_numero': 'no label', 'Diabete': 'no label', 'Ipertensione': 'no label', 'Altre_comorbidità': 'no label', 'Casi_COVID': 'no label', 'Casi_COVID_wave1': 'no label', 'Casi_COVID_wave2': 'no label', 'Casi_COVID_wave3': 'no label', 'Casi_COVID_no_wave': 'no label', 'cases_more_people': 'no label', 'prop_0_19': 'no label', 'prop_20_64': 'no label', 'prop_65oltre': 'no label', 'prop_Femmine': 'no label', 'prop_Maschi': 'no label', 'prop_Fam1': 'no label', 'prop_Fam2': 'no label', 'prop_Fam3oltre': 'no label', 'prop_Diabete': 'no label', 'prop_Ipertensione': 'no label', 'prop_Altre_Comorbidità': 'no label', 'prop_Comorbidità': 'no label', 'id.area': 'no label', 'total_casi': 'no label', 'IR_obs': 'no label', });
lyr_ResidentswithHypertension.set('fieldLabels', {'fid': 'no label', 'nome_area': 'no label', 'codice_area': 'no label', 'area': 'no label', 'COMUNE': 'no label', 'CODCOM': 'no label', 'PROCOM': 'no label', 'Pop': 'no label', 'grouped_area': 'no label', 'PopDom': 'no label', 'P_Tot': 'no label', 'P_0_19': 'no label', 'P_20_64': 'no label', 'P_65oltre': 'no label', 'P_Femmine': 'no label', 'P_Maschi': 'no label', 'Fam_1': 'no label', 'Fam_2': 'no label', 'Fam_3oltre': 'no label', 'Fam_numero': 'no label', 'Diabete': 'no label', 'Ipertensione': 'no label', 'Altre_comorbidità': 'no label', 'Casi_COVID': 'no label', 'Casi_COVID_wave1': 'no label', 'Casi_COVID_wave2': 'no label', 'Casi_COVID_wave3': 'no label', 'Casi_COVID_no_wave': 'no label', 'cases_more_people': 'no label', 'prop_0_19': 'no label', 'prop_20_64': 'no label', 'prop_65oltre': 'no label', 'prop_Femmine': 'no label', 'prop_Maschi': 'no label', 'prop_Fam1': 'no label', 'prop_Fam2': 'no label', 'prop_Fam3oltre': 'no label', 'prop_Diabete': 'no label', 'prop_Ipertensione': 'no label', 'prop_Altre_Comorbidità': 'no label', 'prop_Comorbidità': 'no label', 'id.area': 'no label', 'total_casi': 'no label', 'IR_obs': 'no label', });
lyr_ResidentswithDiabetes.set('fieldLabels', {'fid': 'no label', 'nome_area': 'no label', 'codice_area': 'no label', 'area': 'no label', 'COMUNE': 'no label', 'CODCOM': 'no label', 'PROCOM': 'no label', 'Pop': 'no label', 'grouped_area': 'no label', 'PopDom': 'no label', 'P_Tot': 'no label', 'P_0_19': 'no label', 'P_20_64': 'no label', 'P_65oltre': 'no label', 'P_Femmine': 'no label', 'P_Maschi': 'no label', 'Fam_1': 'no label', 'Fam_2': 'no label', 'Fam_3oltre': 'no label', 'Fam_numero': 'no label', 'Diabete': 'no label', 'Ipertensione': 'no label', 'Altre_comorbidità': 'no label', 'Casi_COVID': 'no label', 'Casi_COVID_wave1': 'no label', 'Casi_COVID_wave2': 'no label', 'Casi_COVID_wave3': 'no label', 'Casi_COVID_no_wave': 'no label', 'cases_more_people': 'no label', 'prop_0_19': 'no label', 'prop_20_64': 'no label', 'prop_65oltre': 'no label', 'prop_Femmine': 'no label', 'prop_Maschi': 'no label', 'prop_Fam1': 'no label', 'prop_Fam2': 'no label', 'prop_Fam3oltre': 'no label', 'prop_Diabete': 'no label', 'prop_Ipertensione': 'no label', 'prop_Altre_Comorbidità': 'no label', 'prop_Comorbidità': 'no label', 'id.area': 'no label', 'total_casi': 'no label', 'IR_obs': 'no label', });
lyr_Familieswith3components.set('fieldLabels', {'fid': 'no label', 'nome_area': 'no label', 'codice_area': 'no label', 'area': 'no label', 'COMUNE': 'no label', 'CODCOM': 'no label', 'PROCOM': 'no label', 'Pop': 'no label', 'grouped_area': 'no label', 'PopDom': 'no label', 'P_Tot': 'no label', 'P_0_19': 'no label', 'P_20_64': 'no label', 'P_65oltre': 'no label', 'P_Femmine': 'no label', 'P_Maschi': 'no label', 'Fam_1': 'no label', 'Fam_2': 'no label', 'Fam_3oltre': 'no label', 'Fam_numero': 'no label', 'Diabete': 'no label', 'Ipertensione': 'no label', 'Altre_comorbidità': 'no label', 'Casi_COVID': 'no label', 'Casi_COVID_wave1': 'no label', 'Casi_COVID_wave2': 'no label', 'Casi_COVID_wave3': 'no label', 'Casi_COVID_no_wave': 'no label', 'cases_more_people': 'no label', 'prop_0_19': 'no label', 'prop_20_64': 'no label', 'prop_65oltre': 'no label', 'prop_Femmine': 'no label', 'prop_Maschi': 'no label', 'prop_Fam1': 'no label', 'prop_Fam2': 'no label', 'prop_Fam3oltre': 'no label', 'prop_Diabete': 'no label', 'prop_Ipertensione': 'no label', 'prop_Altre_Comorbidità': 'no label', 'prop_Comorbidità': 'no label', 'id.area': 'no label', 'total_casi': 'no label', 'IR_obs': 'no label', });
lyr_Familieswith2components.set('fieldLabels', {'fid': 'no label', 'nome_area': 'no label', 'codice_area': 'no label', 'area': 'no label', 'COMUNE': 'no label', 'CODCOM': 'no label', 'PROCOM': 'no label', 'Pop': 'no label', 'grouped_area': 'no label', 'PopDom': 'no label', 'P_Tot': 'no label', 'P_0_19': 'no label', 'P_20_64': 'no label', 'P_65oltre': 'no label', 'P_Femmine': 'no label', 'P_Maschi': 'no label', 'Fam_1': 'no label', 'Fam_2': 'no label', 'Fam_3oltre': 'no label', 'Fam_numero': 'no label', 'Diabete': 'no label', 'Ipertensione': 'no label', 'Altre_comorbidità': 'no label', 'Casi_COVID': 'no label', 'Casi_COVID_wave1': 'no label', 'Casi_COVID_wave2': 'no label', 'Casi_COVID_wave3': 'no label', 'Casi_COVID_no_wave': 'no label', 'cases_more_people': 'no label', 'prop_0_19': 'no label', 'prop_20_64': 'no label', 'prop_65oltre': 'no label', 'prop_Femmine': 'no label', 'prop_Maschi': 'no label', 'prop_Fam1': 'no label', 'prop_Fam2': 'no label', 'prop_Fam3oltre': 'no label', 'prop_Diabete': 'no label', 'prop_Ipertensione': 'no label', 'prop_Altre_Comorbidità': 'no label', 'prop_Comorbidità': 'no label', 'id.area': 'no label', 'total_casi': 'no label', 'IR_obs': 'no label', });
lyr_Population65.set('fieldLabels', {'fid': 'no label', 'nome_area': 'no label', 'codice_area': 'no label', 'area': 'no label', 'COMUNE': 'no label', 'CODCOM': 'no label', 'PROCOM': 'no label', 'Pop': 'no label', 'grouped_area': 'no label', 'PopDom': 'no label', 'P_Tot': 'no label', 'P_0_19': 'no label', 'P_20_64': 'no label', 'P_65oltre': 'no label', 'P_Femmine': 'no label', 'P_Maschi': 'no label', 'Fam_1': 'no label', 'Fam_2': 'no label', 'Fam_3oltre': 'no label', 'Fam_numero': 'no label', 'Diabete': 'no label', 'Ipertensione': 'no label', 'Altre_comorbidità': 'no label', 'Casi_COVID': 'no label', 'Casi_COVID_wave1': 'no label', 'Casi_COVID_wave2': 'no label', 'Casi_COVID_wave3': 'no label', 'Casi_COVID_no_wave': 'no label', 'cases_more_people': 'no label', 'prop_0_19': 'no label', 'prop_20_64': 'no label', 'prop_65oltre': 'no label', 'prop_Femmine': 'no label', 'prop_Maschi': 'no label', 'prop_Fam1': 'no label', 'prop_Fam2': 'no label', 'prop_Fam3oltre': 'no label', 'prop_Diabete': 'no label', 'prop_Ipertensione': 'no label', 'prop_Altre_Comorbidità': 'no label', 'prop_Comorbidità': 'no label', 'id.area': 'no label', 'total_casi': 'no label', 'IR_obs': 'no label', });
lyr_Population2064.set('fieldLabels', {'fid': 'no label', 'nome_area': 'no label', 'codice_area': 'no label', 'area': 'no label', 'COMUNE': 'no label', 'CODCOM': 'no label', 'PROCOM': 'no label', 'Pop': 'no label', 'grouped_area': 'no label', 'PopDom': 'no label', 'P_Tot': 'no label', 'P_0_19': 'no label', 'P_20_64': 'no label', 'P_65oltre': 'no label', 'P_Femmine': 'no label', 'P_Maschi': 'no label', 'Fam_1': 'no label', 'Fam_2': 'no label', 'Fam_3oltre': 'no label', 'Fam_numero': 'no label', 'Diabete': 'no label', 'Ipertensione': 'no label', 'Altre_comorbidità': 'no label', 'Casi_COVID': 'no label', 'Casi_COVID_wave1': 'no label', 'Casi_COVID_wave2': 'no label', 'Casi_COVID_wave3': 'no label', 'Casi_COVID_no_wave': 'no label', 'cases_more_people': 'no label', 'prop_0_19': 'no label', 'prop_20_64': 'no label', 'prop_65oltre': 'no label', 'prop_Femmine': 'no label', 'prop_Maschi': 'no label', 'prop_Fam1': 'no label', 'prop_Fam2': 'no label', 'prop_Fam3oltre': 'no label', 'prop_Diabete': 'no label', 'prop_Ipertensione': 'no label', 'prop_Altre_Comorbidità': 'no label', 'prop_Comorbidità': 'no label', 'id.area': 'no label', 'total_casi': 'no label', 'IR_obs': 'no label', });
lyr_MalePopulation.set('fieldLabels', {'fid': 'no label', 'nome_area': 'no label', 'codice_area': 'no label', 'area': 'no label', 'COMUNE': 'no label', 'CODCOM': 'no label', 'PROCOM': 'no label', 'Pop': 'no label', 'grouped_area': 'no label', 'PopDom': 'no label', 'P_Tot': 'no label', 'P_0_19': 'no label', 'P_20_64': 'no label', 'P_65oltre': 'no label', 'P_Femmine': 'no label', 'P_Maschi': 'no label', 'Fam_1': 'no label', 'Fam_2': 'no label', 'Fam_3oltre': 'no label', 'Fam_numero': 'no label', 'Diabete': 'no label', 'Ipertensione': 'no label', 'Altre_comorbidità': 'no label', 'Casi_COVID': 'no label', 'Casi_COVID_wave1': 'no label', 'Casi_COVID_wave2': 'no label', 'Casi_COVID_wave3': 'no label', 'Casi_COVID_no_wave': 'no label', 'cases_more_people': 'no label', 'prop_0_19': 'no label', 'prop_20_64': 'no label', 'prop_65oltre': 'no label', 'prop_Femmine': 'no label', 'prop_Maschi': 'no label', 'prop_Fam1': 'no label', 'prop_Fam2': 'no label', 'prop_Fam3oltre': 'no label', 'prop_Diabete': 'no label', 'prop_Ipertensione': 'no label', 'prop_Altre_Comorbidità': 'no label', 'prop_Comorbidità': 'no label', 'id.area': 'no label', 'total_casi': 'no label', 'IR_obs': 'no label', });
lyr_DomiciledPopulation.set('fieldLabels', {'codice_are': 'no label', 'area': 'no label', 'COMUNE': 'no label', 'CODCOM': 'no label', 'PROCOM': 'no label', 'popolazion': 'no label', 'Raggrupp a': 'no label', 'popolazi_1': 'no label', });
lyr_ObservedIR.set('fieldLabels', {'fid': 'no label', 'nome_area': 'no label', 'codice_area': 'no label', 'area': 'no label', 'COMUNE': 'no label', 'CODCOM': 'no label', 'PROCOM': 'no label', 'Pop': 'no label', 'grouped_area': 'no label', 'PopDom': 'no label', 'P_Tot': 'no label', 'P_0_19': 'no label', 'P_20_64': 'no label', 'P_65oltre': 'no label', 'P_Femmine': 'no label', 'P_Maschi': 'no label', 'Fam_1': 'no label', 'Fam_2': 'no label', 'Fam_3oltre': 'no label', 'Fam_numero': 'no label', 'Diabete': 'no label', 'Ipertensione': 'no label', 'Altre_comorbidità': 'no label', 'Casi_COVID': 'no label', 'Casi_COVID_wave1': 'no label', 'Casi_COVID_wave2': 'no label', 'Casi_COVID_wave3': 'no label', 'Casi_COVID_no_wave': 'no label', 'cases_more_people': 'no label', 'prop_0_19': 'no label', 'prop_20_64': 'no label', 'prop_65oltre': 'no label', 'prop_Femmine': 'no label', 'prop_Maschi': 'no label', 'prop_Fam1': 'no label', 'prop_Fam2': 'no label', 'prop_Fam3oltre': 'no label', 'prop_Diabete': 'no label', 'prop_Ipertensione': 'no label', 'prop_Altre_Comorbidità': 'no label', 'prop_Comorbidità': 'no label', 'id.area': 'no label', 'total_casi': 'no label', 'IR_obs': 'no label', 'pop_density': 'no label', });
lyr_Municipalities.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID': 'hidden field', 'ISTAT': 'hidden field', 'NOME_C': 'inline label - visible with data', 'Shape_Area': 'hidden field', });
lyr_AggregatedAreas.set('fieldLabels', {'fid': 'hidden field', 'Raggrupp a': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'PopDom': 'hidden field', 'P_Tot': 'hidden field', 'P_Femmine': 'hidden field', 'P_Maschi': 'hidden field', 'P_0_19': 'hidden field', 'P_20_64': 'hidden field', 'P_65oltre': 'hidden field', 'Fam_1': 'hidden field', 'Fam_2': 'hidden field', 'Fam_3oltre': 'hidden field', 'Fam_numero': 'hidden field', 'Diabete': 'hidden field', 'Ipertensione': 'hidden field', 'Altre_comorbidità': 'hidden field', 'Casi_COVID': 'hidden field', 'Casi_wave1': 'hidden field', 'Casi_wave2': 'hidden field', 'Casi_wave3': 'hidden field', 'Casi_no_wave': 'hidden field', 'IR': 'hidden field', });
lyr_SmallAreas.set('fieldLabels', {'codice_are': 'hidden field', 'area': 'inline label - visible with data', 'COMUNE': 'inline label - visible with data', 'CODCOM': 'hidden field', 'PROCOM': 'hidden field', 'popolazion': 'hidden field', 'Raggrupp a': 'inline label - visible with data', 'popolazi_1': 'hidden field', });
lyr_SewerNetwork.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FONTE': 'no label', 'NOTE': 'no label', 'ULTIMO_AGG': 'no label', 'TIPOLOGIA': 'no label', 'ID_GEST': 'no label', 'COD_RETE': 'no label', 'ID': 'no label', 'SISTEMA_FO': 'no label', 'SHAPE_LEN': 'no label', 'PROVINCIA': 'no label', 'SIGLA': 'no label', });
lyr_WastewaterTreatmentPlant.set('fieldLabels', {'fid': 'no label', 'COD_PROV': 'no label', 'NOME_PROV': 'no label', 'COD_DEP': 'no label', 'DEN_DEP': 'no label', 'COD_AGG': 'no label', 'NOME_AGG': 'no label', 'GESTORE': 'no label', 'ISTAT_COD': 'no label', 'COMUNE': 'no label', 'TIPO_DEP': 'no label', 'DESCR_TIPO': 'no label', 'LIV_DEP': 'no label', 'AE_PROG': 'no label', 'N__CIS_WFD': 'no label', 'COD_CIS': 'no label', 'N_CIS': 'no label', 'AE_TOT': 'no label', 'X_E32': 'no label', 'Y_E32': 'no label', 'SIGLA': 'no label', 'CLASSE_AGG': 'no label', });
lyr_GeometricCentroids.set('fieldLabels', {'fid': 'no label', 'codice_are': 'no label', 'area': 'no label', 'COMUNE': 'no label', 'CODCOM': 'no label', 'PROCOM': 'no label', 'popolazion': 'no label', 'Raggrupp a': 'no label', 'popolazi_1': 'no label', });
lyr_LandusebasedCentroids.set('fieldLabels', {'fid': 'no label', 'codice_area': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_LandusebasedCentroids.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

window.layersLoadedFlag = true;
const layersLoaded = new Event('layersLoaded');
document.dispatchEvent(layersLoaded);
hidden
var wms_layers = [];

var lyr_OSMStandard = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a> &nbsp&nbsp ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
        
var format_Smallareas = new ol.format.GeoJSON();
var features_Smallareas = format_Smallareas.readFeatures(json_Smallareas, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Smallareas = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Smallareas.png" /> <b>Small areas</b>'
    });
var lyr_Smallareas = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Smallareas, 
    style: style_Smallareas,
    permalink: "Smallareas",
    popuplayertitle: 'Small areas',
    creationdate: '2025-07-09 00:40:03',
    interactive: true,
    title: '<img src="styles/legend/Smallareas.png" /> Small areas'
    });
var featureCounter_Smallareas = 1;
jsonSource_Smallareas.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Smallareas++);
    feature.set("layerObject", lyr_Smallareas);
});        
jsonSource_Smallareas.addFeatures(features_Smallareas);

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
    creationdate: '2025-07-09 00:40:03',
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
    creationdate: '2025-07-09 00:40:03',
    interactive: true,
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

var format_Wastewatertreatmentplant = new ol.format.GeoJSON();
var features_Wastewatertreatmentplant = format_Wastewatertreatmentplant.readFeatures(json_Wastewatertreatmentplant, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wastewatertreatmentplant = new ol.source.Vector({ })
cluster_Wastewatertreatmentplant = new ol.source.Cluster({
        distance: 30,
        source: jsonSource_Wastewatertreatmentplant, 
    attributions: '<a class="legend"><img src="styles/legend/Wastewatertreatmentplant.png" /> <b>Wastewater treatment plant</b>'
    });
var lyr_Wastewatertreatmentplant = new ol.layer.AnimatedCluster({
    declutter: false,
    source: cluster_Wastewatertreatmentplant, 
    style: function(feature, resolution) {
        return clusterStyle(feature, resolution, style_Wastewatertreatmentplant);
    },
    permalink: "Wastewatertreatmentplant",
    popuplayertitle: 'Wastewater treatment plant',
    creationdate: '2025-07-09 00:40:03',
    interactive: false,
    title: '<img src="styles/legend/Wastewatertreatmentplant.png" /> Wastewater treatment plant'
    });
var featureCounter_Wastewatertreatmentplant = 1;
jsonSource_Wastewatertreatmentplant.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Wastewatertreatmentplant++);
    feature.set("layerObject", lyr_Wastewatertreatmentplant);
});        
jsonSource_Wastewatertreatmentplant.addFeatures(features_Wastewatertreatmentplant);


lyr_OSMStandard.setVisible(true);lyr_Smallareas.setVisible(true);lyr_SewerNetwork.setVisible(false);lyr_Municipalities.setVisible(false);lyr_Wastewatertreatmentplant.setVisible(true);
var layersList = [lyr_OSMStandard,lyr_Smallareas,lyr_SewerNetwork,lyr_Municipalities,lyr_Wastewatertreatmentplant];
lyr_Smallareas.set('fieldAliases', {'codice_are': 'codice_are', 'area': 'area', 'COMUNE': 'COMUNE', 'CODCOM': 'CODCOM', 'PROCOM': 'PROCOM', 'popolazion': 'popolazion', 'Raggrupp a': 'Raggrupp a', 'popolazi_1': 'popolazi_1', });
lyr_SewerNetwork.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FONTE': 'FONTE', 'NOTE': 'NOTE', 'ULTIMO_AGG': 'ULTIMO_AGG', 'TIPOLOGIA': 'TIPOLOGIA', 'ID_GEST': 'ID_GEST', 'COD_RETE': 'COD_RETE', 'ID': 'ID', 'SISTEMA_FO': 'SISTEMA_FO', 'SHAPE_LEN': 'SHAPE_LEN', 'PROVINCIA': 'PROVINCIA', 'SIGLA': 'SIGLA', });
lyr_Municipalities.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ISTAT': 'ISTAT', 'NOME_C': 'NOME_C', 'Shape_Area': 'Shape_Area', });
lyr_Wastewatertreatmentplant.set('fieldAliases', {'fid': 'fid', 'COD_PROV': 'COD_PROV', 'NOME_PROV': 'NOME_PROV', 'COD_DEP': 'COD_DEP', 'DEN_DEP': 'DEN_DEP', 'COD_AGG': 'COD_AGG', 'NOME_AGG': 'NOME_AGG', 'GESTORE': 'GESTORE', 'ISTAT_COD': 'ISTAT_COD', 'COMUNE': 'COMUNE', 'TIPO_DEP': 'TIPO_DEP', 'DESCR_TIPO': 'DESCR_TIPO', 'LIV_DEP': 'LIV_DEP', 'AE_PROG': 'AE_PROG', 'N__CIS_WFD': 'N__CIS_WFD', 'COD_CIS': 'COD_CIS', 'N_CIS': 'N_CIS', 'AE_TOT': 'AE_TOT', 'X_E32': 'X_E32', 'Y_E32': 'Y_E32', 'SIGLA': 'SIGLA', 'CLASSE_AGG': 'CLASSE_AGG', });
lyr_Smallareas.set('fieldImages', {'codice_are': 'TextEdit', 'area': 'TextEdit', 'COMUNE': 'TextEdit', 'CODCOM': 'TextEdit', 'PROCOM': 'TextEdit', 'popolazion': 'TextEdit', 'Raggrupp a': 'TextEdit', 'popolazi_1': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_SewerNetwork.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FONTE': 'Range', 'NOTE': 'Range', 'ULTIMO_AGG': 'TextEdit', 'TIPOLOGIA': 'Range', 'ID_GEST': 'Range', 'COD_RETE': 'TextEdit', 'ID': 'Range', 'SISTEMA_FO': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'SIGLA': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Municipalities.set('fieldImages', {'fid': '', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'ISTAT': 'TextEdit', 'NOME_C': 'TextEdit', 'Shape_Area': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Wastewatertreatmentplant.set('fieldImages', {'fid': 'TextEdit', 'COD_PROV': 'TextEdit', 'NOME_PROV': 'TextEdit', 'COD_DEP': 'TextEdit', 'DEN_DEP': 'TextEdit', 'COD_AGG': 'TextEdit', 'NOME_AGG': 'TextEdit', 'GESTORE': 'TextEdit', 'ISTAT_COD': 'TextEdit', 'COMUNE': 'TextEdit', 'TIPO_DEP': 'TextEdit', 'DESCR_TIPO': 'TextEdit', 'LIV_DEP': 'TextEdit', 'AE_PROG': 'Range', 'N__CIS_WFD': 'TextEdit', 'COD_CIS': 'TextEdit', 'N_CIS': 'TextEdit', 'AE_TOT': 'Range', 'X_E32': 'Range', 'Y_E32': 'Range', 'SIGLA': 'TextEdit', 'CLASSE_AGG': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Smallareas.set('fieldLabels', {'codice_are': 'hidden field', 'area': 'header label - visible with data', 'COMUNE': 'header label - visible with data', 'CODCOM': 'hidden field', 'PROCOM': 'hidden field', 'popolazion': 'hidden field', 'Raggrupp a': 'hidden field', 'popolazi_1': 'hidden field', });
lyr_SewerNetwork.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FONTE': 'no label', 'NOTE': 'no label', 'ULTIMO_AGG': 'no label', 'TIPOLOGIA': 'no label', 'ID_GEST': 'no label', 'COD_RETE': 'no label', 'ID': 'no label', 'SISTEMA_FO': 'no label', 'SHAPE_LEN': 'no label', 'PROVINCIA': 'no label', 'SIGLA': 'no label', });
lyr_Municipalities.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID': 'hidden field', 'ISTAT': 'hidden field', 'NOME_C': 'header label - visible with data', 'Shape_Area': 'hidden field', });
lyr_Wastewatertreatmentplant.set('fieldLabels', {'fid': 'no label', 'COD_PROV': 'no label', 'NOME_PROV': 'no label', 'COD_DEP': 'no label', 'DEN_DEP': 'no label', 'COD_AGG': 'no label', 'NOME_AGG': 'no label', 'GESTORE': 'no label', 'ISTAT_COD': 'no label', 'COMUNE': 'no label', 'TIPO_DEP': 'no label', 'DESCR_TIPO': 'no label', 'LIV_DEP': 'no label', 'AE_PROG': 'no label', 'N__CIS_WFD': 'no label', 'COD_CIS': 'no label', 'N_CIS': 'no label', 'AE_TOT': 'no label', 'X_E32': 'no label', 'Y_E32': 'no label', 'SIGLA': 'no label', 'CLASSE_AGG': 'no label', });
lyr_Wastewatertreatmentplant.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

window.layersLoadedFlag = true;
const layersLoaded = new Event('layersLoaded');
document.dispatchEvent(layersLoaded);

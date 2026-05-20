const map = require('./map');
const set_layer_order = require('./setLayerOrder');
const map_funcs = require('./mapFunctions');

function change_map_style(style) {
    // const base_url = 'mapbox://styles/mapbox/';

    // const current_map_layers = map.getStyle().layers;
    // const original_sources = map.getStyle().sources;
    // const current_map_sources = Object.keys(original_sources).map(key => ({
    //     id: key,
    //     ...original_sources[key],
    // }));
    // const user_added_layers = current_map_layers.slice(1).slice(-(current_map_layers.length - window.atticData.original_map_layers));
    // const user_added_sources = current_map_sources.slice(1).slice(-(current_map_sources.length - window.atticData.original_map_sources));

    // if (style == 'satellite') {
    //     map.setStyle(base_url + 'satellite-streets-v12');
    // }

    // map.on('style.load', () => {
    //     for (var i = 0; i < user_added_sources.length; i++) {
    //         console.log(user_added_sources[i].id)
    //         map.addSource(user_added_sources[i].id, user_added_sources[i]);
    //     }
    //     for (var i = 0; i < user_added_layers.length; i++) {
    //         map.addLayer(user_added_layers[i]);
    //     }

    //     set_layer_order();
    // })

    function setRasterTheme(brightnessMin, brightnessMax) {
        if (map.getLayer('osm-tiles')) {
            map.setPaintProperty('osm-tiles', 'raster-brightness-min', brightnessMin);
            map.setPaintProperty('osm-tiles', 'raster-brightness-max', brightnessMax);
        }
    }

    if (style == 'satellite') {
        window.atticData.map_type = 'satellite';
        setRasterTheme(0.45, 0.9);

        if (map.getLayer('satellite-map')) {
            map.removeLayer('satellite-map');
        }
        if (map.getSource('satellite-map')) {
            map.removeSource('satellite-map');
        }
    } else if (style == 'dark') {
        window.atticData.map_type = 'dark';
        setRasterTheme(0.4, 0.8);

        if (map.getLayer('satellite-map')) {
            map.removeLayer('satellite-map');
        }
        if (map.getSource('satellite-map')) {
            map.removeSource('satellite-map');
        }
    } else if (style == 'light') {
        window.atticData.map_type = 'light';
        setRasterTheme(0.8, 1.0);

        if (map.getLayer('satellite-map')) {
            map.removeLayer('satellite-map');
        }
        if (map.getSource('satellite-map')) {
            map.removeSource('satellite-map');
        }
    }

    set_layer_order();
}

module.exports = change_map_style;
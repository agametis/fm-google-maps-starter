import {MarkerClusterer} from "@googlemaps/markerclusterer";

import {createMarkersForMap} from "./helpers.js";

import {getFmProps} from "../fm/fmProps";

let map = null;
let markers = [];
let clusters = [];

const initMap = async () => {
  try {
    const {Map, RenderingType} = await google.maps.importLibrary("maps");
    const {ColorScheme} = await google.maps.importLibrary("core");

    const fmData = await getFmProps();

    if (fmData === null) {
      throw new Error("No data!");
    }

    // Variablen werden aus der JSON-Struktur einzeln auslesen
    const {objects, settings, mapId} = fmData;

    // settings wird aufgelöst
    const {center, zoom, cluster} = settings;

    const mapOptions = {
      zoom,
      center,
      mapId: mapId || "DEMO_MAP_ID",
      renderingType: RenderingType.VECTOR,
      gmpDraggable: true,
      colorScheme: ColorScheme.DARK,
    };

    map = new Map(document.getElementById("map"), mapOptions);

    markers = await createMarkersForMap({objects, settings, map});

    if (cluster) {
      clusters = new MarkerClusterer({markers, map});
    }
  } catch (error) {
    console.log("error", error);
  }
};

initMap();

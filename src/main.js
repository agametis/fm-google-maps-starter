import {Loader} from "@googlemaps/js-api-loader";
import {MarkerClusterer} from "@googlemaps/markerclusterer";

import {createMarkersForMap} from "./helpers.js";

import {getFmProps} from "../fm/fmProps";

let map = null;
let markers = [];
let clusters = [];

const loader = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  version: "weekly",
  language: "de",
});

// load initially the main map library with "google" as namespace
loader.importLibrary("maps").catch((e) => {
  console.error("error", e);
});

const initMap = async () => {
  try {
    const {Map, RenderingType} = await google.maps.importLibrary("maps");
    const {ColorScheme} = await google.maps.importLibrary("core");

    const fmData = await getFmProps();

    if (fmData === null) {
      throw new Error("No data!");
    }

    // Variablen werden aus der JSON-Struktur einzeln auslesen
    const {locations, settings} = fmData;

    // settings wird aufgelöst
    const {center, zoom, cluster, darkMode, mapId} = settings;

    const mapOptions = {
      zoom,
      center,
      mapId: mapId || "DEMO_MAP_ID",
      renderingType: RenderingType.VECTOR,
      colorScheme: darkMode ? ColorScheme.DARK : ColorScheme.LIGHT,
    };

    map = new Map(document.getElementById("map"), mapOptions);

    markers = await createMarkersForMap({locations, settings, map});

    if (cluster) {
      clusters = new MarkerClusterer({markers, map});
    }
  } catch (e) {
    console.error("error", e);
  }
};

initMap();

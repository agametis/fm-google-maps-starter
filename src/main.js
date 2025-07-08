import {Loader} from "@googlemaps/js-api-loader";
import {MarkerClusterer} from "@googlemaps/markerclusterer";

import {createMarkersForMap} from "./helpers.js";

import {getFmProps} from "../fm/fmProps";

let map = null;
let markers = [];
let clusters = [];

const initMap = async () => {
  try {
    const fmData = await getFmProps();

    const { locations, settings } = fmData || {};

    // settings wird aufgelöst
    const { center, zoom, cluster, darkMode, mapId, apiKey } = settings;

    if (!settings || !apiKey) {
      alert("Bitte API-Key eintragen!");
      throw new Error("No API-Key in settings!");
    }

    // Loader erst jetzt initialisieren
    const loader = new Loader({
      apiKey: apiKey,
      version: "weekly",
      language: "de",
    });

    // Lade die Maps-Bibliothek
    await loader.importLibrary("maps");

    const { Map, RenderingType } = await google.maps.importLibrary("maps");
    const { ColorScheme } = await google.maps.importLibrary("core");

    const mapOptions = {
      zoom,
      center,
      mapId: mapId || "DEMO_MAP_ID",
      renderingType: RenderingType.VECTOR,
      colorScheme: darkMode ? ColorScheme.DARK : ColorScheme.LIGHT,
    };

    map = new Map(document.getElementById("map"), mapOptions);

    markers = await createMarkersForMap({ locations, settings, map });

    if (cluster) {
      clusters = new MarkerClusterer({ markers, map });
    }
  } catch (e) {
    console.error("error", e);
  }
};

initMap();

import "@fortawesome/fontawesome-free/js/all";
import {buildInfoWindow} from "./infoWindow.js";

export const createMarkersForMap = async ({objects, settings, map}) => {
  const {InfoWindow} = await google.maps.importLibrary("maps");
  const {AdvancedMarkerElement, PinElement} = await google.maps.importLibrary(
    "marker",
  );

  const defaultPinFillColor = "#EA4335";
  const defaultPinBorderColor = "#C5221F";

  let markerArray = objects.map((object, i) => {
    const icon = document.createElement("div");

    icon.innerHTML = '<i class="fa fa-house fa-lg"></i>';

    const iconHouse = document.createElement("div");

    iconHouse.innerHTML = '<i class="fa fa-house fa-lg"></i>';
    const standardHousePin = new PinElement({
      glyph: iconHouse,
      background: object?.pinFillColor || defaultPinFillColor,
      borderColor: object?.pinBorderColor || defaultPinBorderColor,
      glyphColor: "white",
    });
    const priceTag = document.createElement("div");

    priceTag.className = "price-tag";

    priceTag.textContent = object.gaNummer;
    const marker = new AdvancedMarkerElement({
      map,
      content: settings.priceTag ? priceTag : standardHousePin.element,
      position: object.position,
      title: object.description,
      gmpDraggable: true,
    });

    const infoWindow = new InfoWindow({
      content: buildInfoWindow(object),
      ariaLabel: object.object.art,
    });

    marker.addListener("click", () => {
      infoWindow.open({
        anchor: marker,
        map,
      });
    });

    marker.addListener("dragend", (event) => {
      const position = marker.position;

      console.log(`Pin dropped at: ${position.lat}, ${position.lng}`);
    });

    return marker;
  });

  return markerArray;
};

/**
 * onMovingPin
 */

/**
 * onClinkingPin
 */

/**
 * onUpdateAllPins
 */

/**
 * onUpdateSinglePin
 */

import "@fortawesome/fontawesome-free/js/all";
import { buildSimpleInfoWindow } from "./infoWindow.js";

import FMGofer, { Option } from "fm-gofer";

export const createMarkersForMap = async ({ locations, settings, map }) => {
  const { InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker"
  );

  const defaultPinFillColor = "#EA4335";
  const defaultPinBorderColor = "#C5221F";

  let markerArray = locations.map((location, i) => {
    const icon = document.createElement("div");

    icon.innerHTML = '<i class="fa fa-house fa-lg"></i>';

    const iconHouse = document.createElement("div");

    const pinOptions = {
      glyph: iconHouse,
      background: location?.pinFillColor || defaultPinFillColor,
      borderColor: location?.pinBorderColor || defaultPinBorderColor,
      glyphColor: "white",
    };

    iconHouse.innerHTML = '<i class="fa fa-house fa-lg"></i>';
    const standardHousePin = new PinElement(pinOptions);
    const infoText = document.createElement("div");

    infoText.className = "info-tag";

    // infoText.setAttribute("id", location.id);
    // standardHousePin.element.setAttribute("id", location.id);

    infoText.textContent = location.details.titel;
    const marker = new AdvancedMarkerElement({
      map,
      content: settings.showInfoText ? infoText : standardHousePin.element,
      position: location.position,
      title: location.details.titel,
      gmpDraggable: settings.draggable,
    });

    marker.id = location.id;

    if (settings.showInfoText) {
      const infoWindow = new InfoWindow({
        content: buildSimpleInfoWindow(location.details),
        ariaLabel: location.details.titel,
        title: location.details.titel,
      });

      marker.addListener("click", () => {
        infoWindow.open({
          anchor: marker,
          map,
        });
      });
    } else {
      marker.addListener("click", () => {
        onClinkingPin(marker);
      });
    }
    // hier ist mein Edit
    marker.addListener("dragend", (event) => {
      onMovingPin(marker);
    });

    return marker;
  });

  return markerArray;
};

/**
 * onMovingPin
 */
const onMovingPin = (marker) => {
  const position = marker.position;
  const scriptName = "update_pin_position";
  const param = {
    lat: position.lat,
    lng: position.lng,
  };

  const id = marker.id;

  console.log(`marker id onMovingPin: ${id}`);

  FMGofer.PerformScriptWithOption(scriptName, param, Option.SuspendAndResume);
};

/**
 * onClinkingPin
 */
const onClinkingPin = (marker) => {
  const id = marker.id;

  console.log(`marker id onClickingPin: ${id}`);

  const scriptName = "clicked_pin";
  const param = {
    id: id,
  };

  FMGofer.PerformScriptWithOption(scriptName, param, Option.SuspendAndResume);
};

/**
 * onUpdateAllPins
 */

/**
 * onUpdateSinglePin
 */
const onUpdateSinglePin = (data) => {
  console.log(`onUpdateSinglePin: ${data}`);
};

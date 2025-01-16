import "@fortawesome/fontawesome-free/js/all";
import {buildInfoWindow} from "./infoWindow.js";

import FMGofer, {Option} from "fm-gofer";

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

    priceTag.setAttribute("id", object.id);
    standardHousePin.element.setAttribute("id", object.id);

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

      onClinkingPin(marker);
    });

    marker.addListener("dragend", (event) => {
      const position = marker.position;

      onMovingPin(position);
    });

    return marker;
  });

  return markerArray;
};

/**
 * onMovingPin
 */
const onMovingPin = (position) => {
  const scriptName = "update_pin_position";
  const param = {
    lat: position.lat,
    lng: position.lng,
  };

  FMGofer.PerformScriptWithOption(scriptName, param, Option.SuspendAndResume);
};

/**
 * onClinkingPin
 */
const onClinkingPin = (marker) => {
  const innerDiv = marker.element.childNodes[0].childNodes[0];

  const markerID = innerDiv.getAttribute("id");

  console.log(`Pin marker: ${markerID}`);

  // if ((markerID = "PIN-1")) {
  // }
  // const iconHouse = document.createElement("div");

  // iconHouse.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  // const standardHousePin = new PinElement({
  //   glyph: iconHouse,
  //   glyphColor: "blue",
  // });

  // standardHousePin.element.setAttribute("id", "PIN-1");

  const scriptName = "clicked_pin";
  // const param = {
  //   lat: position.lat,
  //   lng: position.lng,
  // };

  // FMGofer.PerformScriptWithOption(scriptName, param, Option.SuspendAndResume);
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

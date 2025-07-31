# Project Overview

(For the German version, [please scroll down](#projektübersicht-deutsch).)

As of February 21, 2024, Google has deprecated the library for creating "classic markers" `google.maps.Marker` [More Info](https://developers.google.com/maps/deprecations). It is recommended to use the new `google.maps.marker.AdvancedMarkerElement` markers [Migration](https://developers.google.com/maps/documentation/javascript/advanced-markers/migration). Since the loading of the main library has also been revised by Google, this project demonstrates how to prepare Google Maps for a FileMaker project using a node.js project.

## Project Description

This project is aimed at FileMaker developers who want to use Google Maps in their solutions. The integration is designed to be as simple as possible. The entire project is bundled into a single `index.html` file in the `dist` folder. The content of this file can be used directly in a FileMaker field.

With the help of the demo file `GoogleMapsStarter.fmp12`, the project can also be tested directly in FileMaker in developer mode. Among other things, the demo file shows how to pass parameters to the map. In addition, the project not only uses classic pins as markers, but also shows by example how a text-based marker can be generated. Many more examples are also available at [https://developers.google.com/maps/documentation/javascript/examples](https://developers.google.com/maps/documentation/javascript/examples).

## Quick Start

### Installation

The node.js project is based on the Vite.js development environment. The packages are installed with the following command:

```bash
npm install
```

**Important:** You need your own Google Maps API key. You can create this as usual in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials/key) and pass it as a parameter from FileMaker. The Map ID is also created in the [Google Maps Console](https://console.cloud.google.com/apis/dashboard) and can be passed as a parameter from FileMaker.

### Development

The development server is started with the following command:

```bash
npm run dev
```

This usually runs at `http://localhost:5173/`.

### Integration into FileMaker

The project can be loaded directly into FileMaker with the following command:

```bash
npm run deploy-to-fm
```

It should be noted that the correct file name is specified in `fmConfig.js` and the FileMaker script `uploadToFM` from the demo file is present in the target file.

## Features

- Advanced Markers, as recommended by Google
- Markers can be displayed as clusters
- Dark Mode (if not controlled by the Map ID)
- Custom markers with InfoWindow
- Return of ID and position to FileMaker

## License

MIT License. Copyright (c) 2025 Adam Augustin.

---

# Projektübersicht (deutsch)

Google hat zum 21. Februar 2024 die Bibliothek zum Erstellen "klassischer Marker" `google.maps.Marker` abgekündigt [Mehr Infos](https://developers.google.com/maps/deprecations). Es wird empfohlen, die neuen Marker `google.maps.marker.AdvancedMarkerElement` zu verwenden [Migration](https://developers.google.com/maps/documentation/javascript/advanced-markers/migration). Da das Laden der Hauptbibliothek inzwischen  von Google ebenfalls überarbeitet wurde, zeigt dieses Projekt, wie man die Google Maps Karten für ein FileMaker-Projekt mit Hilfe eines node.js-Projektes aufbereiten kann.

## Projektbeschreibung

Das Projekt richtet sich an FileMaker-Entwickler, die Karten von Google in ihren Lösungen einsetzen möchten. Die Integration ist denkbar einfach gestaltet. Das gesamte Projekt wird im Ordner `dist` in einer einzelnen Datei `index.html` zusammengefasst. Der Inhalt der Datei kann direkt in einem FileMaker-Feld verwendet werden.

Mit Hilfe der Demodatei `GoogleMapsStarter.fmp12` kann das Projekt ebenfalls direkt in FileMaker im Entwicklermodus ausprobiert werden. Unter anderem wird in der Demodatei gezeigt, wie man Parameter an die Karte übergeben kann. Zusätzlich werden in dem Projekt nicht nur die klassischen Pins als Marker verwendet, sondern es wird beispielhaft gezeigt, wie ein textbasierter Marker generiert werden kann. Viele weitere Beispiele werden außerdem unter [https://developers.google.com/maps/documentation/javascript/examples](https://developers.google.com/maps/documentation/javascript/examples) bereitgestellt.

## Schnellstart

### Installation

Das node.js-Projekt basiert auf den Entwicklungsumgebung Vite.js. Die Pakete werden mit folgendem Befehl installiert:

```bash
npm install
```

**Wichtig:** Man benötigt einen eigenen Google Maps API-Key. Diesen kann man wie gewohnt in der [Google Cloud Console](https://console.cloud.google.com/apis/credentials/key) erstellen und aus FileMaker als Parameter übergeben. Die Map ID wird ebenfalls in der [Google Maps Console](https://console.cloud.google.com/apis/dashboard) angelegt und kann als Parameter aus FileMaker übergeben werden.

### Entwicklung

Der Entwicklungsserver wird mit folgendem Befehl gestartet:

```bash
npm run dev
```

Dieser läuft für gewöhnlich unter `http://localhost:5173/`.

### Übernahme in FileMaker

Das Projekt kann mit folgendem Befehl direkt in FileMaker geladen werden:

```bash
npm run deploy-to-fm
```

Hierbei ist zu beachten, dass der richtige Dateiname in `fmConfig.js` angegeben ist und das FileMaker-Skript `uploadToFM` aus der Demo-Datei in der Zieldatei vorhanden ist.

## Funktionen

- Advanced Marker, wie von Google empfohlen
- Marker können als Cluster dargestellt werden
- Dark Mode (falls nicht über die Map-ID gesteuert)
- Eigene Marker mit InfoWindow
- Übergabe von ID und Position an FileMaker zurück

## Lizenz

MIT License. Copyright (c) 2025 Adam Augustin.

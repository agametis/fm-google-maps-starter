# Projektübersicht

Google hat zum 21. Februar 2024 die Bibliothek zum Erstellen "klassischer Marker" `google.maps.Marker` abgekündigt [Mehr Infos](https://developers.google.com/maps/deprecations). Es wird empfohlen, die neuen Marker `google.maps.marker.AdvancedMarkerElement` zu verwenden [Migration](https://developers.google.com/maps/documentation/javascript/advanced-markers/migration). Da das Laden der Hauptbibliothek inzwischen  von Google ebenfalls überarbeitet wurde, zeigt dieses Projekt, wie man die Google Maps Karten für ein FileMaker-Projekt mit Hilfe eines node.js-Projektes aufbereiten kann.

## FileMaker-Google-Maps-Starter

Das node.js-Projekt basiert auf den Entwicklungsumgebung Vite.js.

## Projektbeschreibung

Das Projekt richtet sich an FileMaker-Entwickler, die Karten von Google in ihren Lösungen einsetzen möchten. Die Integration ist denkbar einfach gestaltet. Das gesamte Projekt wird im Ordner `dist` in einer einzelnen Datei `index.html` zusammengefasst. Der Inhalt der Datei kann direkt in einem FileMaker-Feld verwendet werden.

Mit Hilfe der Demodatei `GoogleMapsStarter.fmp12` kann das Projekt ebenfalls direkt in FileMaker im Entwicklermodus ausprobiert werden. Unter anderem wird in der Demodatei gezeigt, wie man Parameter an die Karte übergeben kann. Zusätzlich werden in dem Projekt nicht nur die klassischen Pins als Marker verwendet, sondern es wird beispielhaft gezeigt, wie ein textbasierter Marker generiert werden kann. Viele weitere Beispiele werden außerdem unter [https://developers.google.com/maps/documentation/javascript/examples](https://developers.google.com/maps/documentation/javascript/examples) bereitgestellt.

## Schnellstart

### Installation

Die Pakete werden mit folgendem Befehl installiert:

```bash
npm install
```

Der Google Maps API-Key wird direkt aus FileMaker geladen und nicht mehr aus einer .env-Datei. 

**Wichtig:** Man benötigt einen eigenen Google Maps API-Key. Diesen kann man wie gewohnt in der [Google Cloud Console](https://console.cloud.google.com/apis/credentials/key) erstellen. Die Map ID wird ebenfalls in der [Google Maps Console](https://console.cloud.google.com/apis/dashboard) angelegt und kann als Parameter aus FileMaker übergeben werden.

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

- Advanced Marker
- Marker können als Cluster dargestellt werden
- Dark Mode (falls nicht über die Map-ID gesteuert)
- Eigene Marker mit InfoWindow
- Übergabe von ID und Position an FileMaker zurück

## Lizenz

MIT License. Copyright (c) 2025 Adam Augustin.

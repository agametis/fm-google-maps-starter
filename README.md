# Projektübersicht

Google hat zum 21. Februar 2024 die Bibliothek zum Erstellen "klassischer Marker" `google.maps.Marker` abgekündigt [Mehr Infos](https://developers.google.com/maps/deprecations). Es wird empfohlen, die neuen Marker `google.maps.marker.AdvancedMarkerElement` zu verwenden [Migration](https://developers.google.com/maps/documentation/javascript/advanced-markers/migration). Da das Laden der Hauptbibliothek inzwischen  von Google ebenfalls überarbeitet wurde, zeigt dieses Projekt, wie man die Google Maps Karten für ein FileMaker-Projekt mit Hilfe eines node.js-Projektes aufbereiten kann.

## FileMaker-Google-Maps-Starter

Das node.js-Projekt basiert auf den Entwicklungsumgebung Vite.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Projektbeschreibung

Das Projekt richtet sich an FileMaker-Entwickler, die Karten von Google in ihren Lösungen einsetzen möchten. Die Integration ist denkbar einfach gestaltet. Das gesamte Projekt wird im Ordner `dist` in einer einzelnen Datei `index.html` zusammengefasst. Der Inhalt der Datei kann direkt in einem FileMaker-Feld verwendet werden.

Mit Hilfe der Demodatei `GoogleMapsStarter.fmp12` kann das Projekt ebefalls direkt in FileMaker im Entwicklermodus ausprobiert werden. Unter anderem wird in der Demodatei gezeigt, wie man Parameter an die Karte übergeben kann. Zusätzlich werden in dem Projekt nicht nur die klassischen Pins als Marker verwendet, sondern es wird beispielhaft gezeigt, wie ein textbasierter Marker generiert werden kann. Viele weitere Beispiele werden außerdem unter [https://developers.google.com/maps/documentation/javascript/examples](https://developers.google.com/maps/documentation/javascript/examples) bereitgestellt.

## Getting Started

### Installation

Die Pakete werden mit dem folgenden Befehl installiert:

```bash
npm install
```

In der Datei `.env.local` bzw. `.env.production` muss der Schlüssel `VITE_GOOGLE_MAPS_API_KEY` eingetragen werden. Dieser ist der API-Schlüssel für Google Maps. Er kann unter [Google Cloud Console](https://console.cloud.google.com/apis/credentials/key) erstellt werden. Außerdem muss die Map ID definiert werden, die ebenfalls in der [Google Maps Console](https://console.cloud.google.com/apis/dashboard) erstellt wird. Die Map ID kann entweder direkt im Projekt eingetragen werden oder kann als Parameter aus FileMaker heraus übergeben werden.

### Während der Entwicklung

Der Entwicklungsserver wird mit dem folgenden Befehl gestartet:

```bash
npm run dev
```

Diese läuft für gewöhnlich unter `http://localhost:5173/`.

### Übernahme in FileMaker

Das Projekt kann mit dem folgenden Befehl direkt in FileMaker geladen werden:

```bash
npm run deploy-to-fm
```

Hierbei ist zu beachten, dass der richtige Dateiname in `fmConfig.js` angegeben ist und das FileMaker-Skript `uploadToFM` aus der Demo-Datei in der Ziel Datei vorhanden ist.

## Features and Functionality

### Features

- Advanced Marker
- Marker können als Cluster dargesetllt werden
- Dark Mode falls man es nicht über die Map-ID steuert
- Custom Markers mit eigenem InfoWindow
- Übergabe von ID und Position an FileMaker zurück

## License

MIT License. Copyright (c) 2025 Adam Augustin.

import open from "open";
import path from "path";

import {fmConfig} from "./fmConfig.js";

// using node >=20.11
const __dirname = import.meta.dirname;

const {uploadScript, file, server, widgetName} = fmConfig;

const fileUrl = `fmp://${server}/${file}?script=${uploadScript}&param=`;

const thePath = path.join(__dirname, "../", "dist", "index.html");

const params = {thePath, widgetName};
const urlFM = fileUrl + encodeURIComponent(JSON.stringify(params));
open(urlFM);

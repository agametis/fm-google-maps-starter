export const buildInfoWindow = (property) => {
  const content = `
    <table>
  <tr>
    <td colspan="2" class="lpp-value-bold">${property.gaNummer}</td>
    <td></td>
    <td colspan="2" rowspan="7">
      <div class="tab-img"><img width="180px" src="${property.object.img}"/></div>
    </td>
  </tr>
  <tr>
    <td colspan="3" class="lpp-value-bold">${property.object.name}</td>
  </tr>
  <tr>
    <td colspan="3" class="lpp-value">${property.object.strasse}</td>
  </tr>
  <tr>
    <td colspan="3" class="lpp-value">${property.object.plzOrt}</td>
  </tr>
  <tr>
    <td colspan="3"><br/></td>
  </tr>
  <tr>
    <td colspan="3" class="lpp-header">Auftraggeber:</td>
  </tr>
  <tr>
    <td colspan="3" class="lpp-value">${property.auftraggeber}</td>
  </tr>
  <tr>
    <td colspan="5"><br/></td>
  </tr>
  <tr>
    <td colspan="3" class="lpp-header">Stichtag:</td>
  </tr>
  <tr>
    <td colspan="3" class="lpp-value">${property.stichtag}</td>
    <td colspan="2"></td>
  </tr>
  <tr>
    <td colspan="5"><br/></td>
  </tr>
  <tr>
    <td colspan="2" class="lpp-header">Objektdaten:</td>
    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td colspan="2" class="lpp-header">Verkehrswert:</td>
  </tr>
  <tr>
    <td class="lpp-label">Objektart</td>
    <td class="lpp-value-right">${property.object.art}</td>
    <td></td>
    <td class="lpp-label">Verkehrswert</td>
    <td class="lpp-value-right">${property.verkehrswertData.verkehrswert}</td>
  </tr>
  <tr>
    <td class="lpp-label">Wirtsch. Baujahr</td>
    <td class="lpp-value-right">${property.objectData.baujahrWirtschaftlich}</td>
    <td></td>
    <td class="lpp-label">Bodenwert</td>
    <td class="lpp-value-right">${property.verkehrswertData.bodenwert}</td>
  </tr>
  <tr>
    <td class="lpp-label">Grundstücksgröße</td>
    <td class="lpp-value-right">${property.objectData.grundstueckgroesse}
    </td>
    <td></td>
    <td class="lpp-label">je m<sup>2</sup>
      NF</td>
    <td class="lpp-value-right">${property.verkehrswertData.bodenwertJeNf}
    </td>
  </tr>
  <tr>
    <td class="lpp-label">Nutzfläche</td>
    <td class="lpp-value-right">${property.objectData.nutzflaeche}
    </td>
    <td></td>
    <td class="lpp-label">Rohertragsfaktor</td>
    <td class="lpp-value-right">${property.verkehrswertData.rohertragsfaktor}</td>
  </tr>
  <tr>
    <td class="lpp-label">Liegenschaftszinssatz</td>
    <td class="lpp-value-right">${property.objectData.liegenschaftszinssatz}</td>
    <td></td>
    <td class="lpp-label">BAR</td>
    <td class="lpp-value-right">${property.verkehrswertData.BAR}</td>
  </tr>
  <tr>
    <td colspan="5" class="lpp-value"><br/></td>
  </tr>
  <tr>
    <td colspan="2" class="lpp-header">Bearbeiter:</td>
    <td></td>
    <td colspan="2" class="lpp-header">Vorgutachten:</td>
  </tr>
  <tr>
    <td class="lpp-label">Verantwortlicher GA</td>
    <td class="lpp-value-right">${property.bearbeiter.verantwortlicher}</td>
    <td></td>
    <td colspan="2" class="lpp-value">${property.bearbeiter.vorgutachtenNummer}</td>
  </tr>
  <tr>
    <td class="lpp-label">Sachbearbeiter</td>
    <td class="lpp-value-right">${property.bearbeiter.sachbearbeiter}</td>
    <td colspan="3"></td>
  </tr>
  <tr>
    <td colspan="3"></td>
    <td>
      <a class="lpp-link" href="${property.link.mehrDaten}">Mehr Daten</a>
    </td>
    <td>
      <a class="lpp-link" href="${property.link.finalesPDF}">Finales GA</a>
    </td>
  </tr>
  <tr>
    <td colspan="5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
</table>
    `;

  return content;
};

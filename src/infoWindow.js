export const buildSimpleInfoWindow = (location) => {
  const content = `
    <div class="info-window-container">
      <div class="info-window-icon">
        <i class="fa-solid fa-location-dot fa-lg"></i>
      </div>
      <div class="info-window-content">
        <h3>${location.titel}</h3>
        <p>${location.strasse}</p>
        <p>${location.ort}</p>
      </div>
    </div>
  `;

  return content;
};

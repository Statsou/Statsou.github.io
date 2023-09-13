const maps = function () {
  const tabletWidth = window.matchMedia(`(max-width:1199px)`);
  const mobileWidth = window.matchMedia(`(max-width:767px)`);

  const mapInitial = function () {
    const mapOptions = {
      center: [55.02537776934401, 82.9269750991378],
      zoom: 15,
      scrollWheelZoom: false,
    };

    const iconOptions = {
      iconUrl: './img/svg/map-marker.svg',
      iconSize: [51, 70],
      iconAnchor: [31, 40],
    };

    if (tabletWidth.matches) {
      iconOptions.iconSize = [29, 40];
      mapOptions.center = [55.02610756934401, 82.9267055991378];
    }

    if (mobileWidth.matches) {
      iconOptions.iconSize = [18, 24];
      mapOptions.center = [55.02776866934401, 82.9270050991378];
    }


    const customIcon = L.icon(iconOptions);

    const markerOptions = {
      clickable: true,
      draggable: true,
      icon: customIcon,
    };

    const map = new L.map('map', mapOptions);
    const layer = new L.TileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=StFld3NCrvag1TMtL9m1');

    map.addLayer(layer);

    const marker = L.marker({lat: 55.02861756934401, lng: 82.9282250991378}, markerOptions);

    marker.addTo(map);
  }

  mapInitial();
};

export {maps};

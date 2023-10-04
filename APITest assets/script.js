"use strict";

function initMap() {
  const myLatLng = {
    lat: 40.760650634765625,
    lng: -111.89173126220703
  };
  const map = new google.maps.Map(document.getElementById("gmp-map"), {
    zoom: 14,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "My location"
  });
  console.log(position)
}
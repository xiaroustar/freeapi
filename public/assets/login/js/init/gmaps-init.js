  'use strict';
  $(document).ready(function() {

      /* -----  Google Map - Basic Map  ----- */
      var xpBasicMap;
      xpBasicMap = new GMaps({
          el: '#xp-basic-map',
          lat: 41.8339037,
          lng: -87.8720467,
          scrollwheel: false
      });

      /* -----  Google Map - Markers Map  ----- */
      var xpMarkerMap;
      xpMarkerMap = new GMaps({
          el: '#xp-markers-map',
          lat: 41.8339037,
          lng: -87.8720467,
          scrollwheel: false
      });

      xpMarkerMap.addMarker({
          lat: 41.8339037,
          lng: -87.8720467,
          title: 'Marker with InfoWindow',
          infoWindow: {
              content: '<p>Welcome here</p>'
          }
      });

      /* -----  Google Map - Search Locations Map  ----- */
      var xpMapGeo = new GMaps({
          div: '#xp-mapGeo',
         lat: 41.8339037,
          lng: -87.8720467,
      });
      $('#xp-geocoding_form').submit(function(e) {
          e.preventDefault();
          GMaps.geocode({
              address: $('#address').val().trim(),
              callback: function(results, status) {
                  if (status == 'OK') {
                      var latlng = results[0].geometry.location;
                      xpMapGeo.setCenter(latlng.lat(), latlng.lng());
                      xpMapGeo.addMarker({
                          lat: latlng.lat(),
                          lng: latlng.lng()
                      });
                  }
              }
          });
      });

      /* -----  Google Map - Street Map  ----- */
      var xpPanoramaMap;
      xpPanoramaMap = GMaps.createPanorama({
          el: '#xp-mapStreet',
          lat: 41.8339037,
          lng: -87.8720467,
      });

});
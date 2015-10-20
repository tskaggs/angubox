'use strict';

/**
 * @ngdoc function
 * @name anguboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anguboxApp
 */
angular.module('anguboxApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // This input data could come from a JSON file/URL also.
    $scope.places = [
      { name:'Alpha', category:'Restaurant', lat: 15, lng: 121 },
      { name:'Beta', category:'Hotel', lat: 13, lng: 121 },
      { name:'Gamma', category:'Hotel', lat: 10, lng: 119 },
      { name:'Delta', category:'Hotel', lat: 9, lng: 125 },
      { name:'Zeta', category:'Restaurant', lat: 10.9, lng: 121 },
    ];

    // Specify the unique Categories.
    // @todo: Find a better way to automatically fetch the UNIQUE categories
    // from the given data.
    $scope.categories = [ 'All', 'Hotel', 'Restaurant'];

    // Refreshes the map view/extent every time the search filter is changed.
    // $scope.refreshPlaces = function() {
    //   zoomToMarkersExtent($scope.filteredPlaces);
    // };

    // Plot all the markers initially, given the input data.
    // function renderMarkers(places) {
    //   var latitude_0 = places[0].lat;
    //   var longitude_0 = places[0].lng;
    //   var southWest = L.latLng(latitude_0, longitude_0);
    //   var northEast = L.latLng(latitude_0, longitude_0);

    //   // Sadly, empty L.latLngBounds() is not allowed.
    //   // So we're forced to have some smart initial values
    //   // like centering the map in the first point/marker.
    //   var currentBounds = L.latLngBounds(southWest, northEast);

    //   // Container for all the markers' references in the map.
    //   // The contents of this variable should not change.
    //   $scope.markers = {};

    //   // Loop through all input data.
    //   for (var i = 0; i < places.length; i++) {
    //     var lat = places[i].lat;
    //     var lng = places[i].lng;

    //     // Set the position of the new marker.
    //     var marker = L.marker([lat, lng]);

    //     // Set the contents of the marker's popup.
    //     var popupText = places[i].name + ' ' + places[i].category;
    //     marker.bindPopup(popupText);

    //     // Add the new marker to the map.
    //     marker.addTo($scope.map);

    //     // Insert this marker to the global directory of markers.
    //     $scope.markers[places[i].name] = marker;

    //     // Expand the current map extent
    //     // considering the location of this marker.
    //     var markerLatLng = L.latLng(lat, lng);
    //     currentBounds.extend(markerLatLng);
    //   }

    //   // Zoom the map into a view that will cover all the markers.
    //   $scope.map.fitBounds(currentBounds);
    // }

    // function zoomToMarkersExtent(places) {
    //   // Hide ALL markers first.
    //   // And then, later on we'll show the filtered ones only.
    //   // This we'll avoid the performance cost of destroying and
    //   // creating new markers from scratch.
    //   var length = $scope.places.length;
    //   for (var i = 0; i < length; i++) {
    //     var marker = $scope.markers[$scope.places[i].name];

    //     // Make the marker invisible.
    //     marker.setOpacity(0);
    //   }

    //   if($scope.placeName === 'All') {
    //     places = $scope.places;
    //   }

    //   var latitude_0 = places[0].lat;
    //   var longitude_0 = places[0].lng;
    //   var southWest = L.latLng(latitude_0, longitude_0);
    //   var northEast = L.latLng(latitude_0, longitude_0);

    //   // We need to have a new map bound for the filtered markers.
    //   var currentBounds = L.latLngBounds(southWest, northEast);

    //   var length = places.length;
    //   for (var i = 0; i < length; i++) {
    //     var marker = $scope.markers[places[i].name];

    //     // Show the current marker that is among the filtered ones.
    //     marker.setOpacity(1);

    //     var lat = places[i].lat;
    //     var lng = places[i].lng;

    //     // Expand the map's extent
    //     // considering the location of this marker.
    //     var markerLatLng = L.latLng(lat, lng);
    //     currentBounds.extend(markerLatLng);
    //   }

    //   // Zoom the map into a view that will cover all the markers.
    //   $scope.map.fitBounds(currentBounds);
    // }

    // // This is run only once.
    // $scope.initializeMap = function() {
    //   // This is my personal access token, you get yours for free here:
    //   // https://www.mapbox.com/plans/
    //   var mapboxAccessToken = 'pk.eyJ1IjoicmFuZWxwYWRvbiIsImEiOiI3MGU3MTE5YTA3YmIzMjFlMWNkZGEyYmMxMDBkMDllNCJ9.HCrv6s66Cl5sKs87Plct8w';

    //   L.mapbox.accessToken = mapboxAccessToken;

    //   // Get the target map container.
    //   var mapDiv = document.getElementById('mapContainer');

    //   // Insert the map in the container and specify the base map layer.
    //   $scope.map = L.mapbox.map(mapDiv, 'mapbox.streets');

    //   // Move the zoom bars for some customization touch.
    //   $scope.map.zoomControl.setPosition('topright');

    //   // Render all the markers initially.
    //   renderMarkers($scope.places);
    // };

    // $scope.initializeMap();
  });

'use strict';

angular.module('inventivelabs')
  .controller('GetInTouchController', function ($scope) {
    $scope.title = 'Get in touch with us';

    var cities = [
     {
    	city: 'Harrisglenn Drive, Austin',
    	desc: 'The coolest area in Austin!',
    	lat: 30.400095,
    	lang: -97.652608
    },
    {
    	city: 'Austin',
    	desc: 'Fastest growing city in the world!',
    	lat: 30.2500,
    	lang: 97.7500
    }
    // {
    //     city : 'Toronto',
    //     desc : 'This is the best city in the world!',
    //     lat : 43.7000,
    //     long : -79.4000
    // },
    // {
    //     city : 'New York',
    //     desc : 'The rugged city in the world!',
    //     lat : 40.6700,
    //     long : -73.9400
    // },
    // {
    //     city : 'Chicago',
    //     desc : 'This is the second best city in the world!',
    //     lat : 41.8819,
    //     long : -87.6278
    // },
    // {
    //     city : 'Los Angeles',
    //     desc : 'Home of celebrities!',
    //     lat : 34.0500,
    //     long : -118.2500
    // },
    // {
    //     city : 'Las Vegas',
    //     desc : 'Entertainment city ',
    //     lat : 36.0800,
    //     long : -115.1522
    // }
];


    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(30.400095, -97.652608),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
        
    }  
    
    for (var i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }
    
  });

var map1;

function initMap() {

    //var mapStyles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"hue":"#008eff"},{"invert_lightness":true},{"lightness":"-64"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"lightness":"-70"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"off"},{"hue":"#ff0000"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#008bff"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"lightness":"30"},{"gamma":"1.00"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#ff0000"},{"lightness":"-10"},{"saturation":"100"},{"gamma":"1"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"on"},{"hue":"#008eff"},{"saturation":"0"},{"lightness":"0"},{"gamma":"1"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road.highway.controlled_access","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":"-15"}]},{"featureType":"road.local","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.airport","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.bus","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.rail","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#008eff"},{"saturation":"-69"},{"lightness":"-27"}]}]

    if (document.getElementById('map1')) {
        map1 = new google.maps.Map(document.getElementById('map1'), {
            center: {lat: 30.278001, lng: 120.156992},
            zoom: 10,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center1 = map1.getCenter();
            google.maps.event.trigger(map1, 'resize');
            map1.setCenter(center1);
        });

        //map1.setOptions({styles: mapStyles});
    }

    var geomarkGold = {
        url: 'img/mark-2.png',
        size: new google.maps.Size(22, 35)
    };
    var geomarkBlack = {
        url: 'img/mark-1.png',
        size: new google.maps.Size(22, 35)
    };

    var markOffice1 = new google.maps.Marker({
        position: {lat: 30.278001, lng: 120.156992},
        map: map1,
        icon: geomarkGold
    });

    var markOffice2 = new google.maps.Marker({
        position: {lat: 30.085305, lng: 120.203589},
        map: map1,
        icon: geomarkBlack
    });

    var markOffice3 = new google.maps.Marker({
        position: {lat: 30.009687, lng: 119.964001},
        map: map1,
        icon: geomarkGold
    });

    var markOffice4 = new google.maps.Marker({
        position: {lat: 30.166443, lng: 120.207688},
        map: map1,
        icon: geomarkGold
    });

}

initMap();
function updateMap() {
    fetch('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest')
        .then(response => response.json())
        .then(data => {




            for (const item of data) {
                let lon = item.location.lng
                let lat = item.location.lat
                let marker = new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(176, 58, 46)"
                })
                marker.setLngLat([lon, lat])
                var popup = new mapboxgl.Popup({ offset: 25 }).setText(
                    `Country:${item.countryregion}
                                 Confirmed:${item.confirmed} 
                                 Deaths:${item.deaths}
                                 Recovered:${item.recovered}`
                );
                marker.setPopup(popup);
                marker.addTo(map)
            }

        });
}










updateMap()
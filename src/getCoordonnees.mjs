export async function getCoordinates(cityName) {
    return fetch('./coordonnees.json')
        .then(response => response.json())
        .then(data => {
            let city = data.find(item => item.city === cityName);
            if(!city) {
                console.log('Coordonnées introuvables pour cette ville.');

            }
            else {
                let locationHeader = document.getElementById('location');

                locationHeader.textContent = city.city;
            }
            return city
            
        }
        )
}

const NodeGeocoder = require('node-geocoder');


const options = {
  provider: 'google',

  apiKey: 'AIzaSyBafiTfpHv9jETR10fnxcnuzev6wRfldb8',
  formatter: null
};

const geocoder = NodeGeocoder(options);

// Array de direcciones que deseas convertir en coordenadas
const addresses = [
  'Calle Comercial lote 25, Ate 15494',
  'micaela, C. Marsella 138, Ate 15494',
  'Oslo 124, Ate 15494',
  'Jr. Brigadier Pumacahua 2482, Lince 15073'
];

// Utilizamos Promise.all para geocodificar todas las direcciones de forma asíncrona
Promise.all(addresses.map(address =>
  geocoder.geocode(address)
))
  .then(results => {
    // Iteramos sobre los resultados para imprimir las coordenadas de cada dirección
    results.forEach((res, index) => {
      const result = res[0]; // Tomamos el primer resultado en este ejemplo
      console.log(`Coordenadas de "${addresses[index]}": ${result.latitude}, ${result.longitude}`);
    });
  })
  .catch((err) => {
    console.error('Error:', err);
  });

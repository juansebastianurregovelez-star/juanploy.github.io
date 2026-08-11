const portfolio = [
  ['camion-guizao.jpeg', 'Guizao 38'],
  ['camion-estetica.jpeg', 'Estética'],
  ['camion-manies.jpeg', 'Manies Videos']
];
document.querySelectorAll('.logo-grid .work').forEach((card, index) => {
  const image = card.querySelector('img');
  const title = card.querySelector('b');
  image.src = portfolio[index][0];
  image.alt = `Diseño de camión: ${portfolio[index][1]}`;
  title.textContent = portfolio[index][1];
});
document.querySelector('#portafolio h2').innerHTML = 'Diseños de<br>camiones.';
document.querySelector('#portafolio .intro').textContent = 'Ejemplos visuales para mostrar el estilo de diseño de camiones que te gusta.';

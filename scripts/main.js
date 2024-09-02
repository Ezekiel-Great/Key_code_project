document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.textAlign = 'center';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.margin = '0';
document.body.style.backgroundColor = '#f0f0f0';


const displayContainer = document.getElementById('displayContainer');
displayContainer.style.padding = '50px';
displayContainer.style.borderRadius = '10px';
displayContainer.style.backgroundColor = '#fff';
displayContainer.style.boxShadow = '10px 5px 8px rgba(20, 20, 20, 0.1)';

const h1 = displayContainer.querySelector('h1');
h1.style.fontSize = '3rem';
h1.style.color = '#333';

const h2 = document.querySelector('h2');
h2.style.fontSize = '5.5rem';
h2.style.color = 'rgb(0, 220, 212)';
h2.style.padding = '20px';
h2.style.display = 'none';
h2.style.borderRadius = '10px';
h2.style.backgroundColor = '#fff';
h2.style.boxShadow = '10px 5px 8px rgba(20, 20, 20, 0.1)';


document.addEventListener('keydown', function(event) {
    h1.innerHTML = `You pressed: <span style = "color:rgb(0, 220, 212); text-transform: uppercase">${event.key}<span>`;
    h2.textContent =`${event.keyCode}`;
    h2.style.display = 'block';
    displayContainer.style.transition = 'box-shadow 0.3s ease-in-out';
    displayContainer.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
});

document.addEventListener('keyup', function() {
    displayContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
});

// Earthquake data simulation
const scenarios = {
  Gaza: { intensity: '5.3', safePlaces: ['Beach Area', 'Open Parks'] },
  Ramallah: { intensity: '6.1', safePlaces: ['City Center Square', 'Wadi Park'] },
  Nablus: { intensity: '4.8', safePlaces: ['Old City', 'East Neighborhood'] },
  Hebron: { intensity: '6.5', safePlaces: ['Mountain View', 'University Grounds'] },
};

// Function to simulate an earthquake
function simulateEarthquake() {
  const city = document.getElementById('city').value;
  const data = scenarios[city];

  // Show alert
  const alertDiv = document.getElementById('alert');
  const alertDetails = document.getElementById('alert-details');
  alertDetails.textContent = `Earthquake detected in ${city} with intensity ${data.intensity}.`;
  alertDiv.style.display = 'block';

  // Play alert sound
  const alertSound = document.getElementById('alert-sound');
  alertSound.play();

  // Show safe places
  const safePlacesDiv = document.getElementById('safe-places');
  const safeList = document.getElementById('safe-list');
  safeList.innerHTML = '';
  data.safePlaces.forEach(place => {
    const li = document.createElement('li');
    li.textContent = place;
    safeList.appendChild(li);
  });
  safePlacesDiv.style.display = 'block';
}

// Trigger earthquake simulation after 10 seconds
setTimeout(simulateEarthquake, 10000);

<template>
  <div>
    <!-- Footer -->
    <footer id="main-container" class="text-center text-lg-start text-muted">
      <!-- Section: Social media -->
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <!-- Left -->
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <!-- Right -->
        <div>
          <a href="#" class="me-4 text-reset">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="me-4 text-reset">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="me-4 text-reset">
            <i class="fab fa-google"></i>
          </a>
          <a href="#" class="me-4 text-reset">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="me-4 text-reset">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="#" class="me-4 text-reset">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </section>

      <!-- Section: Links -->
      <section>
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <!-- Grid column for TR SECURITY K9 -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>TR SECURITY K9
              </h6>

              <!-- Map: Updated Coordinates -->
              <div>
                <div id="map1" class="map-container"></div>
              </div>
            </div>

            <!-- Grid columns for Products, Useful links, and Contact remain unchanged -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Products</h6>
              <p><a href="/" class="text-reset">Home</a></p>
              <p><a href="/AlarmMonitoringView" class="text-reset">Alarm Monitoring</a></p>
              <p><a href="/ElectricFencingView" class="text-reset">Electric Fencing</a></p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
              <p><a href="/ArmedResponseView" class="text-reset">Armed Response</a></p>
              <p><a href="/k9HandlingView" class="text-reset">K9 Handling</a></p>
              <p><a href="/RIASecurityView" class="text-reset">Residential/Industrial<br>Agricultural</a></p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p><i class="fas fa-envelope me-3"></i> info@example.com</p>
              <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Copyright -->
      <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

export default {
  name: 'FooterComp',
  mounted() {
    // Function to create a map with a marker at the provided coordinates
    const createMapWithMarker = (mapId, coords) => {
      const map = L.map(mapId).setView(coords, 15); // Set view centered at the coordinates

      // Add the OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      // Create a custom red pin icon
      const redPinIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png', // Leaflet default pin URL
        iconSize: [25, 41], // Size of the icon
        iconAnchor: [12, 41], // Point of the icon which will correspond to the marker's location
        popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
      });

      // Add a marker at the coordinates with the custom red pin icon
      L.marker(coords, { icon: redPinIcon }).addTo(map);
    };

    // Map: TR SECURITY K9 Location - Updated Coordinates
    createMapWithMarker('map1', [-33.97091177910423, 18.547099432812733]); // Coordinates for the new address
  },
};
</script>

<style scoped>
#main-container {
  background-color: black;
  color: white;
}

i, p, h1, h2, h3, h4, h5, h6, span, div {
  color: white;
}

.text-uppercase {
  text-transform: uppercase;
}

.text-reset {
  color: white !important;
  text-decoration: none;
}

.text-reset:hover {
  text-decoration: underline;
}

.map-container {
  height: 200px; /* Set height of the map */
  width: 100%; /* Ensure the map takes full column width */
  margin-top: 10px;
}
</style>

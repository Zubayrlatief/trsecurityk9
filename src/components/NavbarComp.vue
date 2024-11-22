<template>
  <nav class="navbar  navbar-expand-lg navbar-dark bg-black">
    <div class="container">
      <a class="navbar-brand mx-auto m-2 " href="#">
        <img src="https://zubayrlatief.github.io/Images-/TRsecurityK9-logo.png" alt="Logo" class="navbar-logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav mx-auto text-center ">
          <li class="nav-item">
            <a class="nav-link" href="#ourmission">OUR MISSION</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="servicesDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              SECURITY SERVICES
            </a>
            <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
              <li><a class="dropdown-item" href="/ArmedResponseView">ARMED RESPONSE</a></li>
              <li><a class="dropdown-item" href="/K9HandlingView">K9 HANDLING</a></li>
              <li><a class="dropdown-item" href="/RIASecurityView">RESIDENTIAL/INDUSTRIAL/AGRICULTURAL</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="systemsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              SECURITY SYSTEMS
            </a>
            <ul class="dropdown-menu" aria-labelledby="systemsDropdown">
              <li><a class="dropdown-item" href="/AlarmMonitoringView">ALARM MONITORING</a></li>
              <li><a class="dropdown-item" href="/ElectricFencingView">ELECTRIC FENCING</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/ContactView">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script lang="ts">
export default {
  name: 'NavbarComp',
};
</script>

<style scoped>
.navbar-logo {
  height: 90px; 
}

.nav-link,
.dropdown-item {
  color: white;
  font-size: large;
}

.dropdown-menu {
  background-color: black;
  color: black;
}

.dropdown-item:hover {
  color: #EB691D;
  background-color: black;
}
.nav-link:hover{
  color:  #EB691D;
}
</style>

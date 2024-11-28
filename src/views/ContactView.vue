<template lang="">
    <NavbarComp/>
    <div class="form-container my-5">
  <h2 class="text-center text-uppercase fw-bold mb-4">Get in Touch</h2>
  <p class="text-center text-muted mb-4">
    Have questions or need assistance? Fill out the form below, and we’ll respond promptly.
  </p>
  <form
    action="https://formspree.io/f/mvgowyar"
    method="POST"
    class="contact-form mx-auto bg-dark text-light p-5 rounded shadow"
  >
    <div class="mb-4">
      <label for="name" class="form-label ">Your Name</label>
      <input
        type="text"
        id="name"
        name="name"
        class="form-control"
        placeholder="Enter your name"
        required
      />
    </div>
    <div class="mb-4">
      <label for="email" class="form-label">Your Email</label>
      <input
        type="email"
        id="email"
        name="email"
        class="form-control"
        placeholder="Enter your email"
        required
      />
    </div>
    <div class="mb-4">
      <label for="service" class="form-label">Select a Service</label>
      <select
        id="service"
        name="service"
        class="form-control"
        required
      >
        <option value="" disabled selected>Choose a service</option>
        <option value="armed-response">Armed Response</option>
        <option value="k9-handling">K9 Handling</option>
        <option value="residential-security">Residential Security</option>
        <option value="agricultural-security">Agricultural Security</option>
        <option value="industrial-security">Industrial Security</option>
        <option value="electric-fencing-installations">Electric Fencing Installations</option>
        <option value="alarm-monitoring-installations">Alarm Monitoring Installations</option>
      </select>
    </div>
    <div class="mb-4">
      <label for="message" class="form-label">Message</label>
      <textarea
        id="message"
        name="message"
        class="form-control"
        rows="5"
        placeholder="Write your message here"
        required
      ></textarea>
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary px-5 py-2 fw-bold text-uppercase">
        Submit
      </button>
    </div>
  </form>
</div>


    <FooterComp/>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import NavbarComp from '@/components/NavbarComp.vue';
import FooterComp from '@/components/FooterComp.vue';
export default defineComponent({
  name: 'ContactView',
  components: {
    NavbarComp,
    FooterComp
}
});
</script>
<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.contact-form {
  background-color: #1a1a1a; 
  border: 1px solid #333; 
  border-radius: 8px;
}

.contact-form .form-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #ccc;

}

.contact-form .form-control {
  background-color: #2a2a2a;
  color: #eee; 
  border: 1px solid #444;
  border-radius: 6px;
  padding: 12px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.contact-form .form-control:focus {
  border-color:#eb691d;
  box-shadow: 0 0 8px #eb691d;
  outline: none;
}

.contact-form .btn-primary {
  background-color: #eb691d;
  border: none;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 4px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.contact-form .btn-primary:hover {
  background-color: #bcc2c9;
  transform: scale(1.05);
}
.contact-form select.form-control {
  background-color: #2a2a2a; 
  color: #eee; 
  border: 1px solid #444;
  border-radius: 6px;
  padding: 12px;
  appearance: none; 
}

.contact-form select.form-control:focus {
  border-color: #a06441;
  box-shadow: #a36d4d;
  outline: none;
}

.contact-form select.form-control {
  background-image: url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 4 5%27%3e%3cpath fill=%27%23ccc%27 d=%27M2 0L0 2h4z%27/%3e%3c/svg%3e');
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 12px 12px;
}

h2 {
  font-size: 1.8rem;
  color: #fff;
}

.text-muted {
  color: #aaa;
}
    
@media (max-width: 768px) {
  .contact-form {
    padding: 20px;
  }

  .form-container {
    padding: 10px;
  }

  h2 {
    font-size: 1.5rem;
  }
}

</style>
<template>
  <section class="clinic-main-info">
    <div class="container">
      <div class="row">
        <img class="clinic-img" :src="clinic.ClinicPhoto" style="width: 250px;height: 250px;">
        <div class="clinic-description-wrp">
          <div class="clinic-heading">{{ clinic.ClinicName }}</div>
          <div class="contact-wrp">
            <p class="clinic-telephone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><title/><g data-name="1" id="_1"><path d="M348.73,450.06a198.63,198.63,0,0,1-46.4-5.85c-52.43-12.65-106.42-44.74-152-90.36s-77.71-99.62-90.36-152C46.65,146.75,56.15,99.61,86.69,69.07l8.72-8.72a42.2,42.2,0,0,1,59.62,0l50.11,50.1a42.18,42.18,0,0,1,0,59.62l-29.6,29.59c14.19,24.9,33.49,49.82,56.3,72.63s47.75,42.12,72.64,56.31L334.07,299a42.15,42.15,0,0,1,59.62,0l50.1,50.1a42.16,42.16,0,0,1,0,59.61l-8.73,8.72C413.53,439,383.73,450.06,348.73,450.06ZM125.22,78a12,12,0,0,0-8.59,3.56l-8.73,8.72c-22.87,22.87-29.55,60-18.81,104.49,11.37,47.13,40.64,96.1,82.41,137.86s90.73,71,137.87,82.41c44.5,10.74,81.61,4.06,104.48-18.81l8.72-8.72a12.16,12.16,0,0,0,0-17.19l-50.09-50.1a12.16,12.16,0,0,0-17.19,0l-37.51,37.51a15,15,0,0,1-17.5,2.72c-30.75-15.9-61.75-39.05-89.65-66.95s-51-58.88-66.94-89.63a15,15,0,0,1,2.71-17.5l37.52-37.51a12.16,12.16,0,0,0,0-17.19l-50.1-50.11A12.07,12.07,0,0,0,125.22,78Z"/><path d="M364.75,269.73a15,15,0,0,1-15-15,99.37,99.37,0,0,0-99.25-99.26,15,15,0,0,1,0-30c71.27,0,129.25,58,129.25,129.26A15,15,0,0,1,364.75,269.73Z"/><path d="M428.15,269.73a15,15,0,0,1-15-15c0-89.69-73-162.66-162.65-162.66a15,15,0,0,1,0-30c106.23,0,192.65,86.43,192.65,192.66A15,15,0,0,1,428.15,269.73Z"/></g></svg>
              {{ clinic.ClinicTelephone }}
            </p>
            <p class="clinic-work-time">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs></defs><title/><g data-name="Layer 2" id="Layer_2"><path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z"/><path d="M21.5,22.5a1,1,0,0,1-.71-.29l-5.5-5.5A1,1,0,0,1,15,16V8a1,1,0,0,1,2,0v7.59l5.21,5.2a1,1,0,0,1,0,1.42A1,1,0,0,1,21.5,22.5Z"/></g><g id="frame"></g></svg>
              {{ clinic.ClinicWork_time }}
            </p>
          </div>
          <p class="clinic-content">{{ clinic.ClinicContent }}</p>
          <p class="clinic-address">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128"><title/><path d="M64,128a6.9,6.9,0,0,1-4.89-2L26.23,93.12A55.05,55.05,0,0,1,10,53.69,53.29,53.29,0,0,1,25.87,15.58a54.56,54.56,0,0,1,76.26,0h0A53.29,53.29,0,0,1,118,53.69a55.05,55.05,0,0,1-16.23,39.43L68.89,125.94A6.9,6.9,0,0,1,64,128ZM64,6A48.19,48.19,0,0,0,30.08,19.85,47.34,47.34,0,0,0,16,53.7,49.1,49.1,0,0,0,30.47,88.87l32.87,32.82a.91.91,0,0,0,1.31,0L97.53,88.87A49.1,49.1,0,0,0,112,53.7,47.34,47.34,0,0,0,97.92,19.85h0A48.19,48.19,0,0,0,64,6Z"/><path d="M64,81.41a27.25,27.25,0,1,1,19.3-8A27.23,27.23,0,0,1,64,81.41Zm0-48.49a21.26,21.26,0,1,0,15.06,6.22h0A21.25,21.25,0,0,0,64,32.92Z"/></svg>
            {{ clinic.ClinicAddress }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="clinic-doctors">
    <div class="container">
      <div class="row">
        <div class="doctors-heading heading">Врачи стоматологии {{ clinic.ClinicName }}</div>
        <div class="doctors-wrp">
          <div class="doctor-card col-4" v-for="doctor in doctors">
            <img class="doctor-img" :src="doctor.photo" style="height:250px;width: 250px">
            <p class="doctor-name">{{ doctor.name }}</p>
            <p class="doctor-content">{{ doctor.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="clinic-services">
    <div class="container">
      <div class="row">
        <div class="services-heading heading">Услуги</div>
        <div class="service-card col-4" v-for="service in services">
          <img class="service-img" :src="service.photo" style="height:150px;width: 150px">
          <div class="service-text-wrp">
            <p class="service-name">{{ service.name }}</p>
            <p class="service-price">{{ service.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import store from "@/store";

export default {
  name: "ClinicPage",
  props: ['id'],
  data(){
    return{
      clinic:{},
      doctors:[],
      services:[]
    }
  },
  created() {
    this.loadClinic()
    this.loadDoctors()
    this.loadServices()
  },
  methods:{
    async loadClinic(){
      this.clinic = await fetch(
          `${store.getters.getServerUrl}/clinics/${this.id}`
      ).then(response=>response.json())
    },
    async loadDoctors(){
      this.doctors = await fetch(
          `${store.getters.getServerUrl}/clinics/${this.id}/doctors`
      ).then(response=>response.json())
      this.doctors.reverse()
    },
    async loadServices(){
      this.services = await fetch(
          `${store.getters.getServerUrl}/clinics/${this.id}/services`
      ).then(response=>response.json())
      this.services.reverse()
    },
  }
}
</script>

<style scoped>
.clinic-main-info{
  margin-top:4rem;
}
.doctors-wrp{
  display: flex;
  flex-wrap: wrap;
}
.clinic-doctors{
  margin-top:5rem
}
.heading{
  padding-bottom: 2rem;
  font-size: 2rem;
  width: 100%;
  text-align: center;
}
.doctor-card{
  text-align: center;
  margin-bottom: 2rem;
}
.doctor-name{
  margin:1rem 0;
}
.service-card{
  text-align: center;
}
.service-name{
  margin: 1rem 0;
}
</style>
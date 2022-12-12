<template>
  <section class="clinic-main-info">
    <div class="container">
      <div class="row">
        <img class="clinic-img" :src="clinic.ClinicPhoto" style="width: 250px;height: 250px;">
        <div class="clinic-description-wrp">
          <div class="clinic-heading">{{ clinic.ClinicName }}</div>
          <div class="contact-wrp">
            <p class="clinic-telephone">{{ clinic.ClinicTelephone }}</p>
            <p class="clinic-work-time">{{ clinic.ClinicWork_time }}</p>
          </div>
          <p class="clinic-content">{{ clinic.ClinicContent }}</p>
          <p class="clinic-address">{{ clinic.ClinicAddress }}</p>
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
            <img class="doctor-img" style="height: 250px;background-color: darkgrey">
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
          <div class="service-img" style="height: 250px;background-color: darkgrey"></div>
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
    },
    async loadServices(){
      this.services = await fetch(
          `${store.getters.getServerUrl}/clinics/${this.id}/services`
      ).then(response=>response.json())
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
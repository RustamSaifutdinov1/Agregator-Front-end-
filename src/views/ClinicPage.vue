<template>
  <section class="clinic-main-info">
    <div class="container">
      <div class="row">
        <div class="clinic-img" style="width: 250px;height: 250px;background-color: darkgrey"></div>
        <div class="clinic-description-wrp">
          <div class="clinic-heading">Ortus</div>
          <div class="contact-wrp">
            <p class="clinic-telephone">+7(917)498-91-25</p>
            <p class="clinic-work-time">Пн-Пт: 9:00 - 20:00</p>
          </div>
          <p class="clinic-content">Клиника понравилась, очень уютная. Персонал вызывает доверие, сразу же сделали необходимый снимок и все доступно и грамотно объяснили, описали проблемы, ход лечения. </p>
          <p class="clinic-address">ул. Восход, д. 16</p>
        </div>
      </div>
    </div>
  </section>
  <section class="clinic-doctors">
    <div class="container">
      <div class="row">
        <div class="doctors-heading heading">Врачи стоматологии Ortus</div>
        <div class="doctors-wrp">
          <div class="doctor-card col-4">
            <div class="doctor-img" style="height: 250px;background-color: darkgrey"></div>
            <p class="doctor-name">Иванов Иван Иванович</p>
            <p class="doctor-content">Врач терапевт</p>
          </div>
          <div class="doctor-card col-4">
            <div class="doctor-img" style="height: 250px;background-color: darkgrey"></div>
            <p class="doctor-name">Иванов Иван Иванович</p>
            <p class="doctor-content">Врач терапевт</p>
          </div>
          <div class="doctor-card col-4">
            <div class="doctor-img" style="height: 250px;background-color: darkgrey"></div>
            <p class="doctor-name">Иванов Иван Иванович</p>
            <p class="doctor-content">Врач терапевт</p>
          </div>
          <div class="doctor-card col-4">
            <div class="doctor-img" style="height: 250px;background-color: darkgrey"></div>
            <p class="doctor-name">Иванов Иван Иванович</p>
            <p class="doctor-content">Врач терапевт</p>
          </div>
          <div class="doctor-card col-4">
            <div class="doctor-img" style="height: 250px;background-color: darkgrey"></div>
            <p class="doctor-name">Иванов Иван Иванович</p>
            <p class="doctor-content">Врач терапевт</p>
          </div>
          <div class="doctor-card col-4">
            <div class="doctor-img" style="height: 250px;background-color: darkgrey"></div>
            <p class="doctor-name">Иванов Иван Иванович</p>
            <p class="doctor-content">Врач терапевт</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="clinic-services">
    <div class="container">
      <div class="row">
        <div class="services-heading heading">Услуги</div>
        <div class="service-card col-4">
          <div class="service-img" style="height: 250px;background-color: darkgrey"></div>
          <div class="service-text-wrp">
            <p class="service-name">Терапия</p>
            <p class="service-price">12 000руб</p>
          </div>
        </div>
        <div class="service-card col-4">
          <div class="service-img" style="height: 250px;background-color: darkgrey"></div>
          <div class="service-text-wrp">
            <p class="service-name">Терапия</p>
            <p class="service-price">12 000руб</p>
          </div>
        </div>
        <div class="service-card col-4">
          <div class="service-img" style="height: 250px;background-color: darkgrey"></div>
          <div class="service-text-wrp">
            <p class="service-name">Терапия</p>
            <p class="service-price">12 000руб</p>
          </div>
        </div>
        <div class="service-card col-4">
          <div class="service-img" style="height: 250px;background-color: darkgrey"></div>
          <div class="service-text-wrp">
            <p class="service-name">Терапия</p>
            <p class="service-price">12 000руб</p>
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
      clinic:{}
    }
  },
  created() {
    this.loadClinic()
  },
  methods:{
    async loadClinic(){
      this.clinic = await fetch(
          `${store.getters.getServerUrl}/clinics/${this.id}`
      ).then(response=>response.json())
      console.log(this.clinic)
      console.log(this.id)
    }
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
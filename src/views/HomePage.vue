<template>
  <section class="main-catalog">
    <div class="container">
      <div class="row">
        <div class="clinics-wrp">
          <div class="clinic-card" v-for="clinic in listClinics" v-bind:key="clinic.id">
            <div class="clinic-img" style="width: 250px;height: 250px;background-color: darkgrey"></div>
            <div class="clinic-description-wrp">
              <div class="clinic-heading">{{clinic.ClinicName}}</div>
              <div class="contact-wrp">
                <p class="clinic-telephone">{{ clinic.ClinicTelephone }}</p>
                <p class="clinic-work-time">{{ clinic.ClinicWork_time }}</p>
              </div>
              <p class="clinic-content">{{ clinic.ClinicContent }}</p>
              <p class="clinic-address">{{ clinic.ClinicAddress }}</p>
              <div @click="goTo(clinic.id)">Подробнее</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import store from "@/store";
import router from "@/router";

export default {
  name: "HomePage",
  data(){
    return{
      listClinics:[]
    }
  },
  components:{},
  created() {
    this.loadClinics()
  },
  methods:{
    async loadClinics(){
      this.listClinics = await fetch(
          `${store.getters.getServerUrl}/clinics`
      ).then(response=>response.json())
    },
    goTo(id){
      this.$router.push({name:'clinic',params:{id:id}})
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <header>
    <div class="logo-header">
      <div class="container">
        <div class="row">
          <div class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 48 48"><title>medical</title><path d="M31,46H17a3,3,0,0,1-3-3V34H5a3,3,0,0,1-3-3V17a3,3,0,0,1,3-3h9V5a3,3,0,0,1,3-3H31a3,3,0,0,1,3,3v9h9a3,3,0,0,1,3,3V31a3,3,0,0,1-3,3H34v9A3,3,0,0,1,31,46ZM18,42H30V30H42V18H30V6H18V18H6V30H18V42Z" fill="#2161ff"/><rect width="48" height="48" fill="none"/></svg>
          </div>
          <div class="header-heading">
            <span>All</span>Clinics
          </div>
        </div>
      </div>

    </div>
    <div class="menu-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <ul class="menu-list">
              <li class="list-item">Стоматологии</li>
              <li class="list-item">Глазные клиники</li>
              <li class="list-item">Детские клиники</li>
              <li class="list-item">Больницы</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>
  .menu-header{
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
  }
  .menu-list{
    display: flex;
    list-style: none;
    justify-content: space-between;
    margin: 0;
  }
  .list-item{
    padding: 1rem 0;
    text-align: center;
    width: 25%;
  }
  .logo-header{
    padding: 3rem 0;
  }
  .header-heading{
    font-size: 3rem;
    color: rgb(33, 97, 255);
  }
  .header-heading span{
    color:red
  }
  .logo-header .logo{
    margin: auto 1rem auto 0;
  }
  .logo-header .row{
    justify-content: center;
  }
</style>
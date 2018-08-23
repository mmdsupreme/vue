<template>
  <v-container class="card"  fluid grid-list-xl>
    <v-layout wrap align-center>
<v-flex>
  <v-btn class="btn-back"
         block
         color="white"
         :to="'/'"><v-icon dark left>arrow_back</v-icon>Назад</v-btn>
  <v-card class="nav-card">
    <div class="nav">
      <div class="menu-main">
        <div class="menu">
          <ul>
            <li>
              <router-link to="/infocar" >
                <h3><v-icon large>error_outline</v-icon></h3>
                <span class="aaa">Информация о ТС</span>
              </router-link>
            </li>
          </ul>
          <ul>
            <li>
              <router-link to="/photo" >
                <h3><v-icon large>photo_camera</v-icon></h3>
                <span class="aaa">Фото/Видео</span>
              </router-link>
            </li>
          </ul>
          <ul>
            <li>
              <router-link to="/damages" >
                <h3><v-icon large>share</v-icon></h3>
                <span class="aaa">Повреждения</span>
              </router-link>
            </li>
          </ul>
          <ul>
            <li>
              <router-link to="/result" >
                <h3><v-icon large>event_note</v-icon></h3>
                <span class="aaa">Результат осмотра</span>
              </router-link>
            </li>
          </ul>
          <ul>
            <li>
              <router-link to="/complete" >
                <h3><v-icon large>check_circle_outline</v-icon></h3>
                <span class="aaa">Завершено</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </v-card>
</v-flex>
    </v-layout>
  </v-container>
</template>
<style scoped>
  .card{
    padding:24px 24px 0px;
  }
  .btn-back{
    color: black;
    width: 845px;
    margin: 5px;
  }
  .menu{
    display: flex;
    position: absolute;
    top: 35px;
    left: 10px;
  }
  .menu-main {
    list-style: none;
    margin: 4px 0 5px;
    padding: 25px 0 5px;
    text-align: center;
    background: white;
  }
  .menu-main li {
    display: inline-block;
  }
  .menu-main li:after {
    content: "|";
    color: #606060;
    vertical-align:top;
  }
  .menu-main li:last-child:after {
    content: none;
  }
  .menu-main a {
    text-decoration: none;
    font-family: 'Ubuntu Condensed', sans-serif;
    letter-spacing: 1px;
    position: relative;
    padding-bottom: 20px;
    margin: -12px 50px 0 5px;
    font-size: 11px;
    text-transform: uppercase;
    display: inline-block;
    transition: color .2s;
  }
  .menu-main a,
  .menu-main a:visited {
    color: #9d999d;
  }
  .menu-main a.current,
  .menu-main a:hover{
    color: red;
  }
  .menu-main a:before,
  .menu-main a:after {
    content: "";
    position: absolute;
    height: 2px;
    top: auto;
    right: 50%;
    bottom: -5px;
    left: 50%;
    background: red;
    transition: .3s;
  }
  .menu-main a:hover:before,
  .menu-main .current:before {
    left: 0;
  }
  .menu-main a:hover:after,
  .menu-main .current:after {
    right: 0;
  }
  @media (max-width: 550px) {
    .menu-main {padding-top: 0;}
    .menu-main li {display:flex;}
    .menu-main li:after {content: none;}
    .menu-main a {
      padding: 25px 0 20px;
      margin: 0 30px;
    }
  }
  .nav-card{
    display: flex;
    height: 90px;
    background: white;
    margin: 6px;
    width: 845px;
  }
</style>

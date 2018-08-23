<template>
  <div class="main">
    <div class="main-card">
    <v-container class="card">
      <v-layout row>
        <v-flex>
          <form class="search">
            <input type="text" v-model="search" placeholder="Искать здесь...">
            <button class="btn-block"><v-icon>youtube_searched_for</v-icon></button>
          </form>
          <p class="text--secondary mb-3">Найдено:</p>
          <div v-on:click="selected=contracts"
               v-for="contracts in filteredCars"
               :key="contracts.id">
            <v-card
            tabindex="1"
            class="elevation-4 mb-3">
              <v-flex xs4>
              </v-flex>
            <div class="table">
              <v-flex xs8>
                <v-card-text>
                  <h2> {{contracts.car.make}} {{contracts.car.model}}</h2>
                  <p></p>
                  <p><b>{{contracts.car.licensePlate}} |  VIN: {{contracts.car.vin}}
                    <br> {{contracts.client.clientName}}</b></p>
                  <p class="status-info"><b>{{contracts.creditAgreementNumber}}</b>
                    <br/> {{contracts.creditAgreementStatus}}</p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-flex>
            </div>
          </v-card>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    </div>
<div class="main-info">
  <div v-if="selected">
    <v-layout class="info">
      <v-flex>
        <v-card class="info-car">
          <v-card-media
            class="white--text"
            height="200px"
            src="../assets/background.png">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{selected.car.make}} {{selected.car.model}}</span>
                  <p></p>
                  <p></p>
                  <p></p>
                  <div class="write">
                    <p>Год <br> <span class="grey--text">{{selected.car.manufactureYear}}</span></p>
                  <p> Л/С <br> <span class="grey--text">{{selected.car.enginePower}}</span></p>
                  <p> Гос.Номер <br> <span class="grey--text">{{selected.car.licensePlate}}
                  </span></p>
                    <p> Цвет: <br><span class="grey--text">{{selected.car.color}}</span> </p>
                  <p> VIN: <br><span class="grey--text">{{selected.car.vin}}</span></p>
                    <v-btn class="btn-document" outline color="#1F2229">Документы</v-btn>
                  </div>
                  <v-btn
                    v-on:click="selected=ad"
                    class="btn-close"
                    color="crimson" icon>x</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div class="card-info">
              <span class="grey--text">Заемщик</span><br>
              <span><p>{{selected.client.clientName}}<p></p></span><br>
              <span class="grey--text">Адрес регистрации</span>
              <p>{{selected.client.clientAddress}}</p>
            </div>
            <div class="text-two">
              <span class="grey--text">Номер кредитного договора</span><br>
              <span><p>{{selected.creditAgreementNumber}}<p></p></span><br>
              <span class="grey--text">Статус кредитного договора</span>
              <p>{{selected.creditAgreementStatus}}</p>
            </div>
            <div class="text-three">
              <span class="grey--text">Сумма долга</span><br>
              <span><p>{{selected.totalDebt}}<p></p></span><br>
              <span class="grey--text">Подстатус кредитного договора</span>
              <p>{{selected.creditAgreementSubStatus}}</p>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn
              :to="'/infocar'"
              class="btn-see"
              color="red">Начать осмотр</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';


export default {
  data() {
    return {
      search: '',
      info: null,
      visible: false,
      selected: null,
    };
  },
  computed: {
    filteredCars() {
      let result = this.info;
      if (this.search) {
        result = result.filter((item) => {
          if (item.car.make.indexOf(this.search) !== -1
            || item.car.model.indexOf(this.search) !== -1
            || item.car.licensePlate.indexOf(this.search) !== -1
            || item.car.vin.indexOf(this.search) !== -1
            || item.client.clientName.indexOf(this.search) !== -1) {
            return item;
          }
        });
      }
      return result;
    },
  },
  mounted() {
    axios.get('api/v1/contracts', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user-token')}`,
      },
    })
      .then(response => (this.info = response.data));
  },
};
</script>
<style lang="scss" scoped>
  .main {
    display: flex;
    $color:#DA2337 !global;
    $bagr:#1F2229 !global;
  }
  .card-info{
    width: 40%;
  }
  .text-two{
    width: 30%;
  }
  .text-three{
    width: 30%;
  }
  .main-info{
    width: 50%;
    margin: 10px;
  }
  .elevation-4.mb-3{
    outline: none;
    width: 750px;
    height: 115px;
    cursor: pointer;
  }

  input:focus {
   border: 1px solid $color;

  }
  .elevation-4.mb-3:focus{
    background:$color;
    color: white;
  }
  .btn-document{
    position: absolute;
    left: 680px;
    top: 130px;
    color: white;
  }
  .btn-close{
   position: absolute;
    left: 750px;
    top: 30px;
    color: white;
  }
  .white--text{
    background: $bagr;
  }
  .search{
    width: 750px;
    height: 50px;
  }
  * {box-sizing: border-box;}
  form {
    position: relative;
    width: 500px;
    margin: 0 auto;
    background: white;
  }
  input, button {
    border: none;
    outline: none;
    background: transparent;

  }
  input {
    width: 100%;
    height: 42px;
    padding-left: 15px;
  }
  .btn-block{
    height: 42px;
    width: 42px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
  button:before {
    font-family: FontAwesome;
    font-size: 16px;
    color: $color;
  }

  .status-info{
    position: relative;
    width: 150px;
    left: 578px;
    top: -80px;
  }


  .info{
    display: flex;
    justify-content: flex-end;
  }
  .write{
    display:flex;
    justify-content: flex-start;
  }
  .write>p{
    padding: 10px;
    border-right: 2px solid grey;
  }
  .btn-see{
    color: white;
  }
  @media (max-width: 768px) {
    .main {
      flex-direction: column;
    }
    .elevation-4.mb-3{
      width: 100%;
      height: auto;
    }
    .status-info{
      position: initial;
    }
    .search{
      width: 100%;
      margin-bottom: 15px;
    }
  }
  .headline{
    color:white;
  }
</style>

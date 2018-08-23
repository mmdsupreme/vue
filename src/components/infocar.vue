<template>
  <div class="main">
    <menus></menus>
    <v-container class="card" fluid grid-list-xl>
      <v-layout wrap align-center>
        <v-flex>
          <v-card
            class="elevation-4 mb-3">
            <h2>Информация об автомобиле</h2>
            <div class="fields-wrapper">
              <v-flex xs6 v-for="ad in info"
                      :key="ad.id" class="item">
                <v-combobox
                  :items="ad.values"
                  item-text="name"
                  item-value="id"
                  :label="ad.name"
                ></v-combobox>
              </v-flex>
            </div>
            <v-btn
              :to="'/photo'"
              class="btn-next"
              color="red">Продолжить</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios';
import Menus from '../menus.vue';

export default {
  components: {
    Menus,
  },
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios.get('api/v1/inspection/parameters', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user-token')}`,
      },
    })
      .then(response => (this.info = response.data));
  },
};

</script>
<style scoped>
  .main{
    display: flex;
    flex-direction: column;
    width: 900px;
    color: black;
  }
  .elevation-4.mb-3{
    padding: 40px;
    margin: 0 5px;
  }
  .fields-wrapper {
    display: flex;
    flex-wrap: wrap;
    color: grey;
  }
  .fields-wrapper .item {
    width: 50%;
  }
  .btn-next{
    color: white;
  }
</style>

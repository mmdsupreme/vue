<template>
  <div class="main">
  <div>
    <menus></menus>
    <!--Лист с итемами-->
    <v-card class="elevation-4 mb-3">
      <div  class="item-container">
        <v-card
          v-on:click.native="selected=component"
          v-for="component in info.components"
          :key="component.id"
          tabindex="1"
          class="item">
          <h3>{{component.serialNumber}} . {{component.name}}</h3>
          <v-icon class="icon-damage" color="green">check_circle</v-icon>
        </v-card>
      </div>
    </v-card>
    <!--Карточка справа-->
    <div class="main-info">
      <div v-if="selected">
      <v-layout class="info">
        <v-flex>
          <v-card class="info-car">
            <v-card-media
              class="white--text"
              height="80px"
              src="/src/assets/background.png">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">{{selected.serialNumber}} . {{selected.name}}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-title>
              <div class="card-info">
                <span class="grey--text">
                  <h2>Фотографии</h2>
                </span><br>
                <!-- Блок фоток-->
                <div class="img-load">
                  <div class="item1">
                    <div class="img-container">
                      <img :src="url" alt="" v-if="url"/>
                      <img src="../assets/03.expert.inspection.photo.png" alt="" v-else/>
                      <label class="loadfile">
                        <input class="inputfile" type="file" @change="onFileSelected">
                      </label>
                    </div>
                  </div>
                <div class="item1">
                  <div class="img-container">
                    <img :src="url" alt="" v-if="url" />
                    <img src="../assets/03.expert.inspection.photo.png" alt="" v-else/>
                    <label class="loadfile">
                      <input class="inputfile" type="file" @change="onFileSelected">
                    </label>
                </div>
              </div>
                <div class="item1">
                  <div class="img-container">
                    <img :src="url" alt="" v-if="url"/>
                    <img src="../assets/03.expert.inspection.photo.png" alt=""  v-else />
                    <label class="loadfile"><input class="inputfile" type="file" @change="onFileSelected"></label>
                  </div>
                </div>
                </div>
                <span class="grey--text">
                  <h2>Тип повреждения</h2>
                </span><br>
                <!--Блок чекбоксов-->
                <div class="piker">
                  <v-checkbox
                  class="check-damage"
                  v-for="damage in info.damages"
                  :key="damage.id"
                  color="grey"
                  :label="damage.name">
                  </v-checkbox>
                </div>
                <span class="grey--text">
                  <h2>Комментарий</h2>
                </span><br>
                <v-form v-model="valid">
                  <v-text-field
                    label="Введите текст комментария"
                    required>
                  </v-text-field>
                </v-form>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn
                :to="'/infocar'"
                class="btn-see"
                color="red">Далее</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      </div>
    </div>
    </div>
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
      selected: null,
      selectedFile: null,
      url: null,
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.url = URL.createObjectURL(this.selectedFile);
    },
    onUpload() {
      const formData = new FormData();
      formData.append(this.selectedFile.name, this.selectedFile);
      formData.append('name', 'files');
      axios.post('api/v1/files/create', {
        count: 1,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user-token')}`,
        },
      })
        .then(() => axios.put('api/v1/files', formData, {
          headers: {
            'content-type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('user-token')}`,
          },

          onUploadProgress: (progressEvent) => {
            console.log(progressEvent.loaded / progressEvent.total);
          },
        }));
    },
  },
  mounted() {
    axios.get('api/v1/inspection/script', {
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
    width: 902px;
    color: black;
  }
  .elevation-4.mb-3{
    background: white;
    padding: 30px;
    margin:25px 30px;
  }
  .item{
    margin: 30px;
    width:40%;
    padding: 15px;
    cursor: pointer;
  }
  .item-container{
    display: flex;
    flex-wrap: wrap;
  }
  .main-info{
  position: fixed;
  top: 85px;
  left: 870px;
  display: flex;
  width: 45%;
  margin: 30px;
}
  .info{
  display: flex;
  justify-content: flex-end;
  }
  .piker{
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  }
  .check-damage{
  width: 25%;
  margin-top: 0;
}
  .icon-damage{
  position: absolute;
  left: 280px;
  top: 13px;
  margin: 1px;
  }
  .loadfile{
  position: absolute;
  width: 150px;
  height:100px;
  top: 10px;
  left: 10px;
  bottom: 10px;
  }
  .inputfile{
  visibility: hidden;
  }
  img{
  width: 150px;
  height: 100px;
  }
  .item1{
  font-size: 12px;
  display: flex;
  width: 50%;
  }
  .img-container {
  cursor: pointer;
  position: relative;
  top: -20px;
  margin: 5px;
  width: 150px;
  height: 100px;
  }
  .img-load{
  display: flex;
  }
  label{
  cursor: pointer;
  }
  label:hover{
  border: 2px solid #DA2337;
  }


  .item:focus{
  background:#DA2337;
  color: white;
  }
  .info-car{
  background: white;
  }
  .btn-see{
  color: white;
  }
  img{
  margin: 10px;
  }
  .white--text{
  background: #1F2229;
  }
</style>

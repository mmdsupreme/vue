<template>
  <div class="main">
  <menus></menus>
    <v-card class="elevation-4 mb-3">
      <h2>Общий вид</h2>
        <div class="item-container">
            <div class="item">
            <div class="img-container">
            <img :src="url" alt="" v-if="url"/>
            <img src="../assets/03.expert.inspection.photo.png" alt=""  v-else />
            <v-btn v-if="url" icon color="grey" small>
              <v-icon color="white">clear</v-icon>
            </v-btn>
            <label class="loadfile">
              <input class="inputfile" type="file" @change="onFileSelected">
            </label>
          </div>
            <h3>Спереди слева</h3>
            </div>
          <div class="item">
            <div class="img-container">
            <img :src="url" alt="" v-if="url"/>
            <img src="../assets/03.expert.inspection.photo.png" alt=""  v-else/>
              <v-btn v-if="url" icon color="grey" small>
                <v-icon color="white">clear</v-icon>
              </v-btn>
            <label class="loadfile">
              <input class="inputfile" type="file" @change="onFileSelected">
            </label>
          </div>
            <h3>Сзади слева</h3>
          </div>
            <div class="item">
              <div class="img-container">
            <img :src="url" alt="" v-if="url"/>
            <img src="../assets/03.expert.inspection.photo.png" alt="" v-else/>
                <v-btn v-if="url" icon color="grey" small>
                  <v-icon color="white">clear</v-icon>
                </v-btn>
            <label class="loadfile">
              <input class="inputfile" type="file" @change="onFileSelected">
            </label>
          </div>
              <h3>Спереди справа</h3>
            </div>
              <div class="item">
                <div class="img-container">
            <img :src="url" alt="" v-if="url"/>
            <img src="../assets/03.expert.inspection.photo.png" alt="" v-else/>
                  <v-btn v-if="url" icon color="grey" small>
                    <v-icon color="white">clear</v-icon>
                  </v-btn>
            <label class="loadfile">
              <input class="inputfile" type="file" @change="onFileSelected">
            </label>
          </div>
          <h3>Сзади справа</h3>
              </div>
                <div class="item">
                  <div class="img-container">
            <img :src="url" alt="" v-if="url"/>
            <img src="../assets/03.expert.inspection.photo.png" alt="" v-else />
                    <v-btn v-if="url" icon color="grey" small>
                      <v-icon color="white">clear</v-icon>
                    </v-btn>
            <label class="loadfile">
              <input class="inputfile" type="file" @change="onFileSelected">
            </label>
          </div>
          <h3>Круговое видео</h3>
      </div>
        </div>
      <h2>Подробно</h2>
      <div class="item-container">
        <div class="item">
          <div class="img-container">
          <img :src="url" alt="" v-if="url"/>
          <img src="../assets/03.expert.inspection.photo.png" alt="" v-else/>
            <v-btn v-if="url" icon color="grey" small>
              <v-icon color="white">clear</v-icon>
            </v-btn>
          <label class="loadfile">
            <input class="inputfile" type="file" @change="onFileSelected">
          </label>
        </div>
          <h3>Фото VIN кода</h3>
        </div>
          <div class="item">
            <div class="img-container">
          <img :src="url" alt="" v-if="url" />
          <img src="../assets/03.expert.inspection.photo.png" alt="" v-else/>
          <v-btn v-if="url" icon color="grey" small>
            <v-icon color="white">clear</v-icon>
          </v-btn>
          <label class="loadfile">
            <input class="inputfile" type="file" @change="onFileSelected">
          </label>
        </div>
            <h3>Фото показаний одометра <br>
          при включенном<br>
          зажигании (при наличии<br>
          ключей от ТС)</h3>
          </div>
            <div class="item">
              <div class="img-container">
          <img :src="url" alt="" v-if="url"/>
          <img src="../assets/03.expert.inspection.photo.png" alt="" v-else/>
          <v-btn v-if="url" icon color="grey" small>
            <v-icon color="white">clear</v-icon>
          </v-btn>
          <label class="loadfile">
            <input class="inputfile" type="file" @change="onFileSelected">
          </label>
        </div>
              <h3>Фото задней <br> части салона</h3>
            </div>
              <div class="item">
                <div class="img-container">
          <img :src="url" alt="" v-if="url"/>
          <img src="../assets/03.expert.inspection.photo.png" alt="" v-else/>
          <v-btn v-if="url" icon color="grey" small>
            <v-icon color="white">clear</v-icon>
          </v-btn>
          <label class="loadfile">
            <input class="inputfile" type="file" @change="onFileSelected">
          </label>
        </div>
                <h3>Фото <br> передней части <br> салона</h3>
              </div>
                <div class="item">
                  <div class="img-container">
          <img :src="url" alt="" v-if="url"/>
          <img src="../assets/03.expert.inspection.photo.png" alt=""  v-else />
           <v-btn v-if="url" icon color="grey" small>
             <v-icon color="white">clear</v-icon>
           </v-btn>
          <label class="loadfile">
            <input class="inputfile" type="file" @change="onFileSelected">
          </label>
        </div>
                  <h3>Фото шин и дисков</h3>
                </div>
                  <div class="item">
                    <div class="img-container">
          <img :src="url" alt="" v-if="url" />
          <img src="../assets/03.expert.inspection.photo.png" alt="" v-else />
          <v-btn v-if="url" icon color="grey" small>
            <v-icon color="white">clear</v-icon>
          </v-btn>
          <label class="loadfile">
            <input class="inputfile" type="file" @change="onFileSelected">
          </label>
        </div>
        <h3>Фото подкапотного <br> пространства</h3>
         </div>
      </div>
      <v-btn  :to="'/damages'" class="btn-next" color="red">Продолжить</v-btn>
    </v-card>
  </div>
  <!--<button @click="onUpload">Загрузить</button>-->
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
};
</script>
<style lang="scss" scoped>
  .loadfile{
    position: absolute;
    width: 150px;
    height:100px;
    top: 0;
    bottom: 0;
  }
  .inputfile{
    visibility: hidden;
  }
  .main{
    display: flex;
    flex-direction: column;
    width: 902px;
    color: black;
  }
  .elevation-4.mb-3{
    background: white;
    padding: 40px;
    margin:25px 30px;
  }
  .btn-next{
    color: white;
  }
  img{
    width: 150px;
    height: 100px;
  }
  .item-container{
    display: flex;
    flex-wrap: wrap;
  }
  .item{
    font-size: 12px;
    display: flex;
    width: 50%;
    border-bottom: 3px solid whitesmoke;
  }
  h3{
    margin: 10px;
    position: relative;
    top: 30px;
  }
  h2{
    margin: 30px;
  }
  .img-container {
    cursor: pointer;
    position: relative;
    margin: 20px;
    width: 150px;
    height:100px;
    button {
      cursor: pointer;
      display: none;
      position: relative;
      bottom: 124px;
      left: 127px;
    }
    &:hover button {
      display: block;
    }
  }
  label{
    cursor: pointer;
  }
  label:hover{
    border: 2px solid #DA2337;
  }
</style>

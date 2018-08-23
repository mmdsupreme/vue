<template>
  <v-container class="block" fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>

        <div class="main">
        <img class="background" src="../assets/auth_auto.png">
        <div class="auth">
          <form class="login" @submit.prevent="loginn">
          <img class="logo" src="../assets/logo.png">
          <v-toolbar-title class="text">ВХОД В СИСТЕМУ</v-toolbar-title>
          <v-card-text>
            <v-form class="login" @submit.prevent="login">
              <v-text-field class="form-login"
                            prepend-icon="person"
                            name="email"
                            label="Логин"
                            type="text"
                            v-model="login"
                            :rules="emailRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Пароль"
                type="password"
                :counter="6"
                v-model="password"
                :rules="passwordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="btn-login"
                   dark color="red"
                   type="submit"
            >Войти</v-btn>
          </v-card-actions>
          </form>
        </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style scoped>
.login{
  width: 400px;
}
  .auth{
    display:flex;
    justify-content:flex-end;
    flex-basis: 500px;
  }
  .btn-login{
    width: 200px;
    height: 45px;
    color: white;
  }
  .text{
    font-size: 30px;
  }
  @media (max-width: 768px) {
    .background{
      display: none;
    }
  }
  .background{
    position:fixed;
    left:0;
    top:0;
    width:50%;
  }
  .logo{
    position:relative;
    left:20px;
    top: -10px;
    width: 270px
  }
</style>


<script>
// eslint-disable-next-line
import { AUTH_REQUEST } from '../store/actions/auth';

export default {
  name: 'login',
  data() {
    return {
      login: 'admin',
      password: 'P@$$w0rd',
      valid: false,
      emailRules: [
        v => !!v || 'Обязательное поле',
      ],
      passwordRules: [
        v => !!v || 'Обязательное поле',
        v => /\S/.test(v) || 'Нужно чтобы хотя бы один символ не был пробельным',
      ],
    };
  },
  methods: {
    loginn() {
      const { login, password } = this;
      this.$store.dispatch(AUTH_REQUEST, { login, password }).then(() => {
        this.$router.push('/');
      });
    },
  },
};
</script>

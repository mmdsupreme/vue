<template>
  <div class="navigation" >
    <ul>
      <li>
        <router-link class="brand" to="/">
          <img src="../assets/logo.png" width="250px"/>
        </router-link>
      </li>
    </ul>
    <ul>
      <li v-if="isAuthenticated" @click="logout">
        <span class="logout">Выйти</span>
      </li>
    </ul>
    <div class="menu-main">
    <div class="menu">
    <ul>
      <li>
        <router-link to="/" >
          <span v-if="isAuthenticated" class="aaa">Изъятие</span>
        </router-link>
      </li>
    </ul>
    <ul>
      <li>
        <router-link to="/" >
          <span v-if="isAuthenticated" class="aaa">Контроль</span>
        </router-link>
      </li>
    </ul>
    <ul>
      <li>
        <router-link to="/" >
          <span v-if="isAuthenticated" class="aaa">Рекламации</span>
        </router-link>
      </li>
    </ul>
    <ul>
      <li>
        <router-link to="/" >
          <span v-if="isAuthenticated" class="aaa">Отчеты</span>
        </router-link>
      </li>
    </ul>
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  a {
    color: black;
    text-decoration: none;
    font-weight:bold
  }
  .navigation {
    position: static;
    display: flex;
    color: black;
    align-items: center;
    background-color: white;
    padding: 5px;

    ul{
      display: flex;
      &:first-child{
        flex-grow: 1;
      }
      li {
        padding-right: 1em;
      }
    }
  }
  .brand {
    display: flex;
    align-items: center;

  }
  .logout {
    &:hover {
      cursor: pointer;
    }
  }
  .menu{
    display: flex;
    position: absolute;
    top: 35px;
    left: 280px;
  }
  .menu-main {
    list-style: none;
    margin: 40px 0 5px;
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
    display: inline-block;
    vertical-align:top;
  }
  .menu-main li:last-child:after {
    content: none;
  }
  .menu-main a {
    text-decoration: none;
    font-family: 'Ubuntu Condensed', sans-serif;
    letter-spacing: 2px;
    position: relative;
    padding-bottom: 20px;
    margin: 0 20px 0 5px;
    font-size: 13px;
    text-transform: uppercase;
    display: inline-block;
    transition: color .2s;
  }
  .menu-main a,
  .menu-main a:visited {
    color: #9d999d;
  }
  .menu-main a.current,
  .menu-main a:focus{
    color: red;
  }
  .menu-main a:before,
  .menu-main a:after {
    content: "";
    position: absolute;
    height: 4px;
    top: auto;
    right:50%;
    bottom: -5px;
    left:50%;
    background:red;
    transition:.8s;
  }
  .menu-main a:focus:before,
  .menu-main .current:before {
    left: 0;
  }
  .menu-main a:focus:after,
  .menu-main .current:after {
    right: 0;
  }
  @media (max-width: 550px) {
    .menu-main {padding-top: 0;}
    .menu-main li {display: block;}
    .menu-main li:after {content: none;}
    .menu-main a {
      padding: 25px 0 20px;
      margin: 0 30px;
    }
  }
  @media (max-width: 768px) {
    .brand{
      margin-left: 16px;
    }
    ul{
      padding-left: 0;
    }
  }

</style>

<script>

import { mapGetters } from 'vuex';
// eslint-disable-next-line
import { AUTH_LOGOUT } from '../store/actions/auth';

export default {
  name: 'navigation',
  methods: {
    logout() {
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push('/login'));
    },
  },
  computed: {

    ...mapGetters(['getProfile', 'isAuthenticated']),
  },
};
</script>

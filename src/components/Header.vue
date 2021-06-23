<template>
  <header>
    <div class="container">
      <h1>TMDBAPI</h1>
      <nav>
        <ul>
          <li @click="nowActived(0)">
            <router-link :to="{ name: 'Home' }"> Home </router-link>
          </li>
          <li @click="nowActived(1)">
            <router-link :to="{ name: 'Favourites' }"> Favoritos </router-link>
          </li>
          <li @click="nowActived(2)">
            <router-link :to="{ name: 'About' }"> Sobre </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      linkActive: null,
    };
  },
  mounted() {
    this.nowActived(0);
  },
  //   created() {
  //     window.addEventListener("scroll", this.scrollPage);
  //   },
  methods: {
    nowActived(value) {
      this.linkActive = value;
      if (this.linkActive === 0) {
        document.querySelector("header").style.position = "fixed";
      } else if (this.linkActive === 1 || this.linkActive === 2) {
        document.querySelector("header").style.position = "unset";
      }
    },
    // scrollPage() {
    // },
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  top: 0;
  left: 0;
}
.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  h1 {
    font-size: 4rem;
  }
  nav {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    ul {
      display: flex;
      align-items: center;
    }
    a {
      font-size: 1.6rem;
      padding: 1rem 2rem;
      border-bottom: 2px solid transparent;
      color: #fff;
      font-weight: 600;
      transition: all ease 0.3s;
      &:hover {
        border-bottom: 2px solid #f00;
        color: #f00;
      }
      &.router-link-exact-active {
        border-bottom: 2px solid #f00;
        color: #f00;
      }
    }
  }
}
</style>

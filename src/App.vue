<template>
  <div id="app">
    <Header />
    <main>
      <router-view class="container" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
* {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body,
h1,
h2,
h3,
ul,
li,
a,
p {
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #000;
}

main {
  flex: 1;
  display: flex;
  .container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    flex: 1;
  }
}

.sr-only {
  position: absolute;
  height: 1px;
  width: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #000;
  color: #fff;
}
</style>

<template>
  <div id="app">
    <main>
      <router-view class="container" />
    </main>
  </div>
</template>

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
    max-width: 1100px;
    margin: 0 auto;
    flex: 1;
  }
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

@media (max-width: 1100px) {
  .container {
    padding: 0px 5px;
  }
}
</style>

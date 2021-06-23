<template>
  <section>
    <div class="banner">
      <div class="areaInfosMovie">
        <h1>Bem vindo(a)!</h1>
        <p>
          Informações sobre seus filmes e séries favoritos você encontra aqui!
        </p>
      </div>
      <div class="areaSearch">
        <SearchArea />
      </div>
    </div>
    <div class="areaMovies">
      <button class="btnLeft">
        <img src="../assets/arrow-left.png" alt="arrowLeftIcon" />
      </button>
      <h2>Populares</h2>
      <MovieHome />
      <div class="btnRight">
        <img src="../assets/arrow-right.png" alt="arrowRightIcon" />
      </div>
    </div>
  </section>
</template>

<script>
import SearchArea from "@/components/SearchArea.vue";
import MovieHome from "@/components/MovieHome.vue";

export default {
  name: "Home",
  components: {
    SearchArea,
    MovieHome,
  },
};
</script>

<style lang="scss" scoped>
section {
  background: gray;
  .banner {
    background: green;
    min-height: 60rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .areaInfosMovie {
      width: 100%;
      max-width: 110rem;
      margin: 0 auto;
      margin-bottom: 5rem;
      padding: 0 1rem;
      h1 {
        font-size: 7rem;
      }
      p {
        font-size: 3rem;
      }
    }
    .areaSearch {
      width: 100%;
      max-width: 110rem;
      margin: 0 auto;
      margin-bottom: 5rem;
      padding: 0 1rem;
    }
  }
  .areaMovies {
    background: orange;
    position: relative;
    min-height: 30rem;
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    .btnLeft,
    .btnRight {
      outline: none;
      border: none;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
      background: rgba(255, 255, 255, 0.5);
      display: inline-flex;
      align-items: center;
      position: absolute;
      top: 50%;
      border-radius: 50%;
      padding: 1rem;
      cursor: pointer;
      img {
        width: 2rem;
      }
    }
    .btnLeft {
      left: 0.5rem;
    }
    .btnRight {
      right: 0.5rem;
    }
    h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
  }
}
</style>

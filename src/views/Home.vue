<template>
  <section>
    <div
      class="banner"
      :style="{
        backgroundImage: `url(${randomMovie})`,
      }"
    >
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
      <h2>Populares</h2>
      <div class="areaslideMovies">
        <button class="btnLeft" @click="moveSlide(1)">
          <img src="../assets/arrow-left.png" alt="arrowLeftIcon" />
        </button>
        <div class="areaWithAllMoviesHome">
          <MovieHome
            v-for="(movie, index) in movies"
            :key="index"
            :post="'http://image.tmdb.org/t/p/original' + movie.poster_path"
            :title="movie.title"
            :vote="movie.vote_average"
            :indexMovie="index"
          />
        </div>
        <div class="btnRight" @click="moveSlide(2)">
          <img src="../assets/arrow-right.png" alt="arrowRightIcon" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SearchArea from "@/components/SearchArea.vue";
import MovieHome from "@/components/MovieHome.vue";
import apiKey from "../apiKey.js";

export default {
  name: "Home",
  data() {
    return {
      el: null,
      papel: null,
      page: Math.floor(Math.random() * 500),
      movies: null,
      randomMovie: null,
    };
  },
  components: {
    SearchArea,
    MovieHome,
  },
  created() {
    this.fetchAPI();
  },
  mounted() {
    document.querySelector(".areaWithAllMoviesHome").style.marginLeft =
      "calc(0rem)";
    this.el = document.querySelector(".areaWithAllMoviesHome");
  },
  methods: {
    fetchAPI() {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey.apiKey}&language=pt-BR&page=${this.page}`
      )
        .then((r) => r.json())
        .then((r) => {
          this.movies = r.results;
          this.randomMovie =
            "http://image.tmdb.org/t/p/original" + r.results[10].backdrop_path;
        });
    },
    moveSlide(value) {
      if (document.body.clientWidth >= 500) {
        let marginSlide = this.el.style.marginLeft;
        this.moveSlideInfos(value, marginSlide, 37.1);
      } else {
        let marginSlide = this.el.style.marginLeft;
        this.moveSlideInfos(value, marginSlide, 14.84);
      }
    },
    moveSlideInfos(value, marginSlide, number) {
      if (marginSlide === "calc(0rem)") {
        if (value === 1) {
          this.el.style.marginLeft = `calc(${marginSlide} + 0rem`;
        } else {
          this.el.style.marginLeft = `calc(${marginSlide} - ${number}rem`;
        }
      } else if (marginSlide === "calc(-371rem)") {
        if (value === 1) {
          this.el.style.marginLeft = `calc(${marginSlide} + ${number}rem`;
        } else {
          this.el.style.marginLeft = `calc(${marginSlide} - 0rem`;
        }
      } else {
        if (value === 1) {
          this.el.style.marginLeft = `calc(${marginSlide} + ${number}rem`;
        } else {
          this.el.style.marginLeft = `calc(${marginSlide} - ${number}rem`;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 5rem;
  .banner {
    background: #000;
    min-height: 60rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-position: center;
    background-size: cover;
    .areaInfosMovie {
      width: 100%;
      max-width: 110rem;
      margin: 0 auto;
      margin-bottom: 5rem;
      padding: 0 1rem;
      h1 {
        font-size: 8rem;
        font-weight: 600;
        -webkit-text-stroke-width: 0.3rem;
        -webkit-text-stroke-color: #000;
      }
      p {
        font-weight: 600;
        font-size: 3.2rem;
        -webkit-text-stroke-width: 0.1rem;
        -webkit-text-stroke-color: #000;
      }
    }
    .areaSearch {
      width: 100%;
      max-width: 110rem;
      margin: 0 auto;
      margin-bottom: 7rem;
      padding: 0 1rem;
    }
  }
  .areaMovies {
    min-height: 30rem;
    padding: 1rem;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    h2 {
      font-size: 3rem;
      margin-bottom: 2rem;
    }
    .areaslideMovies {
      position: relative;
      overflow: hidden;
      border-radius: 0.5rem;
      .btnLeft,
      .btnRight {
        outline: none;
        border: none;
        background: rgba(0, 0, 0, 0.5);
        display: inline-flex;
        align-items: center;
        position: absolute;
        z-index: 99;
        top: 0;
        height: 100%;
        padding: 0.5rem;
        cursor: pointer;
        img {
          width: 2rem;
        }
      }
      .btnLeft {
        left: 0rem;
        border-radius: 0.5rem 0 0 0.5rem;
      }
      .btnRight {
        right: 0rem;
        border-radius: 0 0.5rem 0.5rem 0;
      }
      .areaWithAllMoviesHome {
        flex: 1;
        display: flex;
        width: calc((24rem * 20) + (1rem * 20));
        transition: all 0.5s;
      }
    }
  }
}
</style>

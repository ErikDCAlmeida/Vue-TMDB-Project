<template>
  <div
    class="movie"
    :style="{
      backgroundImage:
        this.post === 'http://image.tmdb.org/t/p/originalnull'
          ? 'url(../assets/banner-main.jpg)'
          : `url(${this.post})`,
    }"
    @mouseover="activeInfos"
    @mouseout="removeInfos"
  >
    <div
      class="iconMoreInfos"
      @mouseover="activeMoreInfos"
      @mouseout="desactiveMoreInfos"
    >
      <img src="../assets/ellipsis.png" alt="ellipsisIconMoreInfos" />
      <router-link
        :to="{ name: 'SearchResult', params: { id: this.title } }"
        class="btnMoreInfos"
      >
        Mais informações...
      </router-link>
    </div>
    <div class="circlePercent">
      <div class="slice"></div>
      <div class="bar" :style="{ borderColor: colorBorder }">
        {{ this.vote.toFixed(1) }}
      </div>
    </div>
    <div class="bgInfos">
      <p>{{ this.title }}</p>
      <button @click="fav">Favoritar</button>
      <!-- <button>Desfavoritar</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieHome",
  data() {
    return {
      colorBorder: "",
    };
  },
  props: ["post", "title", "vote", "indexMovie"],
  created() {
    this.colorBorderColor();
  },
  methods: {
    fav() {
      console.log("??");
    },
    colorBorderColor() {
      if (this.vote < 6) {
        this.colorBorder = "#f00";
      } else if (this.vote >= 6 && this.vote < 8) {
        this.colorBorder = "#ffff00";
      } else if (this.vote >= 8) {
        this.colorBorder = "#32CD32";
      }
    },
    activeInfos() {
      const all = document.querySelectorAll(".bgInfos");
      all.forEach((item, index) => {
        if (this.indexMovie === index) {
          item.style.minHeight = "50%";
        }
      });
    },
    removeInfos() {
      const all = document.querySelectorAll(".bgInfos");
      all.forEach((item, index) => {
        if (this.indexMovie === index) {
          item.style.minHeight = "0%";
        }
      });
    },
    activeMoreInfos() {
      const all = document.querySelectorAll(".iconMoreInfos");
      all.forEach((item, index) => {
        if (this.indexMovie === index) {
          const itemEffect = item.children.item(1);
          itemEffect.style.width = "15rem";
          itemEffect.style.opacity = "1";
        }
      });
    },
    desactiveMoreInfos() {
      const all = document.querySelectorAll(".iconMoreInfos");
      all.forEach((item, index) => {
        if (this.indexMovie === index) {
          const itemEffect = item.children.item(1);
          itemEffect.style.opacity = "0";
          itemEffect.style.width = "0rem";
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.movie {
  display: flex;
  margin-right: 1rem;
  background-position: center;
  background-size: cover;
  height: 34rem;
  width: 26rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  position: relative;
  .iconMoreInfos {
    background: #000;
    position: absolute;
    border: 2px solid #000;
    border-radius: 0.5rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 6rem;
    right: 0.5rem;
    cursor: pointer;
    img {
      width: 2rem;
    }
    .btnMoreInfos {
      background: #000;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      opacity: 0;
      right: 2.9rem;
      top: -0.2rem;
      font-size: 1.5rem;
      color: #fff;
      width: 0rem;
      height: 3.4rem;
      transition: opacity 0.3s;
      font-weight: 500;
      border-radius: 0.5rem 0 0rem 0.5rem;
    }
  }
  .circlePercent {
    background: #000;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    font-size: 1.5rem;
    position: absolute;
    z-index: 9;
    width: 5rem;
    height: 5rem;
    top: 0.5rem;
    right: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    .slice {
      width: 4rem;
      height: 4rem;
      border: 0.4rem solid #fff;
      border-radius: 50%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      position: absolute;
    }
    .bar {
      border: 0.4rem solid;
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
    }
  }
  .bgInfos {
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transition: min-height 0.3s;
    overflow: hidden;
    border-radius: 0.8rem 0.8rem 0 0;
    p {
      font-size: 2rem;
      text-align: center;
      color: #fff;
    }
    button {
      outline: none;
      border: none;
      padding: 0.7rem 4rem;
      border-radius: 0.8rem;
      width: 80%;
      cursor: pointer;
      font-size: 1.5rem;
      border: 2px solid #f00;
      background: #000;
      color: #f00;
    }
  }
}
</style>

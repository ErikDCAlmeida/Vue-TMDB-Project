<template>
  <div class="movie">
    <div class="bgInfos">
      <p>NomeDoFilme</p>
      <button>Favoritar</button>
      <button>Desfavoritar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieHome",
};
</script>

<style lang="scss" scoped>
.movie {
  display: flex;
  flex-direction: column;
  height: 32rem;
  width: 24rem;
  border-radius: 0.5rem;
  position: relative;
  background: red;
  margin-right: 1rem;
  .bgInfos {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    p {
      font-size: 2rem;
    }
    button {
      outline: none;
      border: none;
      padding: 0.7rem 4rem;
    }
  }
}
</style>

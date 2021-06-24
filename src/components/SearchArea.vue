<template>
  <form>
    <label for="search" class="sr-only"> Qual filme deseja procurar? </label>
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Procure aqui o filme que deseja procurar informações!"
    />
    <button type="submit" id="btnSearch">
      <img src="../assets/search.png" alt="searchIcon" />
    </button>
  </form>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  display: flex;
  position: relative;
  #search {
    outline: none;
    border: none;
    flex: 1;
    padding: 1rem 9rem 1rem 1rem;
    border-radius: 1rem;
    font-size: 2rem;
    border: 0.1rem solid #000;
  }
  #btnSearch {
    outline: none;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    height: 100%;
    width: 8rem;
    border-radius: 0 1rem 1rem 0;
    border-top: 0.1rem;
    border-right: 0.1rem;
    border-bottom: 0.1rem;
    cursor: pointer;
    background: #f00;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 2.5rem;
    }
  }
}
</style>

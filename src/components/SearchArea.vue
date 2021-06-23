<template>
  <form>
    <label for="search" class="sr-only"> Qual filme deseja procurar? </label>
    <input type="text" name="search" id="search" />
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

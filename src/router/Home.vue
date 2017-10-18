
<template>
  <div>
      <nav-bar></nav-bar>
      <h1>Search for an artist</h1>
      <search-bar></search-bar>

  </div>
</template>

<script>
import SearchBar from '../components/SearchBar'
import NavBar from '../components/NavBar'

export default {
    components: {
        SearchBar,
        NavBar
    },
}
</script>



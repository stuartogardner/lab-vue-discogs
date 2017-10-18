<template>
    <div>
        <nav-bar></nav-bar>
        <h1>{{artist.name}}</h1>
        <h1>{{artist.profile}}</h1>
        <img :src="artist.images[0].uri" alt="" width="300">
        <br>
        <h1>Albums</h1>
        <!-- <div v-for="album in artistAlbums">
            <h2>{{album.title}}</h2>
            <img :src="album.thumb" alt="" width="100">
        </div> -->
        <album-card></album-card>
        

    </div>
</template>

<script>
import NavBar from '../components/NavBar'
import { getArtistById } from '@/api/api' 
// import { getArtistAlbums } from '@/api/api' 
import AlbumCard from '../components/AlbumCard'

export default {
        components: {
        NavBar,
        AlbumCard,
    },
  data() {
      return {
          artist: null,
        //   artistAlbums: [],
      };
  },
  created() {
      getArtistById(this.$route.params.id).then(artist => {
          this.artist = artist;
      });
    //   getArtistAlbums(this.$route.params.id).then(albums => {
    //       this.artistAlbums = albums;
    //   });
  },
}
</script>


<template>
    <div>
        <div v-for="album in artistAlbums">
            <h2>{{album.title}}</h2>
            <img :src="album.thumb" alt="" width="100">
        </div>
    </div>
    
</template>


<script>
import { getArtistAlbums } from '@/api/api' 

export default {
  data(){
      return {
          artistAlbums: [],
      };
  },
  created(){
    getArtistAlbums(this.$route.params.id).then(albums => {
          this.artistAlbums = albums;
      });
  },
}
</script>

<template>
  <div class="field has-addons">
  <div class="control">
    <input class="input" type="text" placeholder="Find a repository" v-model="searchTerm">
    <p>{{searchTerm}}</p>
  </div>
  <div class="control">
    <button class="button is-info" @click="search">
      Search
    </button>
  </div>
  <!-- <ul>
    <li v-for="artist in artists">
        <router-link :to="'/artists/' + artist.id">
            {{artist.title}}
            <br>
            <img :src="artist.thumb" alt="">
        </router-link>
    </li>
</ul> -->
<artist-thumbnail :artists="artists"></artist-thumbnail>
</div>
</template>

<script>
import { getArtists } from '@/api/api'
import ArtistThumbnail from '../components/ArtistThumbnail'

export default {
    components: {
        ArtistThumbnail,
    },
  data(){
      return {
        artists: [],
        searchTerm: '',
      };
  },
  methods: {
    search() {
        getArtists(this.searchTerm).then((artists) => {
            this.artists = artists;
        });
    }
        
    },
}
</script>


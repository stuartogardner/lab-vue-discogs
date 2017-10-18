

<template>
<div>
    <ul>
    <li v-for="artist in artists">
        <router-link :to="'/artists/' + artist.id">
            {{artist.title}}
            <br>
            <img :src="artist.thumb" alt="">
        </router-link>
        </li>
    </ul>
</div>
    
</template>

<script>
// import SearchBar from '../components/SearchBar'


export default {
    props: ['artists'],
    data(){
        return {

        };
    },
}
</script>

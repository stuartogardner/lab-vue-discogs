import axios from 'axios'

const discogs = axios.create({
  baseURL: "https://api.discogs.com",
  httpAgent: "Ironhack Paris stuartgardner/1.0 +http://localhost",
  params: {
    token: "idEHeqTlPpPTFjgUtEjNbzuLStDqgrfYbXfHOLwj"
  }
});

export function getArtists(query){
  return discogs.get(`/database/search?q=${query}&type=artist`).then(response =>{
    return response.data.results;
  });
}

export function getArtistAlbums(id){
  return discogs.get(`/artists/${id}/releases`).then(response =>{
    return response.data.releases;
  });
}

export function getArtistById(id){
  return discogs.get(`/artists/${id}`).then(response =>{
    return response.data;
  });
}


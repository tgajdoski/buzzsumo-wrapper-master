export default function trend() {
  return {
    getAlbum: id => this.request(`${this.apiURL}/albums/${id}`),
    getAlbums: ids => this.request(`${this.apiURL}/albums/?ids=${ids}`),
    getTracks: id => this.request(`${this.apiURL}/albums/${id}/tracks`),
  };
}

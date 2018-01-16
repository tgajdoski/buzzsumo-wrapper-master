 
    // http://buzzsumo.com/knowledge/sharers-api/
    // 1) username (required) This is the twitter username you want to get the recently shared links for.
    
    let  ENDPOINT = "shared_links.json"
    let VALID_PARAMS = ['username']
 
    export default function shared_link() {
      return {
        // SOME SANITIZE of opts NEEDED
        getSharedLinks: opts => this.request(`${this.apiURL}${ENDPOINT}`, opts),
      };
    }
  
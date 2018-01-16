 
    // http://buzzsumo.com/knowledge/sharers-api/
    
    // 1) article_id (required) ID of the article you want to retrieve sharers for. The ID is returned in the “id” field in Top Content API results.
    // 2) result_type (optional) Sort the sharers by this metric, descending. Default: avg_retweets. Possible Values: num_followers, page_authority, pagerank, retweet_ratio, reply_ratio, avg_retweets
    // 3) page (optional) the page number. Default: 0. Possible values: any number >= 0, where 0 is page 1.
    // 4) person_types (optional) comma delimited string of person types you want to see. By default, we will show all types of influencers. blogger, influencer, company, journalist, regular people
    // 5) ignore_broadcasters  (optional), default: 0, set to 1 if you want to ignore broadcasters, otherwise set to 0. Broadcasters are influencers who simply broadcast links or tweets and hardly reply to others.

    
    let  ENDPOINT = "shares.json"
    let VALID_PARAMS = ['article_id', 'result_type', 'page', 'person_types', 'ignore_broadcasters']
    export default function sharer() {
      return {
        // SOME SANITIZE of opts NEEDED
        getSharers: opts => this.request(`${this.apiURL}${ENDPOINT}`, opts),
      };
    }
  
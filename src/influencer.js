
    // 1) q (required) A UTF-8, URL-encoded search query of 1,000 characters maximum. It should be a topic such as marketing, or social media. Check our guide to advanced search operators if you want to use advanced search features.
    // 2) result_type  (optional) Sort the results by this metric. Default: relevancy. Possible Values: relevancy, num_followers, page_authority, pagerank, retweet_ratio, reply_ratio, avg_retweets
    // 3) page  (optional) the page number. Default: 0. Possible values: any number >= 0, where 0 is page 1.
    // 4) person_types  (optional) comma delimited string of person types you want to see. By default, we will show all types of influencers. Possible values to choose from: blogger, influencer, company, journalist, regular people
    // 5) ignore_broadcasters  (optional), default: 0, set to 1 if you want to ignore broadcasters, otherwise set to 0. Broadcasters are influencers who simply broadcast links or tweets and hardly reply to others.
    // 6) location  (optional), Search the influencers Twitter bio location using this parameter. Most users put a city e.g. London, so that tends to work better than a country. You can pass multiple location separated with the OR operator e.g. London OR New York OR Paris etc
    // 7) must_have_instagram_profile (optional) Only return profiles with an Instagram username. Possible Values true, false (string).
    // 8) verified_only (optional) Only return profiles that have are verified on Twitter (they have a blue check mark). Possible values: true, false (string).

    let ENDPOINT = "influencers.json"
    let VALID_PARAMS = ['q', 'result_type', 'page', 'person_types', 'ignore_broadcasters', 'location']
   
    export default function influencer() {
      return {
        // SOME SANITIZE of opts NEEDED
        getInfluencers: opts => this.request(`${this.apiURL}${ENDPOINT}`, opts),
      };
    }
  
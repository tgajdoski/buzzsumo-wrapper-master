// http://buzzsumo.com/knowledge/trending-api/
// 1) search_type (optional) either trending_now for articles sorted by trending score or most_shared for articles sorted by total shares.
// 2) topic (optional) One or multiple topics. Multiple topics must be separated by a comma e.g. marketing,seo,business.
// 3) hours (optional) Defaults to 24. Narrow your search to the last few hours to see content just going viral.
// 4) domains (optional) Instead of using the topic parameter, pass one or more domains (comma separated e.g. example.com,example2.com) to see content just from those sites. Note: this cannot be combined with the topic operator.
// 5) blocked_domains (optional) use to remove unwanted domains from results, also accepts one or more domains separated by a comma (e.g. spam.com,junk.com)
// 6) tld (optional) use to filter results to a specific TLD e.g. “uk”.
// 7) count (optional) the number of results to return. E.g. to return 10 results pass count=10 with your request.

  
let ENDPOINT = "trends.json"
let VALID_PARAMS = ['search_type', 'topic', 'hours', 'domains', 'blocked_domains', 'tld', 'count']

export default function trend() {
  return {
    // SOME SANITIZE of opts NEEDED
    getTrend: opts => this.request(`${this.apiURL}${ENDPOINT}`, opts),
  };
}

    // http://buzzsumo.com/knowledge/top-content-api/
    
    // 1) q (required) keyword, URL, or a domain/subdomain.
    // 2) result_type (optional) total, facebook, twitter, linkedin, pinterest, google_plus - default = total
    // 3) page (optional) the page to get results for - default 0
    // 4) num_days (optional) the number of days to search from today - default = 1
    // 5) article_type (optional) the type of articles to search for, comma separated (no spaces). giveaway, infographic, general_article, guest_post, interview, video - default = giveaway,infographic,general_article,guest_post,interview,video
    // 6) begin_date (optional) The begin date to search for in Unix epoch time. If num_days is specified, this field should not be passed, and will be ignored if passed. Only articles published >= this date will be returned.
    // 7) end_date (optional) The end date to search for in Unix epoch time. If num_days is specified, this field should not be passed, and will be ignored if passed.
    // 8) num_results (optional) The number of results to return. Default: 20
    // 9) language (optional) filter results by language. Pass the two letter ISO code: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
    // 10) tld (optional) filter results by top level domain. Pass just the tld, e.g. for French domains pass “fr”. For UK sites pass “uk”. Note “.co.uk” is not a top level domain, “uk” is.
    // 11) exact_url only return the exact URL if found.


  let _ = require('lodash');

  let ENDPOINT = "articles.json"
  let VALID_PARAMS = ['q', 'result_type', 'page', 'num_days', 'article_type', 'begin_date', 'end_date', 'num_results', 'language', 'tld']
  let default_options =  {
      result_type: "total",
      page: 0,
      num_days: 1,
      article_type: "giveaway,infographic,general_article,guest_post,interview,video",
      num_results: 20
    }
    
    // optionalArg = (typeof optionalArg === 'undefined') ? 'default' : optionalArg;

  export default function article() {
 // SOME SANITIZE of opts NEEDED with VALID_PARAMS
    return {
      getMostShared: opts => this.request(`${this.apiURL}${ENDPOINT}`,  _.assign({}, default_options, opts)),
    };
  }

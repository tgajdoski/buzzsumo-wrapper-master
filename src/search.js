function searcher(type, params) {
  console.log("TYPE ", type, "PARAMS" , params);
  return this.request(`${this.apiURL}${type}`, params);
}

export default function search() {
  return {
    articles: searcher.bind(this, 'articles.json'),
    influencers: searcher.bind(this, 'influencers.json'),
    shares: searcher.bind(this, 'shares.json'),
    shared_links: searcher.bind(this, 'shared_links.json'),
    trends: searcher.bind(this, 'trends.json'),
  };
}

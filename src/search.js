function searcher(type, query) {
  return this.request(`${this.apiURL}/search?q=${query}&type=${type}`);
}

export default function search() {
  return {
    articles: searcher.bind(this, 'article'),
    influencers: searcher.bind(this, 'influencer'),
    shares: searcher.bind(this, 'share'),
    shared_links: searcher.bind(this, 'shared_link'),
    trends: searcher.bind(this, 'trend'),
  };
}

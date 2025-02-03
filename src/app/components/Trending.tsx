

import Card from './UI/Card';

export default function Trending() {

  const latests = [
    {
      subreddit: "r/Technology",
      post_heading: "The latest news and discussions about technology, gadgets, and innovation.",
      comments_count: 150,
      upvotes: 1200,
      author: "techlover123",
      crea_date: "2023-10-01"
    },
    {
      subreddit: "r/WorldNews",
      post_heading: "Breaking news and updates from around the globe.",
      comments_count: 300,
      upvotes: 2500,
      author: "newsjunkie",
      crea_date: "2023-10-02"
    },
    {
      subreddit: "r/Movies",
      post_heading: "Discussions about the latest movies, trailers, and film industry news.",
      comments_count: 80,
      upvotes: 900,
      author: "cinephile22",
      crea_date: "2023-10-03"
    },
    {
      subreddit: "r/Gaming",
      post_heading: "A community for gamers to share news, memes, and discussions about video games.",
      comments_count: 500,
      upvotes: 3500,
      author: "gamerpro",
      crea_date: "2023-10-04"
    },
    {
      subreddit: "r/Science",
      post_heading: "Explore the latest scientific discoveries and research.",
      comments_count: 200,
      upvotes: 1800,
      author: "sciencegeek",
      crea_date: "2023-10-05"
    },
    {
      subreddit: "r/Art",
      post_heading: "A place to share and discuss all forms of art, from paintings to digital creations.",
      comments_count: 120,
      upvotes: 1100,
      author: "artlover99",
      crea_date: "2023-10-06"
    },
    {
      subreddit: "r/Food",
      post_heading: "Delicious recipes, food photos, and culinary discussions.",
      comments_count: 250,
      upvotes: 2000,
      author: "foodiechef",
      crea_date: "2023-10-07"
    },
    {
      subreddit: "r/Fitness",
      post_heading: "Tips, advice, and motivation for fitness and healthy living.",
      comments_count: 180,
      upvotes: 1500,
      author: "fitfanatic",
      crea_date: "2023-10-08"
    },
    {
      subreddit: "r/Books",
      post_heading: "A community for book lovers to share recommendations and discuss literature.",
      comments_count: 90,
      upvotes: 800,
      author: "bookworm",
      crea_date: "2023-10-09"
    },
    {
      subreddit: "r/Travel",
      post_heading: "Share travel stories, tips, and photos from around the world.",
      comments_count: 400,
      upvotes: 3000,
      author: "globetrotter",
      crea_date: "2023-10-10"
    }
  ];

  return (

    <div className="flex justify-between items-center max-w-[var(--maxPage)] w-full p-10">
      <div>
        <h1 className='mb-9'>Trending Subreddits</h1>
        <ol className="list-style">
          {latests.map((item) => <li>    <Card itemData = {item}/></li>)}
        </ol>
      </div>
    </div>
  )
}
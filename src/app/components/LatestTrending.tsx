export default function LatestTrending() {

const latests = [
    {
      title: "r/Technology",
      desc: "The latest news and discussions about technology, gadgets, and innovation.",
      crea_date: "2023-10-01"
    },
    {
      title: "r/WorldNews",
      desc: "Breaking news and updates from around the globe.",
      crea_date: "2023-10-02"
    },
    {
      title: "r/Movies",
      desc: "Discussions about the latest movies, trailers, and film industry news.",
      crea_date: "2023-10-03"
    },
    {
      title: "r/Gaming",
      desc: "A community for gamers to share news, memes, and discussions about video games.",
      crea_date: "2023-10-04"
    },
    {
      title: "r/Science",
      desc: "Explore the latest scientific discoveries and research.",
      crea_date: "2023-10-05"
    },
    {
      title: "r/Art",
      desc: "A place to share and discuss all forms of art, from paintings to digital creations.",
      crea_date: "2023-10-06"
    },
    {
      title: "r/Food",
      desc: "Delicious recipes, food photos, and culinary discussions.",
      crea_date: "2023-10-07"
    },
    {
      title: "r/Fitness",
      desc: "Tips, advice, and motivation for fitness and healthy living.",
      crea_date: "2023-10-08"
    },
    {
      title: "r/Books",
      desc: "A community for book lovers to share recommendations and discuss literature.",
      crea_date: "2023-10-09"
    },
    {
      title: "r/Travel",
      desc: "Share travel stories, tips, and photos from around the world.",
      crea_date: "2023-10-10"
    }
  ];

    return (

        <div className="flex justify-between items-center max-w-[var(--maxPage)] w-full p-10">
            <div>
                <h1>Latest Trending Subreddits</h1>
                <ol className="flex flex-col gap-3 pl-[73px] py-5 list-decimal">
                    {latests.map((item) => <li>{item.title}</li>)}
                </ol>
            </div>
        </div>
    )
}
import { useContext } from "react";
import Highlights from "./Highlights";
import LatestArticles from "./LatestArticles";
import Topics from "./Topics";
import { ArticlesContext } from "./MainContainer";
// import articles from "../api/articles.json";

const data = [
  {
    id: 1,
    topic: "Travel",
    description:
      "The journey of the soul, It’s the adventure that makes us whole.",
    image:
      "https://img.freepik.com/free-photo/travel-concept-with-baggage_23-2149153260.jpg?2&w=1480&t=st=1696399259~exp=1696399859~hmac=84dabb4243b2136edebe58a4563a720db29cc502b19a561d36257445d2528e05",
    link: "",
  },
  {
    id: 2,
    topic: "Finance",
    description:
      "The engine of our dreams, It’s the river that feeds life’s streams.",
    image:
      "https://img.freepik.com/free-vector/indian-rupee-money-bag_23-2148019023.jpg?w=1060&t=st=1696399003~exp=1696399603~hmac=f531856656a84513cc5f161318da5f749458a02e1c65435b2c37fdfde97ffbf5",
    link: "",
  },
  {
    id: 3,
    topic: "Health",
    description:
      "The greatest wealth we own, A foundation for joy, as life has shown.",
    image:
      "https://img.freepik.com/free-vector/medical-design-poster-with-original-medicinal-capsule-consisting-red-white-parts-different-medical-objects_1284-53615.jpg?w=1060&t=st=1696399169~exp=1696399769~hmac=8bdeb0158acb64cc194ddbcb3982d62685c7174635ff448fb6339197cd96703a",
    link: "",
  },
  {
    id: 4,
    topic: "Entertaiment",
    description:
      "Entertainment is a joyous diversion, It’s the heart’s delightful excursion.",
    image:
      "https://img.freepik.com/free-photo/collage-about-movie-time-with-hands-holding-camera_23-2149946308.jpg?w=1480&t=st=1696399302~exp=1696399902~hmac=4f32f7058b21ffc3a6fc686fd56630569027b85ff9373579ee579fd4bbbff777",
    link: "",
  },
  {
    id: 5,
    topic: "Tech",
    description:
      "The tool of modern ease, It’s the wind beneath humanity’s wings.",
    image:
      "https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18383.jpg?w=1060&t=st=1696441576~exp=1696442176~hmac=8787e1d174df9d70f57f3500f64ca964537cd8581a47909892f5ceacad54e23d",
    link: "",
  },
];

const highlightsData = [{ id: 1 }];

const HomePage = () => {
  const articlesData = useContext(ArticlesContext);

  return (
    <div>
      <Highlights content={highlightsData} />
      <Topics heading="Topics" data={data} />
      <LatestArticles
        backgroundColor="#1F618D"
        // backgroundColor="#138D75"
        // backgroundColor="#2E4053"
        heading="tech"
        articles={articlesData}
      />
      <LatestArticles
        // color="#1F618D"
        // backgroundColor="#138D75"
        heading="travel"
        articles={articlesData}
      />
      <LatestArticles
        // backgroundColor="#935116"
        // backgroundColor="#138D75"
        // backgroundColor={"#FA8072"}
        heading="finance"
        articles={articlesData}
      />
    </div>
  );
};

export default HomePage;

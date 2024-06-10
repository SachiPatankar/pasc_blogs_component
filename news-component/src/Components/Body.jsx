import axios from "axios";
import Card from "./Card";
import { useEffect, useState } from "react";

const Body = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsResponse = await axios.get(
          "https://inshortsapi.vercel.app/news?category=technology"
        );
        setNews(newsResponse.data.data);
        console.log(newsResponse.data.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="flex flex-row flex-wrap gap-8 justify-center">
      {news.map((item, index) => (
        <Card
          key={index}
          imageUrl={item.imageUrl}
          author={item.author}
          title={item.title}
          content={item.content}
          date={item.date}
          readMoreUrl={item.readMoreUrl}
        />
      ))}
    </div>
  );
};

export default Body;

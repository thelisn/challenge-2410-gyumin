import FeedItem from "./FeedItem";
import useFeedStore from "@/store/useFeedStore";

const FeedList = () => {
  const { renderData, isLoading } = useFeedStore();

  if (isLoading) return <p>Loading...</p>;

  return renderData.map((post, index) => {
    return <FeedItem key={index} post={post} />;
  });
};

export default FeedList;

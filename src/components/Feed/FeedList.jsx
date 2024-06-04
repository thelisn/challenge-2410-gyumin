import useFeedStore from "@/hooks/useFeedStore";
import FeedItem from "./FeedItem";

const FeedList = () => {
  const { data, isLoading } = useFeedStore();

  if (isLoading) return <p>Loading...</p>;

  return data.map((post, index) => {
    return <FeedItem key={index} post={post} />;
  });
};

export default FeedList;

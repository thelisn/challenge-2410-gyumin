import FeedItem from "./FeedItem";
import useFeedStore from "@/store/useFeedStore";

const FeedList = () => {
  const { renderData, isLoading } = useFeedStore();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col">
      {renderData.length !== 0 || <p>포스트가 없습니다.</p>}
      
      {renderData.map((post, index) => {
        return <FeedItem key={index} post={post} />;
      })}
    </div>
  );
};

export default FeedList;

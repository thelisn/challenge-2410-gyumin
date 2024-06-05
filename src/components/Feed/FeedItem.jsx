import { object } from "prop-types";

const FeedItem = ({ post }) => {
  const { title, date, content } = post;

  return (
    <div className="border border-gray-400 rounded-md p-3">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm font-light">{date}</p>
      <p className="mt-2">{content}</p>
    </div>
  );
};

export default FeedItem;

FeedItem.propTypes = {
  post: object,
};

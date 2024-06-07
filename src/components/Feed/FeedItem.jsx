import { object } from "prop-types";

const FeedItem = ({ post }) => {
  const { title, date, content } = post;

  return (
    <div className="border-b border-gray-300 py-4 px-3">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm font-light">{date}</p>
      <p className="mt-3">{content}</p>
    </div>
  );
};

export default FeedItem;

FeedItem.propTypes = {
  post: object,
};

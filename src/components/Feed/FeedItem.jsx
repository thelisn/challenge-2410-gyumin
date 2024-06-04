import { object } from "prop-types";

const FeedItem = ({ post }) => {
  const { title, date, content } = post;

  return (
    <div>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{content}</p>
    </div>
  );
};

export default FeedItem;

FeedItem.propTypes = {
  post: object,
};


import PropTypes from "prop-types";

function BlogTile({ imageUrl, title, length, date, location, tags }) {
  // component logic here

  return (
    <div className=" flex flex-col">
      <img src={imageUrl} className="h-[20%]" alt = "helo"/>
      <div className="flex flex-row">
        <p>{title}</p>
        <div>
          {" "}
          {length} | {date} | {location}
        </div>
        <div>
          <p>Tags: {tags}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogTile;
BlogTile.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

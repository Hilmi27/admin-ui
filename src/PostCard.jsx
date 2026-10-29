import { useState } from "react";

function PostCard(props) {
  const { title, body } = props;
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((previousClicked) => !previousClicked);
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        clicked ? "bg-blue-100" : "bg-white"
      } p-6 rounded-lg shadow hover:shadow-md transition-all duration-100`}>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">
        <span className="font-medium"></span> {body}
      </p>
    </div>
  );
}

export default PostCard;

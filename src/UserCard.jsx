import { useState } from "react";

function UserCard(props) {
  const { name, email, ...rest } = props;

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>

      <p className="text-gray-600 mb-2">
        <span className="font-medium">Email:</span> {email}
      </p>

      {Object.entries(rest).map(([key, value]) => (
        <p key={key} className="text-gray-600 mb-1">
          <span className="font-medium capitalize">{key}:</span> {value}
        </p>
      ))}

      <button
        className={`${
          clicked ? "bg-special-green" : "bg-gray-01"
        } text-white p-2 rounded-md`}
        onClick={handleClick}>
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default UserCard;

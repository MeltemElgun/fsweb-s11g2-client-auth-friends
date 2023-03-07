import axios from "axios";
import { useState, useEffect } from "react";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const token = localStorage.getItem("LOGIN");
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setFriends(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-bold p-2">FRIENDS LİST</h2>

      <div className="py-6">
        {friends.map((item) => (
          <div className="p-4 flex bg-white shadow mb-4" key={item.id}>
            <div className="p-4 text-left">
              -<h3 className="font-bold text-lg">{item.name}</h3>-
              <p>{item.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

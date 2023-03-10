import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function AddFriend() {
  const [addData, setAddData] = useState({
    name: "meltem",
    email: "meltem@mail.com",
  });
  const history = useHistory();

  function handleChange(event) {
    setAddData({
      ...addData,
      [event.target.name]: event.target.value,
    });
  }

  const token = localStorage.getItem("LOGIN");

  function handleSubmit(data) {
    data.preventDefault();

    axios
      .post(
        "http://localhost:9000/api/friends",
        { name: addData.name, email: addData.email },
        {
          headers: { Authorization: token },
        }
      )
      .then((res) => {
        console.log("addfriend", res.data);
        history.push("/friends");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h2 className="text-xl font-bold p-2">ADD FRİEND</h2>
      <form className="text-right" onSubmit={handleSubmit}>
        <label className="block mb-2">
          FRİEND NAME
          <input
            onChange={handleChange}
            name=" name"
            value={addData.name}
            type="text"
            className="p-1 ml-2 border border-zinc-400 w-56"
          />
        </label>
        <label className="block mb-2">
          FRİEND EMAIL
          <input
            onChange={handleChange}
            name="email"
            value={addData.email}
            type="email"
            className="p-1 ml-2 border border-zinc-400 w-56"
          />
        </label>
        <button type="submit" className="px-3 py-2 bg-yellow-500">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:3000/friends";

function FriendDetails() {
  const { id } = useParams();
  const [friend, setFriend] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        console.log(response);
        setFriend(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    // <div className="MovieDetails">
    //   <h2>
    //     Character details: {friend?.name} {friend?.lastName}
    //   </h2>
    //   <img src={friend?.img} alt="Character" />
    //   <p>Age: {friend?.age}</p>
    //   <p>Gender: {friend?.gender}</p>
    // </div>
    friend ? (
      <div className="FriendDetails">
        <h2>
          Character details: {friend.name} {friend.lastName}
        </h2>
        <img src={friend.img} alt="Character" />
        <p>Age: {friend.age}</p>
        <p>Gender: {friend.gender}</p>
      </div>
    ) : (
      <div>
        <p>Oh no...You don't have any friends...</p>
      </div>
    )
  );
}

export default FriendDetails;

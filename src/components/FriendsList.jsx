import axios from "axios";
import { useEffect, useState } from "react";
import Friend from "./Friend";

const API_URL = "http://localhost:3000/friends";
function FriendsList() {
  const [friends, setFriends] = useState([]);

  // useState agrupado que se utilizará para manejar el estado de todos los inputs
  const [data, setData] = useState({
    name: "",
    lastName: "",
    age: 0,
    gender: ""
  });

  //Para traernos los datos de la API a través de axios
  const getData = async () => {
    try {
      const response = await axios.get(API_URL);
      setFriends(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const displayFriends = () => {
    return friends.map(friend => (
        <Friend key={friend.id} {...friend} handleEdit={handleEdit} handleDelete={handleDelete} />
    ));
  };

  const cleanInputs = () => {
    setData({
      name: "",
      lastName: "",
      age: 0,
      gender: ""
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      //post a la api para que cree el nuevo objeto
      await axios.post(API_URL, { name, lastName, age, gender });
      // volvemos a llamar a la API para que actualice el estado setFriends con los nuevos datos
      getData();
      cleanInputs();
    } catch (error) {
      console.log(error);
    }
  };
  // con esta función controlamos los inputs y le asignamos a los values lo introducido por el usuario en los campos del form
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = async (id, data) => {
    try {
      await axios.put(`${API_URL}/${id}`, data);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async id => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      getData();
    } catch (error) {}
  };

  // deconstruimos el objeto data para poder utilizar las variables en los values de los inputs
  const { name, lastName, age, gender } = data;
  return (
    <div>
      <h1>Friends Characters</h1>
      <h3>Create a new Character:</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" type="text" name="name" value={name} onChange={handleChange} />
        <input placeholder="Last Name" type="text" name="lastName" value={lastName} onChange={handleChange} />
        <input placeholder="Age" type="number" name="age" value={age} onChange={handleChange} />
        <input placeholder="Gender" type="text" name="gender" value={gender} onChange={handleChange} />
        <button type="sumbit">Create!</button>
      </form>
      {friends.length ? displayFriends() : <p>Ooops!</p>}
    </div>
  );
}

export default FriendsList;

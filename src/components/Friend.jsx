import { useState } from "react";
import { Link } from "react-router-dom";

function Friend({ id, img, name, lastName, age, gender, handleEdit, handleDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  // declarando asi este estado me guardo los datos que me vienen ya del id concreto
  const [dataFromId, setDataFromId] = useState({
    name,
    img,
    lastName,
    age,
    gender
  });

  const handleSubmitEdit = e => {
    e.preventDefault();
    handleEdit(id, dataFromId);
    setIsEditing(false);
  };

  const handleChange = e => {
    setDataFromId({
      ...dataFromId,
      //este name se refiere al propio del input
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="Friends-List">
      <div className="FriendCard">
        {isEditing ? (
          <form onSubmit={handleSubmitEdit}>
            <input type="text" name="name" value={dataFromId.name} onChange={handleChange} />
            <input type="text" name="lastName" value={dataFromId.lastName} onChange={handleChange} />
            <input type="number" name="age" value={dataFromId.age} onChange={handleChange} />
            <input type="text" name="gender" value={dataFromId.gender} onChange={handleChange} />
            <button type="sumbit">Editar</button>
          </form>
        ) : (
          <>
            <img src={img} alt="Friends Character" />
            <h3>
              {name} {lastName}
            </h3>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
          </>
        )}

        <button onClick={() => setIsEditing(!isEditing)}>Edit Character</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
        <br />
        <Link to={`/friends/${id}`} className="DetailsLink">
          {" "}
          See character details{" "}
        </Link>
      </div>
    </div>
  );
}

export default Friend;

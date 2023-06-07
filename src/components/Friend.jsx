import { useState } from "react";

const API_URL = "http://localhost:3000/friends";

function Friend({ id, img, name, lastName, age, gender }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section>
      <div className="FriendCard">
        {isEditing ? (
          <form>
            <input type="text" name="name" value={name} onChange="" />
            <input type="text" name="lastName" value={lastName} onChange="" />
            <input type="number" name="age" value={age} onChange="" />
            <input type="text" name="gender" value={gender} onChange="" />
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
        <button>Delete</button>
      </div>
    </section>
  );
}

export default Friend;

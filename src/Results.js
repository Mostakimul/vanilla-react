import React from "react";
import Pet from "./Pet";

// pets destructaring from props
const Results = ({ pets }) => {
  return (
    <div>
      {!pets.length ? (
        <h3>No Pets Found!!!</h3>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;

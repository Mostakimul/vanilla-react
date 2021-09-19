const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h4>{props.animal}</h4>
      <h5>{props.breed}</h5>
    </div>
  );
};

export default Pet;

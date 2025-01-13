function Card(props, index) {
  return (
    <div className="card-container">
      <img src={props.eventImg} alt="event image" />
      <div className="card-container__element">
        <h2 id="card-title">Name of the event: </h2>

        <p>{props.eventName}</p>

        <p>
          <b>Description of the event: </b>
          <br />
          <br />
          {props.eventDescription}
        </p>
        <br />

        <p>
          <b>Date of start: </b>
          {props.eventStart}
        </p>
        <p>
          <b>Date of end: </b>
          {props.eventEnd}
        </p>
        <p>
          <b>Location: </b>
          {props.eventLocation}
        </p>
        <p>
          <b>Catgegory: </b>
          <br />
          <br />
          {props.eventCategory}
        </p>
      </div>
    </div>
  );
}

export default Card;

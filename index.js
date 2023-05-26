const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>

    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <p className="name">Kiran V</p>
      <p className="details">
        Vishnu institute of computer education and technology, Bhimavaram.
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="icon"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

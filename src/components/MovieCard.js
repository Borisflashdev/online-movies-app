import classes from "./MovieCard.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const DUMMY_DATA = {
  image:
    "https://m.media-amazon.com/images/M/MV5BMTYyNzk3MDc2NF5BMl5BanBnXkFtZTgwMDk3OTM1NDM@._V1_.jpg",
};

function MovieCard() {
  return (
    <div className={classes.card}>
      <div className="card bg-dark text-light">
        <img src={DUMMY_DATA.image} className={classes.image} alt="img" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-danger">
            More
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

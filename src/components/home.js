import { Button } from "@mui/material";

const Home = ({ username }) => {
  const getSum = (a, b) => {
    return a + b;
  };

  const mycard = (link, title, category) => {
    return (
      <div className="card">
        <img alt="" className="card-img-top" src={link} />
        <div className="card-body">
          <h4>{title}</h4>
          <p>in {category}</p>

          <Button color="secondary" className="mt-5" variant="contained">
            View More
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <h3 className="text-center bg-dark text-white">
        Current User : {username}
      </h3>
      <h1>Home Component</h1>
      <h2>{getSum(43, 23)}</h2>
      <button className="btn btn-danger">Bootstrap</button>

      <div className="row">
        <div className="col-md-4">
          {mycard(
            "https://www.denofgeek.com/wp-content/uploads/2022/02/doctor-strange-in-the-multiverse-of-madness.png?resize=768%2C432",
            "Dr. Strange : Multiverse of Madness",
            "Thriller"
          )}
        </div>
        <div className="col-md-4">
          {mycard(
            "https://www.denofgeek.com/wp-content/uploads/2022/02/doctor-strange-in-the-multiverse-of-madness.png?resize=768%2C432",
            "Dr. Strange : Multiverse of Madness",
            "Horror"
          )}
        </div>
        <div className="col-md-4">
          {mycard(
            "https://www.denofgeek.com/wp-content/uploads/2022/02/doctor-strange-in-the-multiverse-of-madness.png?resize=768%2C432",
            "Dr. Strange : Multiverse of Madness",
            "Thriller"
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

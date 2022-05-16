import React, { useState } from "react";

const Gallery = () => {
  const img1 =
    "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Landscape_2560x1440-2560x1440-827a9d1823ad230a0ea5a2efc7936370.jpg";

  const img2 =
    "https://i0.wp.com/blog.indiegala.com/wp-content/uploads/2021/12/Days-Gone.jpg?fit=1920%2C1080&ssl=1";
  const img3 =
    "https://www.riotgames.com/darkroom/1000/d0807e131a84f2e42c7a303bda672789:5f9cc29dd5d2a50bb1a8ea2efbc97abb/valorant-offwhitelaunch-keyart.jpg";
  const img4 = "https://images.pushsquare.com/2d00938278747/1280x720.jpg";

  const [mainImg, setMainImg] = useState(img2);

  const updateImage = (img) => {
    setMainImg(img);
  };

  return (
    <div className="container">
      <img className="img-fluid" src={mainImg} alt="" />

      <div className="row mt-4 mb-5">
        <div className="col-md-3">
          <img
            className="img-fluid"
            src={img1}
            alt=""
            onMouseEnter={(e) => updateImage(img1)}
          />
        </div>
        <div className="col-md-3">
          <img
            className="img-fluid"
            src={img2}
            alt=""
            onMouseEnter={(e) => updateImage(img2)}
          />
        </div>
        <div className="col-md-3">
          <img
            className="img-fluid"
            src={img3}
            alt=""
            onMouseEnter={(e) => updateImage(img3)}
          />
        </div>
        <div className="col-md-3">
          <img
            className="img-fluid"
            src={img4}
            alt=""
            onMouseEnter={(e) => updateImage(img4)}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

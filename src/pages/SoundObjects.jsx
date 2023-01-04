import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { objects } from "../data";

function SoundObjects() {
  return (
    <>
      <h2 className="heading-secondary">Sound Objects</h2>
      <Carousel>
        {objects.map((object) => (
          <div key={object.shape} className="hero-section">
            <div className="hero">
              <img
                className="object-image"
                src={object.image}
                alt="Object shape"
              />
              <p className="object-title">{object.shape}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default SoundObjects;

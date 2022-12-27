import { Link } from "react-router-dom";

function ExtendedNav() {
  return (
    <div className="extendednav">
      <ul className="extended-tools grid grid-3--cols">
        <figure>
          <figcaption>
            <Link to="/airtools">Air Tool</Link>
          </figcaption>
          <ul>
            <li>
              <a href="/">Air Spades</a>
            </li>
            <li>
              <a href="/">Airplosions</a>
            </li>
            <li>
              <a href="/">Cube Makers</a>
            </li>
            <li>
              <a href="/">Cube Stackers</a>
            </li>
            <li>
              <a href="/">Sound Hammers</a>
            </li>
            <li>
              <a href="/">Sound Spanners</a>
            </li>
            <li>
              <a href="/">Sound Towels</a>
            </li>
          </ul>
        </figure>
        <figure>
          <figcaption>
            <Link to="/soundobjects">Sound Objects</Link>
          </figcaption>
          <ul>
            <li>
              <a href="/">Air Blocks</a>
            </li>
            <li>
              <a href="/">Air Bricks</a>
            </li>
            <li>
              <a href="/">Air Cubes</a>
            </li>
            <li>
              <a href="/">Air Pyramids</a>
            </li>
            <li>
              <a href="/">Air Roofs</a>
            </li>
            <li>
              <a href="/">Air Spheres</a>
            </li>
            <li>
              <a href="/">Air Structures</a>
            </li>
            <li>
              <a href="/">Air Walls</a>
            </li>
          </ul>
        </figure>
        <figure>
          <figcaption>
            <Link to="/soundtimes">Sound Times</Link>
          </figcaption>
          <ul>
            <li>
              <a href="/">ADSR</a>
            </li>
            <li>
              <a href="/">Time Increments</a>
            </li>
          </ul>
        </figure>
      </ul>
    </div>
  );
}

export default ExtendedNav;

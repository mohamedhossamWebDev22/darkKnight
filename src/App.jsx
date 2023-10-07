import { useState } from "react";
import "./style.scss";

import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import backgroundImage from "./assets/bg.png";

function App() {
  const [title, settitle] = useState("Batsy");
  const [url, seturl] = useState("");
  const [des, setdes] = useState("");

  const [bgImg, setBgiMg] = useState(backgroundImage);

  const [show, setshow] = useState("hidden");

  const change = (imgQ, tit, Url, Des) => {
    setshow("visible");

    setBgiMg(imgQ);

    settitle(tit);
    seturl(Url);
    setdes(Des);
  };

  return (
    <>
      <div className="content">
        <div className="bg" style={{ backgroundImage: `url(${bgImg})` }}>
          <div className="txt" style={{ visibility: `${show}` }}>
            <h1>{title}</h1>
            <p>{des}</p>
            <a href={url} target="_blank">
              <button>Watch IMDb</button>
            </a>
          </div>

          <div className="fix">
            <div className="bar">
              <img
                onClick={() => {
                  change(
                    img1,
                    "Batman Begins",
                    "https://www.imdb.com/title/tt0372784/?ref_=ttls_li_tt",
                    "Batman vs Fear!! Who Would Win??"
                  );
                }}
                src={img1}
                alt="poster"
              />

              <img
                onClick={() => {
                  change(
                    img2,
                    "The Dark Knight",
                    "https://www.imdb.com/title/tt0468569/?ref_=ttls_li_tt",
                    "The Joker Is Here !!"
                  );
                }}
                src={img2}
                alt="poster"
              />

              <img
                onClick={() => {
                  change(
                    img3,
                    "The Dark Knight Rises",
                    "https://www.imdb.com/title/tt1345836/?ref_=ttls_li_tt",
                    "The Fall And Rise !!"
                  );
                }}
                src={img3}
                alt="poster"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

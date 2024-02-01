import React, { useEffect, useState } from "react";
import "../../App.css";
import { getData } from "../../Helper";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [data, setData] = useState([]);
  const navigate= useNavigate()

  const getMovies = async () => {

 
    await getData().then((response) => {
      console.log(response);
      setData(response);
  
    });
  };

  const wordStyle = { fontFamily: "initial" ,marginTop:"40px"};

  useEffect(() => {
     getMovies();
  }, []);

  const showMovieDetails=(movieInfo)=>{

    navigate("/movies",{state:{movieInfo:movieInfo}})

  }

  return (
    <div className="mt-5   home p-2">
      <center>
        <h1 className="text-white " style={wordStyle}>
          <u>Welcome User</u>
        </h1>
        <h5 className="text-white">Are you searching for a movie that you like!!! Below are the listed movies with all information you need to choose your favourite  movies. </h5>
        <div className="row p-3">
          {data && 

          data.map((card,index)=><div className="col-lg-3 m-2 mx-auto" key={index}>
            <div className="card shadow-lg-white bg-secondary text-white border border-white" style={{maxHeight:"600px"}}>
              <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                {/* {console.log(card.show.image['medium'] && " ")} */}
                <img src={card.show.image?card.show.image.medium :"data:image/jpeg;base64,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" } className="img-fluid mt-2 border border-white p-2"  style={{width:"200px",height:"300px"}}/>
                <a href="#!">
                  <div className="mask" style={{ backgroundColor: " rgba(251, 251, 251, 0.15)" }}></div>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">{card.show.name}</h5>
                <p className="card-text"><b>Genres:</b> {card.show.genres.join(", ")}<br/>
                <b>Language:</b> {card.show.language}<br/>
                <b>Rating:</b> {card.show.rating.average}/10<br/>
                </p>
              
                <a  className="btn btn-info" onClick={e=>showMovieDetails(card)} data-mdb-ripple-init>Show More</a>
              </div>
            </div>

          </div>)

        }</div>
      </center>
    </div>
  );
}

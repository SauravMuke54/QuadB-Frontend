import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function MovieDisplay() {
  const wordStyle = { fontFamily: "initial", marginTop: "40px" };
  //const [location,setLocation]=useState()
  const location = useLocation();
  console.log(location.state);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [success,setSuccess]=useState("")

  const doBooking = () => {
    // Check if name, email, and phone are provided
    if (name && email && phone) {
      // Get existing data from window.booking or initialize as an empty array
      const data = window.booking || [];
  
      // Create a new booking object
      const booking = {
        name,
        email,
        phone,
        time:location.state.movieInfo.show.schedule.time,
        day:location.state.movieInfo.show.schedule.days[0]
      };
  
      // Push the new booking object to the array
      data.push(booking);
  
      // Update the window.booking with the entire array
      window.booking = data;

      setSuccess("Data Added Successfully   ")
      
    }
  };
  

  // Check if location.state.movieInfo.show.image.medium is available
  // const imageUrl = location?.state?.movieInfo?.show?.image?.medium;

  return (
    <div className="mt-5 p-5 vh-100 overflow-auto" style={wordStyle}>
      <div className="row mb-3">
        <div className="col-lg-4">
          {" "}
          {location.state ? (
            <center className="border border-3 border-white p-2">
              <img
                className="p-2 border border-white"
                src={location.state.movieInfo.show.image.medium}
                alt="Movie Poster"
              />
            </center>
          ) : (
            <p>No image available</p>
          )}
        </div>
        <div className="col-lg-8 text-white p-3 mt-4 ">
          <span className="h5">
            <b>Movie Name:</b>{" "}
            {location.state && location.state.movieInfo.show.name}
          </span>
          <br></br>
          <span className="h5">
            <b>Time:</b>{" "}
            {location.state && location.state.movieInfo.show.averageRuntime} min
          </span>
          <br></br>
          <span className="h5">
            <b>Language:</b>{" "}
            {location.state && location.state.movieInfo.show.language}
          </span>
          <br></br>
          <span className="h5">
            <b>Rating:</b>{" "}
            {location.state && location.state.movieInfo.show.rating.average}/10
          </span>
          <br></br>
          <span className="h5">
            <b>Release Date:</b>{" "}
            {location.state && location.state.movieInfo.show.premiered}
          </span>
          <br />
          <span className="h5">
            <b>Genres:</b>{" "}
            {location.state && location.state.movieInfo.show.genres.join(", ")}
          </span>
          <br />
          <span className="h5">
            <b>Schedule:</b>{" "}
            {location.state &&
              location.state.movieInfo.show.schedule.days.join(", ")}{" "}
            {location.state && location.state.movieInfo.show.schedule.time}
          </span>
          <br />

         {location.state.movieInfo.show.status!=="Ended" && <button
            type="button"
            className="btn btn-warning  mt-5  "
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Book Show
          </button>}

          {location.state.movieInfo.show.status==="Ended" && <button
            type="button"
            className="btn btn-secondary  mt-5 "
          
          >
            No Booking Available
          </button>}
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog text-dark" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-dark" id="exampleModalLabel">
                    Book Show
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  {
                    success && <div class="alert alert-success" role="alert">
                    {success}
                  </div>
                  }
                  <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Name"
                      value={name}
                      onChange={e=>{setName(e.target.value)}}
                      required={true}
                    />
                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Email"
                      value={email}
                      onChange={e=>{setEmail(e.target.value)}}
                      required={true}
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword2">Phone Number</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword2"
                      placeholder="Number"
                      value={phone}
                      onChange={e=>{setPhone(e.target.value)}}
                      required={true}
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-danger" onClick={e=>doBooking()}>
                    Confirm Booking
                  </button>
                  
                </div>
              </div>
            </div>
          </div>

          {/* <span className='h5'><b>Release Date: {location.state && location.state.movieInfo.show.premiered}</b></span><br/> */}
        </div>
      </div>
      <span className="h5 text-white ">
        <b>Summary:</b>{" "}
        <span
          className="h5"
          dangerouslySetInnerHTML={{
            __html: location.state.movieInfo.show.summary,
          }}
        />
      </span>
    </div>
  );
}

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AuthContext } from "../contexts/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";

export default function UpdateProfile() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize useNavigate
  const [name, setName] = useState(user?.displayName || "");
  const [image, setImage] = useState(user?.photoURL || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    })
      .then(() => {
        setUser((prevUser) => ({ ...prevUser, displayName: name, photoURL: image }));
        navigate("/"); // Navigate to home page
      })
      .catch((error) => {
        // An error occurred
        console.error("Error updating profile:", error);
      });
  };

  return (
    <div className="container mx-auto flex justify-center items-center my-5">
      <div className="card flex bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSubmit}>
          <h2 className="font-bold md:text-4xl text-center ">Update Profile</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image Link</span>
            </label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

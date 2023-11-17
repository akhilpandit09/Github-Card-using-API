import React, { useEffect, useState} from "react";

function UseEffect() {
  const [user, setUser] = useState([]);
  const getUsers = async () => {
    const response = await fetch(`https://api.github.com/users/akhilpandit09`);
    setUser(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <section>
      <h2 className="text-center mt-5"> GitHub Card using Fetch API</h2>
      <div className="container-fluid mt-0">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6 col-lg-4 mb-5">
            <div className="card p-2">
              <div className="d-flex align-items-center">
                <div className="image">
                  <img
                    src={user.avatar_url}
                    alt="github profile"
                    className="rounded"
                    width="155"
                  />
                </div>
                <div className="ml-3 w-100">
                  <h4 className="mb-0 mt-0 text-capitalize">{user.name}</h4>
                  <span className="textleft">Web Developer</span>
                  <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div className="d-flex flex-column">
                      <span className="articles">ID Number</span>
                      <span className="number1 text-center">{user.id}</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="followers">Followers</span>
                      <span className="number2 text-center">{user.followers}</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="articles">Following</span>
                      <span className="number1 text-center">{user.following}</span>
                    </div>
                  </div>
                  <div className="bg-success rounded-2 text-white p-2 d-flex gap-5 mt-3">
                  <div className="d-flex flex-column">
                      <span className="articles text-white">Location</span>
                      <span className="number1 text-center">{user.location}</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="articles text-white">Total Repository</span>
                      <span className="number1 text-center">{user.public_repos}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UseEffect;

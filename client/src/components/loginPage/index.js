import React, { useState } from "react";
import { useNavigate }   from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./loginStyle.css";

const LoginSignup = () => {
  
  const [isSignup, setIsSignup] = useState(false);

  
  const [form, setForm] = useState({
    name:       "",
    arcanomail: "",
    password:   "",
    homeplane:  ""
  });

  const [error,    setError]   = useState(null);
  const [loading,  setLoading] = useState(false);
  const navigate               = useNavigate();

  
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const url = isSignup ? "/api/signup" : "/api/login";

    
    const payload = isSignup
      ? form
      : {
          arcanomail: form.arcanomail,
          password:   form.password
        };

    try {
      const res = await fetch(url, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Request failed");

      
      navigate("/magic-merch");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="login-background-image"
      style={{
        backgroundImage: `url(${require("../../assets/login-background.png")})`
      }}
    >
      <div
        className="card bg-dark text-white"
        style={{ width: "25rem", margin: "auto", marginTop: "10%" }}
      >
        <div className="card-body">
          
          <h3 className="card-title text-center">
            {isSignup ? "Sign Up" : "Log In"}
          </h3>

        
          {error && <div className="alert alert-danger">{error}</div>}

          
          <form onSubmit={handleSubmit} className="login-form">
            
            {isSignup && (
              <div className="mb-3">
                <label className="form-label text-white">Name</label>
                <input
                  name="name"
                  className="form-control"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

           
            <div className="mb-3">
              <label htmlFor="arcanomail" className="form-label text-white">
                Arcanomail
              </label>
              <input
                type="email"
                id="arcanomail"
                name="arcanomail"
                className="form-control"
                value={form.arcanomail}
                onChange={handleChange}
                required
              />
            </div>

            
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            {isSignup && (
              <div className="mb-3">
                <label className="form-label text-white">Home Plane</label>
                <input
                  name="homeplane"
                  className="form-control"
                  value={form.homeplane}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading
                ? isSignup
                  ? "Signing Up…"
                  : "Logging In…"
                : isSignup
                ? "Sign Up"
                : "Log In"}
            </button>
          </form>

          <hr className="bg-light" />
          <div className="text-center">
            {isSignup
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
            <button
              className="btn btn-link text-info"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Log In" : "Create One"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;


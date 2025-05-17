import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "../provider/AuthProvider";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createNewUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const auth = getAuth();

  // Register with email & password
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo") || (
      <img src="https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000" />
    );
    const email = form.get("email");
    const password = form.get("password");

    // Password validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.", {
        position: "top-center",
      });
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must be contain at least one uppercase letter.", {
        position: "top-center",
      });
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must be contain at least one lowercase letter.", {
        position: "top-center",
      });
      return;
    }
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        return updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            return signOut(auth);
          })
          .then(() => {
            toast.success("Registration Successful! Please Login", {
              position: "top-center",
            });
            navigate("/login");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Login with google
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        toast.success("Successfully Logged in with Google!", {
          position: "top-center",
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error("Login failed", { position: "top-center" }, error.message);
      });
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">
              Register Yourself
            </h1>
            <p className="py-6 max-w-md text-center">
              Gear up with SportHive your hub for high-quality sports equipment
              to power every move.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label mb-1">
                    <span className="label-text font-black">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label mb-1">
                    <span className="label-text font-black">Photo URL</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="photo-url"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label mb-1">
                    <span className="label-text font-black">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label mb-1">
                    <span className="label-text font-black">Password</span>
                  </label>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                    className="btn btn-xs btn-ghost absolute right-2 bottom-2"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-slate-900 text-white w-full rounded-full">
                    Register
                  </button>
                </div>
                <div className="form-control mb-6">
                  <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="btn bg-slate-900 text-white w-full rounded-full"
                  >
                    <img
                      className="w-5"
                      src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
                      alt="google-icon"
                    />
                    Login with Google
                  </button>
                </div>
                <h4 className="text-center">
                  Have an account?
                  <Link
                    to="/login"
                    className="text-blue-500 hover:underline ml-1"
                  >
                    Login
                  </Link>
                </h4>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;

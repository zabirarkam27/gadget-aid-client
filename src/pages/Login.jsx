import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  const { login, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();
  const emailRef = useRef();

  const from = location.state?.from?.pathname || "/";

  // login with email & password
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

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

    login(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successful!", {
          position: "top-center",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(
          "Login Failed! Please check your credentials",
          {
            position: "top-center",
          },
          error
        );
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
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <p className="py-6 text-center max-w-md">
              Access your SportHive account to manage gear, track your list, and
              stay in the game.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label mb-1">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label mb-1">
                    <span className="label-text">Password</span>
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
                    className="btn btn-xs btn-ghost absolute right-2 bottom-7"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  <label className="label">
                    <Link
                      to="/forgot-password"
                      state={{ email: email }}
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-slate-900 text-white w-full rounded-full">
                    Login
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
                  Don't Have Any Account?
                  <Link
                    to="/register"
                    className="text-blue-500 hover:underline ml-1"
                  >
                    Register
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

export default Login;

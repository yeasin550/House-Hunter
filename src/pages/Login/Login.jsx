import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/navLogo.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPass, setShowPass] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = async (data, e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://house-hunter-server-pi.vercel.app/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      // Handle successful login (e.g., save user data, redirect, etc.)
      const userData = response.data.user;
      if (userData) {
        axios
          .post("https://house-hunter-server-pi.vercel.app/jwt", {
            email: userData.email,
          })
          .then((response) => {
            localStorage.setItem("access-token", response.data.token);
            localStorage.setItem("user-data", JSON.stringify(userData));
            setIsLoggedIn(true);
            navigate(from, { replace: true });
            window.location.reload();
            Swal.fire({
              title: `Success`,
              text: "Your login successful!",
              icon: "success",
              confirmButtonText: "Ok",
            });
          });
      } else {
        localStorage.removeItem("access-token");
        localStorage.removeItem("user-data");
        Swal.fire({
          title: `Error`,
          text: "Something went wrong, please try again!",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      // Handle login error (e.g., display an error message)
      // console.error('Error during login:', error.response.data.message);
      Swal.fire({
        title: `Error`,
        text: "Something went wrong, please try again!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div>
      <div className="min-h-screen w-full flex flex-col items-center justify-center">
        <div className="bg-white p-10 py-14 rounded-xl">
          <Link to="/">
            {" "}
            <img className="w-[165px] mx-auto" src={logo} alt="" />
          </Link>
          <h1 className="text-2xl font-semibold text-slate-700">
            Login and get house updates!
          </h1>
          <p className="text-slate-500">
            House hunter with 14 million+ people connected.
          </p>

          <form
            className="mt-7 border  p-5 rounded-lg"
            onSubmit={handleSubmit(handleLogin)}
          >
            <div className="">
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="Enter email"
                required
                className="input input-bordered w-full focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-400 text-[15px]">
                  Invalid email address!!
                </p>
              )}
            </div>
            <div className="mt-2 relative">
              <input
                {...register("password", { required: true })}
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                className="input input-bordered w-full focus:outline-none"
              />
              {errors.password && (
                <p className="text-red-400 text-[15px]">
                  Password {"doesn't"} matched!!
                </p>
              )}
              {showPass ? (
                <div
                  onClick={() => setShowPass(!showPass)}
                  className="absolute cursor-pointer text-[var(--primary-color)] top-[15px] right-2"
                >
                  <FaEye size={18} />
                </div>
              ) : (
                <div
                  onClick={() => setShowPass(!showPass)}
                  className="absolute cursor-pointer text-gray-400 top-[15px] right-2"
                >
                  <FaEyeSlash size={18} />
                </div>
              )}
            </div>
            <input
              type="submit"
              className="btn btn-block bg-[var(--primary-color)] hover:bg-opacity-50 hover:bg-[var(--hover-color)] bg-opacity-60 text-white font-medium text-lg mt-2"
              value="Login now"
            />
            <p className="mt-2 text-[15px]">
              Do not have any account ?{" "}
              <Link to="/register" className="underline text-blue-500">
                Register now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

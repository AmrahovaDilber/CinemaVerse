import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "../types/type";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const form = useForm<Inputs>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f9f9f9] ">
      <div className="w-full max-w-md mx-auto p-10 bg-white rounded-lg shadow-md  transition-shadow duration-300">
        <h2 className="font-bold text-center text-3xl py-6 text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <input
              {...register("username", {
                required: "Username is required",
              })}
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e8ab29] transition-all duration-300"
            />
            {errors.username && (
              <p className="text-red-600 text-sm mt-2">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e8ab29] transition-all duration-300"
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-[#e8ab29] text-white rounded-lg shadow-sm hover:bg-[#c6901c] hover:shadow-md transition duration-300"
          >
            Login
          </button>
          <div className="flex items-center justify-between">
            <div className="text-center mt-4">
              <Link
                to="/signup"
                className="text-[#e8ab29] hover:text-[#c6901c] transition-colors duration-300"
              >
                Create account
              </Link>
            </div>
            <div className="text-center mt-4">
              <Link
                to=""
                className="text-[#e8ab29] hover:text-[#c6901c] transition-colors duration-300"
              >
                Reset Password
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

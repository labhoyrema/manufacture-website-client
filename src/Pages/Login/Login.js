import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Loading/Loading";
import useToken from "../../hooks/UseTooken";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let loginError;
  const [token] = useToken(user || gUser);
  if (loading || gLoading) {
    return <Loading></Loading>;
  }
  if (token) {
    navigate("/");
  }
  if (error || gError) {
    loginError = (
      <p>
        <small className="text-red-300">
          {error?.message || gError?.message}
        </small>
      </p>
    );
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-2xl text-center">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "provide a valid email",
                  },
                })}
                type="email"
                placeholder="Your email"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt">{errors.email.message}</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span class="label-text-alt">{errors.email.message}</span>
                )}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 8,
                    message: "minimum length or password 8",
                  },
                })}
                type="password"
                placeholder="Your password"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.password?.type === "required" && (
                  <span class="label-text-alt">{errors.password.message}</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span class="label-text-alt">{errors.password.message}</span>
                )}
              </label>
            </div>

            {loginError}
            <input className="btn w-full btn-primary  max-w-xs" type="submit" />
          </form>
          <p>
            <small>
              New to Total or
              <span>
                <Link className=" px-2 text-primary" to="/signup">
                  Create New Account
                </Link>
              </span>
            </small>
          </p>
          <div class="divider">OR</div>
          <button
            class="btn btn-primary w-full"
            onClick={() => signInWithGoogle()}
          >
            Google Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Loading/Loading";
import useToken from "../../hooks/UseTooken";

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
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
          {error?.message || gError?.message || updateError?.message}
        </small>
      </p>
    );
  }
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-2xl text-center">Sign Up</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
                type="name"
                placeholder="Your name"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.name?.type === "required" && (
                  <span class="label-text-alt">{errors.name.message}</span>
                )}
              </label>
            </div>
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
            <input className="btn w-full  max-w-xs" type="submit" />
          </form>
          <p>
            <small>
              Already have an Account
              <span>
                <Link className=" px-2 text-primary" to="/login">
                  LOGIN
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

export default SignUp;

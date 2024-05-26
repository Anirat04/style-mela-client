"use client";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import AllReviews from "./AllReviews";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
// TODO: rating feature needs to be added
// TODO: user data needs to be dynamic
type Inputs = {
  productID: string;
  name: string;
  email: string;
  message: string;
  date: string;
  rating: string;
};

const AddReview = ({ productID }: any) => {
  // console.log(productID);
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const review = {
      productID: productID,
      reviewText: data.message,
      reviewerName: data.name,
      reviewerEmail: data.email,
      reviewRating: data.rating,
      date: new Date().toLocaleDateString("en-GB"),
    };
    axiosPublic.post("/addReview", { review }).then((response) => {
      // console.log(response, "response");
      Swal.fire({
        title: `Thanks for your valuable review`,
        timer: 2000,
        color: "#FA8C16",
        showConfirmButton: false,
        icon: "success",
      });
      reset();
    });
    // console.log(review);
  };
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-5">Add A Review</h1>
      <p className="text-[#444444] mb-5">
        Your email address will not be published. Required fields are marked *
      </p>
      <form
        className="space-y-5 border-b-2 border-[#dfdfdf]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-3">
          <p>Your rating</p>
          <Controller
            {...register("rating", { required: true })}
            control={control}
            defaultValue={0}
            render={({ field: { value, onChange } }) => {
              return (
                <Rating
                  style={{ maxWidth: 90 }}
                  value={value}
                  onChange={onChange}
                />
              );
            }}
          />
        </div>
        <div className="flex gap-2">
          <textarea
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-1 outline-[#FA8C16]"
            placeholder="Name *"
            {...register("name", { required: true })}
          />
          <textarea
            {...register("email", { required: true })}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-1 outline-[#FA8C16]"
            placeholder="Email *"
          />
        </div>
        <div>
          <textarea
            {...register("message", { required: true })}
            rows={10}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-1 outline-[#FA8C16]"
            placeholder="Your Review *"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <input
            type="submit"
            className="focus:outline-none text-white bg-[#FA8C16] font-medium rounded-lg text-xl px-12 py-4 mb-4 "
          />
        </div>
      </form>
      <AllReviews productID={productID} />
    </div>
  );
};

export default AddReview;

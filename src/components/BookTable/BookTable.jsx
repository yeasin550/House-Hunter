// import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const BookTable = () => {
    // const [error, setError] = useState("");
      const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const handleTableBook = (data, e) => {
        e.preventDefault();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your table successfully booked",
          showConfirmButton: false,
          timer: 1500,
        });
      console.log(data);
    };

    return (
      <div className="mt-16 mb-20">
        <h1 className="font-semibold text-3xl text-center text-[#8861B3]">
          Book Your Private Table
        </h1>
        <form onSubmit={handleSubmit(handleTableBook)}>
          <div className="lg:flex items-center gap-5 my-7">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name*</span>
              </div>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs bg-[#F7F5F1]"
              />
              {errors.name && (
                <p className="text-red-400 text-[15px]">Type your name!</p>
              )}
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Phone No*</span>
              </div>
              <input
                {...register("phone", { required: true })}
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs bg-[#F7F5F1]"
              />
              {errors.phone && (
                <p className="text-red-400 text-[15px]">Type your phone!</p>
              )}
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">No. Of Gust*</span>
              </div>
              <input
                {...register("gust", { required: true })}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs bg-[#F7F5F1]"
              />
              {errors.gust && (
                <p className="text-red-400 text-[15px]">Who are?</p>
              )}
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Date & Time*</span>
              </div>
              <input
                {...register("date", { required: true })}
                type="date"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs bg-[#F7F5F1]"
              />
              {errors.date && (
                <p className="text-red-400 text-[15px]">Booked date!</p>
              )}
            </label>
          </div>
          <p className="text-center my-5 font-semibold">
            No refunds will be given once you booked
          </p>
          <div className="w-32 mx-auto">
            <button className="bg-orange-600 font-bold rounded-lg text-white hover: hover:text-red-500 hover:bg-white border border-red-500 py-2 px-3">
              Book Table
            </button>
          </div>
        </form>
      </div>
    );
};

export default BookTable;
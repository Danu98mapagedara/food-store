"use client";

import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";


export default function ContactPage() {



  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send the message.");
      }

      reset(); 
      alert("Message sent successfully!");
    } catch (error) {
      setError("apiError", { message: "Error submitting the form. Try again." });
    }
  };

  return (
    <div className="container mx-auto p-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-center mb-6">Contact Us</h1>
      <p className="text-lg text-gray-300 text-center mb-8">
        Have a question? We'd love to hear from you! Reach out to us anytime.
      </p>

      {/* Contact Form */}
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-xl font-semibold text-white mb-4 text-center">
            Send a Message
          </h2>

          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-semibold mb-1" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border border-gray-600 bg-gray-700 rounded-lg w-full py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              id="name"
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border border-gray-600 bg-gray-700 rounded-lg w-full py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              id="email"
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-semibold mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              className="appearance-none border border-gray-600 bg-gray-700 rounded-lg w-full py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              id="message"
              placeholder="Your Message"
              rows="4"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg w-full transition duration-300"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>

          {errors.apiError && (
            <p className="mt-4 text-center text-red-500">{errors.apiError.message}</p>
          )}
        </form>
      </div>
    </div>
  );
}

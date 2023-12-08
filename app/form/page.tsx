/* eslint-disable react/jsx-no-duplicate-props */
"use client";
import { useState, FormEvent, useEffect, ChangeEvent } from "react";
import { z } from "zod";
import formSchema from "../api/schema";

const ChatBotForm = () => {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    physicsMarks: 0,
    chemistryMarks: 0,
    mathsMarks: 0,
    collegeName: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [cutoffMarks, setCutoffMarks] = useState<number | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = name.includes("Marks") ? parseFloat(value) : value;
    if (!isNaN(Number(numericValue))) {
      setFormData((prevData) => ({ ...prevData, [name]: numericValue }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  useEffect(() => {
    const calculatecutoff = () => {
      const maths = formData.mathsMarks;
      const physics = formData.physicsMarks / 2;
      const chemistry = formData.chemistryMarks / 2;

      const cutoff = maths + physics + chemistry;
      setCutoffMarks(cutoff);
    };
    calculatecutoff();
  }, [formData]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    try {
      const parsedFormData = formSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          const path = err.path.join(".");
          newErrors[path] = err.message;
        });
        setErrors(newErrors);
      } else console.error("Form has errors. Please check and correct.", error);
    }
  };
  return (
    <div className="mt-6 grid place-items-center gap-4">
      <p className="text-5xl">Form</p>
      <form className="flex justify-center" onSubmit={onSubmit}>
        <div className="space-y-12">
          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-base font-medium leading-6 text-gray-900"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobileNumber"
              id="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              maxLength={10}
              autoComplete="given-name"
              placeholder="Enter your Mobile Number"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.mobileNumber && (
              <p className={"text-sm text-red-700"}>{errors.mobileNumber}</p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="physics"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Physics
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="physicsMarks"
                  id="physicsMarks"
                  placeholder="Enter marks"
                  maxLength={3}
                  value={formData.physicsMarks}
                  onChange={handleInputChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.physicsMarks && (
                  <p className={"text-sm text-red-700"}>
                    {errors.physicsMarks}
                  </p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="chemistry"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Chemistry
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="chemistryMarks"
                  id="chemistryMarks"
                  placeholder="Enter marks"
                  maxLength={3}
                  value={formData.chemistryMarks}
                  onChange={handleInputChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.chemistryMarks && (
                  <p className="text-red-500 text-sm">
                    {errors.chemistryMarks}
                  </p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="maths"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Maths
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="mathsMarks"
                  id="mathsMarks"
                  placeholder="Enter marks"
                  maxLength={3}
                  value={formData.mathsMarks}
                  onChange={handleInputChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.mathsMarks && (
                  <p className="text-red-500 text-sm">{errors.mathsMarks}</p>
                )}
              </div>
            </div>
            <div>
              <h3>Cutoff Marks:</h3>
              <p className="text-sm font-medium leading-6 text-gray-900">
                {cutoffMarks}
              </p>
            </div>
          </div>
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Interested college
            </label>
            <input
              type="text"
              name="collegeName"
              title="interestedcollege"
              value={formData.collegeName}
              onChange={handleInputChange}
              placeholder="Enter your Interested College"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.collegeName && (
              <p className="text-red-500 text-sm">{errors.collegeName}</p>
            )}
          </div>
          <div className="btn btn-info text-white w-full text-lg">
            <button title="submit" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatBotForm;

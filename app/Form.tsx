"use client";
import React, { useState } from "react";

const Form: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [marks, setMarks] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", { mobileNumber, marks, selectedCity });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 p-8 rounded shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="mobileNumber"
            className="block text-sm font-medium text-gray-600"
          >
            Mobile Number
          </label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="marks"
            className="block text-sm font-medium text-gray-600"
          >
            Marks
          </label>
          <input
            type="text"
            id="marks"
            name="marks"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="selectedCity"
            className="block text-sm font-medium text-gray-600"
          >
            Select College/City
          </label>
          <select
            id="selectedCity"
            name="selectedCity"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="" disabled>
              Select City
            </option>
            <option value="city1">City 1</option>
            <option value="city2">City 2</option>
            {/* Add more cities as needed */}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

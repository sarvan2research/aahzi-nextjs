"use client";
import { useState, useEffect } from "react";
import useToggle from "../api/hooks/useState";

const UserCutOffColleges = () => {
  const [collegeList, setCollegeList] = useState<any[] | undefined>(undefined);
  const [counselling, setCounselling] = useToggle(false);

  useEffect(() => {
    const fetchCutOffData = async () => {
      try {
        const data = await import("@/2022_cutoff.json");
        const newdata = data.default || data;
        const response = await fetch("/api/userCutoffCoDet", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const userdata = await response.json();
        console.log(userdata[3].course);
        console.log(userdata[3].community);
        console.log(userdata[3].cutoffMarks);
        // console.log(newdata);

        const filteringColleges = newdata.filter((data) =>
          data.cutoffDetailsList.some(
            (courses) =>
              courses?.courseCode === "ME" &&
              courses?.cutOffBC &&
              courses.cutOffBC <= 80
          )
        );
        setCollegeList(filteringColleges);
        console.log(filteringColleges);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCutOffData();
  }, []);

  return (
    <div>
      <div role="alert" className="alert mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span className="max-sm:text-sm">
          Our platform offers engineering cutoff scores based on five-year data,
          but please note these are estimations subject to change. For the
          latest information, book an appointment with our experts dedicated to
          guiding your educational journey amid annual variations in cutoffs.
          Your success is our priority.
        </span>
      </div>
      <table className="table">
        <caption className="table table-caption mt-5 text-base text-gray-900 text-center">
          Calculated Cutoff based on Previous years values
        </caption>
        <thead>
          <tr>
            <th>College Code</th>
            <th>College Name</th>
            <th>Cutoff Mark</th>
          </tr>
        </thead>
        <tbody>
          {collegeList?.map((data: any) => (
            <tr key={data?.collegeCode}>
              <td>{data?.collegeCode}</td>
              <td className="overflow-hidden whitespace-nowrap">
                {data?.collegeName}
              </td>
              <td>{data?.cutoffDetailsList[0].cutOffBC}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="grid place-items-center text-white">
        <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 p-10 rounded-2xl">
          <h2 className="text-2xl text-center mb-6">Book an Appoinment</h2>
          <fieldset className="mb-5 flex justify-center">
            <legend className="text-xl">Do you want Counselling?</legend>
            <div className="pt-2 pb-2 space-x-4 text-center">
              <label className="">
                <input
                  type="radio"
                  name="radio"
                  onClick={setCounselling}
                  value={"yes"}
                  className="mr-2 mt-4 radio radio-primary radio-sm"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value={"no"}
                  className="mr-2 mt-4 radio radio-primary radio-sm"
                />
                No
              </label>
            </div>
            <span className="text-sm text-red-600 hidden" id="error">
              Option has to be selected
            </span>
          </fieldset>
          <div className="flex justify-center flex-col mb-4">
            <label htmlFor="teaxtarea">
              Give your important Questions to be answered during counselling
            </label>
            <textarea
              name="textarea"
              id=""
              cols={25}
              rows={10}
              className="text-black resize-none"
            ></textarea>
          </div>
          {counselling && (
            <div>
              <fieldset className="mb-5 flex justify-center">
                <legend className="text-xl">
                  If yes means which type do you need?
                </legend>
                <div className="pt-2 pb-2 space-x-4 text-center">
                  <label className="">
                    <input
                      type="radio"
                      name="virtual"
                      value={"virtual"}
                      className="mr-2 mt-4 radio radio-primary radio-sm"
                    />
                    Virtual
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="physical"
                      value={"physical"}
                      className="mr-2 mt-4 radio radio-primary radio-sm"
                    />
                    Physical
                  </label>
                </div>
                <span className="text-sm text-red-600 hidden" id="error">
                  Option has to be selected
                </span>
              </fieldset>
              <div className="relative z-0 mb-5 flex justify-center">
                <select
                  name="slotbooking"
                  className="select select-bordered w-52 text-black"
                  title="Select a Slot"
                >
                  <option value="" selected disabled>
                    Select a Slot
                  </option>
                  <option value="morning">Morning Slot</option>
                  <option value="noon">Noon Slot</option>
                  <option value="evening">Evening Slot</option>
                  {/* <option value="night">Night Slot</option> */}
                </select>
              </div>
            </div>
          )}
          <div className="btn btn-info grid place-items-center">
            <button
              title="submit"
              type="submit"
              className="text-center w-24 text-lg text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCutOffColleges;

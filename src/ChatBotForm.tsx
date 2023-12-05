
import { useState } from "react";

const ChatBotForm = () => {
  const [mathsScore, setMathsScore] = useState<string>("");
  const [physicsScore, setPhysicsScore] = useState<string>("");
  const [chemistryScore, setChemistryScore] = useState<string>("");
  const [cutoffMarks, setCutoffMarks] = useState<number | null>(null);

  const calculatecutoff = () => {
    const maths = parseFloat(mathsScore) || 0;
    const physics = parseFloat(physicsScore) || 0;
    const chemistry = parseFloat(chemistryScore) || 0;

    const totalMarks = maths + physics / 2 + chemistry / 2;

    setCutoffMarks(Number(totalMarks.toFixed(2)));
  };

  return (
    <div className="grid place-items-center gap-3">
      <p className="text-5xl">Form</p>
      <form className="flex justify-center">
        <div className="space-y-12">
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-6">
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
                  name="physics"
                  id="physics"
                  maxLength={3}
                  value={physicsScore}
                  onChange={(e) => {
                    setPhysicsScore(e.target.value);
                    calculatecutoff();
                  }}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                  name="chemistry"
                  id="chemistry"
                  maxLength={3}
                  value={chemistryScore}
                  onChange={(e) => {
                    setChemistryScore(e.target.value);
                    calculatecutoff;
                  }}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                  name="maths"
                  id="maths"
                  maxLength={3}
                  value={mathsScore}
                  onChange={(e) => {
                    setMathsScore(e.target.value);
                    calculatecutoff;
                  }}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="">
              <button className="btn btn-accent" title="calculate">
                Calculate
              </button>
              <div>
                <h3>Cutoff Marks:</h3>
                <p>{cutoffMarks}</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatBotForm;

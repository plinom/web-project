import React from "react"

const ExerciseResults = ({ inputData, data }) => {
  return (
    <div className="my-10 bg-gray-200 dark:bg-gray-700 rounded-2xl p-10">
      <h2 className="max-w-2xl mb-3 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black dark:text-white">
        Results
      </h2>
      <div className="flex flex-row gap-28">
      {Object.keys(inputData).map((day) => (
        <div key={day}>
          <h3 className="text-3xl mb-3">
            Day {Object.keys(data).indexOf(day) + 1}
          </h3>
          {inputData[day] &&
            Object.keys(inputData[day]).map((exerciseIndex) => (
              <div key={exerciseIndex} className="mb-4">
                <h4 className="text-2xl">
                  {data[day][exerciseIndex].exercise_name}
                </h4>
                {inputData[day][exerciseIndex].map((set, setIndex) => (
                  <p key={setIndex}>
                    <span className="font-bold">Set  {setIndex + 1}</span> - Weight: {set.weight} kg, Reps:{" "}
                    {set.reps}
                  </p>
                ))}
              </div>
            ))}
        </div>
      ))}
      </div>
    </div>
  );
};

export default ExerciseResults;

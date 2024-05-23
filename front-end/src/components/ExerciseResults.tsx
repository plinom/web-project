import React from "react";

const ExerciseResults = ({
  results,
  data,
  handleDeleteResult,
  handleEditResult,
}) => {
  return (
    <div className="my-10 bg-gray-200 dark:bg-gray-700 rounded-2xl p-10">
      <h2 className="max-w-2xl mb-3 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black dark:text-white">
        Results
      </h2>
      {Object.keys(results).map((day) => (
        <div key={day}>
          <h3 className="text-3xl mb-4">{day}</h3>
          {Object.keys(results[day]).map((uniqueId) => (
            <div key={uniqueId} className="mb-4">
              <h4 className="text-2xl mb-2">
                Result at {new Date(parseInt(uniqueId)).toLocaleString()}
                <button
                  onClick={() => handleEditResult(day, uniqueId)}
                  className="ml-4 p-2 bg-green-500 text-white rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteResult(day, uniqueId)}
                  className="ml-4 p-2 bg-red-500 text-white rounded-md"
                >
                  Delete
                </button>
              </h4>
              {Object.keys(results[day][uniqueId]).map((exerciseIndex) => (
                <div key={exerciseIndex} className="mb-4">
                  <h5 className="text-xl">
                    {data[day][exerciseIndex].exercise_name}
                  </h5>
                  {results[day][uniqueId][exerciseIndex].map(
                    (set, setIndex) => (
                      <p key={setIndex}>
                        Set {setIndex + 1} - Weight: {set.weight} kg, Reps:{" "}
                        {set.reps}
                      </p>
                    )
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ExerciseResults;

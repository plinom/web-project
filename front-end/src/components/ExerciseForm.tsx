import React from "react";

const ExerciseForm = ({
  selectedDay,
  selectedData,
  inputData,
  setSelection,
  handleSetNumberChange,
  handleInputChange,
  handleSetSelectionChange,
  handleSaveResult,
  isEditing,
}) => {
  return (
    <div className="my-10 bg-gray-200 dark:bg-gray-700 rounded-2xl p-10">
      <h2 className="max-w-2xl mb-3 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black dark:text-white">
        Exercises for {selectedDay}
      </h2>
      {selectedData.map((exercise, exerciseIndex) => (
        <div key={exerciseIndex} className="mb-4">
          <h3 className="text-2xl">{exercise.exercise_name}</h3>
          <label>
            Number of Sets:
            <input
              type="number"
              min="1"
              value={inputData[selectedDay]?.[exerciseIndex]?.length || 0}
              onChange={(e) =>
                handleSetNumberChange(
                  selectedDay,
                  exerciseIndex,
                  e.target.value
                )
              }
              className="ml-2 p-1 rounded-md"
            />
          </label>
          {(inputData[selectedDay]?.[exerciseIndex] || []).map(
            (set, setIndex) => (
              <div key={setIndex} className="flex flex-col md:flex-row">
                <div className="card text-black dark:text-white my-5 text-lg md:w-1/2">
                  <h4 className="text-xl">Set {setIndex + 1}</h4>
                  <label>
                    Weight:
                    <input
                      type="number"
                      value={set.weight}
                      onChange={(e) =>
                        handleInputChange(
                          selectedDay,
                          exerciseIndex,
                          setIndex,
                          "weight",
                          e.target.value
                        )
                      }
                      className="ml-2 p-1 rounded-md"
                    />
                  </label>
                  <label>
                    Reps:
                    <input
                      type="number"
                      value={set.reps}
                      onChange={(e) =>
                        handleInputChange(
                          selectedDay,
                          exerciseIndex,
                          setIndex,
                          "reps",
                          e.target.value
                        )
                      }
                      className="ml-2 p-1 rounded-md"
                    />
                  </label>
                </div>
              </div>
            )
          )}
        </div>
      ))}
      <button
        onClick={handleSaveResult}
        className="mt-4 p-2 bg-blue-500 text-white rounded-md"
      >
        {isEditing ? "Save Changes" : "Save to Results"}
      </button>
    </div>
  );
}

export default ExerciseForm;

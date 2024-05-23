import React from "react"

const ExerciseForm = ({
  selectedDay,
  selectedData,
  inputData,
  setSelection,
  handleSetNumberChange,
  handleInputChange,
  handleSetSelectionChange,
}) => {
  return (
    <div className="my-10 bg-gray-200 dark:bg-gray-700 rounded-2xl p-10">
      <h2 className="max-w-2xl mb-3 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black dark:text-white">
        {selectedDay}
      </h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selectedData.map((exercise, exerciseIndex) => (
            <div key={exerciseIndex} className="flex flex-col md:flex-row">
              <div className="card text-black dark:text-white my-5 text-lg md:w-1/2">
                <h3 className="text-3xl ">{exercise.exercise_name}</h3>
                <label className="block">
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
                    className="ml-2 p-1 border border-gray-300 rounded-md"
                  />
                </label>
                {inputData[selectedDay]?.[exerciseIndex] && (
                  <div className="mt-4">
                    <label>
                      Select Set:
                      <select
                        value={setSelection[selectedDay]?.[exerciseIndex] || 0}
                        onChange={(e) =>
                          handleSetSelectionChange(
                            selectedDay,
                            exerciseIndex,
                            e
                          )
                        }
                        className="ml-2 p-1 border border-gray-300 rounded-md"
                      >
                        {inputData[selectedDay][exerciseIndex].map(
                          (_, setIndex) => (
                            <option key={setIndex} value={setIndex}>
                              Set {setIndex + 1}
                            </option>
                          )
                        )}
                      </select>
                    </label>
                  </div>
                )}
                {inputData[selectedDay]?.[exerciseIndex]?.length > 0 && (
                  <div className="my-2">
                    <h4>
                      Set{" "}
                      {parseInt(
                        setSelection[selectedDay]?.[exerciseIndex] || 0
                      ) + 1}
                    </h4>
                    <label className="block">
                      Weight:
                      <input
                        type="number"
                        value={
                          inputData[selectedDay][exerciseIndex][
                            setSelection[selectedDay][exerciseIndex]
                          ].weight || ""
                        }
                        onChange={(e) =>
                          handleInputChange(
                            selectedDay,
                            exerciseIndex,
                            setSelection[selectedDay][exerciseIndex],
                            "weight",
                            e.target.value
                          )
                        }
                        className="ml-2 p-1 border border-gray-300 rounded-md"
                      />
                    </label>
                    <label className="block mt-1">
                      Reps:
                      <input
                        type="number"
                        value={
                          inputData[selectedDay][exerciseIndex][
                            setSelection[selectedDay][exerciseIndex]
                          ].reps || ""
                        }
                        onChange={(e) =>
                          handleInputChange(
                            selectedDay,
                            exerciseIndex,
                            setSelection[selectedDay][exerciseIndex],
                            "reps",
                            e.target.value
                          )
                        }
                        className="ml-2 p-1 border border-gray-300 rounded-md"
                      />
                    </label>
                  </div>
                )}
              </div>
              <div className="card text-white my-5 text-lg md:w-1/2">
                <iframe
                  width={exercise.width}
                  height={exercise.height}
                  src={exercise.video_link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  )
}

export default ExerciseForm

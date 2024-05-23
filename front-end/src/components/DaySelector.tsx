import React from "react";

const DaySelector = ({ selectedDay, handleSelectChange, data }) => {
  return (
    <div className="my-5">
      <label
        htmlFor="select-day"
        className="block text-lg font-medium text-black dark:text-white"
      >
        Select Training Day
      </label>
      <select
        id="select-day"
        value={selectedDay}
        onChange={handleSelectChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="" disabled>
          Select a day
        </option>
        {Object.keys(data).map((day, index) => (
          <option key={index} value={day}>
            Day {index + 1}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DaySelector

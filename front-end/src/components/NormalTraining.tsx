import React, { useEffect, useState } from 'react';
import { Services } from '../services/Services';
import data from './data.json';
import DaySelector from './DaySelector';
import ExerciseForm from './ExerciseForm';
import ExerciseResults from './ExerciseResults';

const NormalTraining = () => {
  const [trainings, setTrainings] = useState();
  const [selectedDay, setSelectedDay] = useState('');
  const [inputData, setInputData] = useState({});
  const [setSelection, setSetSelection] = useState({});

  useEffect(() => {
    const handleGetTrainings = async () => {
      const response = await Services.getTrainings();
      setTrainings(response);
    };
    handleGetTrainings();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleSetNumberChange = (day, exerciseIndex, sets) => {
    setInputData((prevState) => {
      const newData = { ...prevState };
      if (!newData[day]) newData[day] = {};
      newData[day][exerciseIndex] = Array.from({ length: sets }).map(() => ({ weight: '', reps: '' }));
      return newData;
    });
    setSetSelection((prevState) => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        [exerciseIndex]: 0,
      },
    }));
  };

  const handleInputChange = (day, exerciseIndex, setIndex, field, value) => {
    setInputData((prevState) => {
      const newData = { ...prevState };
      newData[day][exerciseIndex][setIndex][field] = value;
      return newData;
    });
  };

  const handleSetSelectionChange = (day, exerciseIndex, event) => {
    setSetSelection((prevState) => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        [exerciseIndex]: event.target.value,
      },
    }));
  };

  return (
    <div className='max-w-screen-xl mx-auto px-8 lg:px-0'>
      <DaySelector selectedDay={selectedDay} handleSelectChange={handleSelectChange} data={data} />
      {selectedDay && (
        <ExerciseForm
          selectedDay={selectedDay}
          selectedData={data[selectedDay]}
          inputData={inputData}
          setSelection={setSelection}
          handleSetNumberChange={handleSetNumberChange}
          handleInputChange={handleInputChange}
          handleSetSelectionChange={handleSetSelectionChange}
        />
      )}
      <ExerciseResults inputData={inputData} data={data} />
    </div>
  );
}

export default NormalTraining;

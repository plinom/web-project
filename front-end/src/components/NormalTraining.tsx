import React, { useEffect, useState } from 'react';
import { Services } from '../services/Services';
import data from './data.json';
import DaySelector from './DaySelector';
import ExerciseForm from './ExerciseForm';
import ExerciseResults from './ExerciseResults';

function NormalTraining() {
  const [trainings, setTrainings] = useState();
  const [selectedDay, setSelectedDay] = useState('');
  const [inputData, setInputData] = useState(() => {
    const savedData = localStorage.getItem('inputData');
    return savedData ? JSON.parse(savedData) : {};
  });
  const [setSelection, setSetSelection] = useState(() => {
    const savedSelection = localStorage.getItem('setSelection');
    return savedSelection ? JSON.parse(savedSelection) : {};
  });

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
      localStorage.setItem('inputData', JSON.stringify(newData));
      return newData;
    });
    setSetSelection((prevState) => {
      const newSelection = {
        ...prevState,
        [day]: {
          ...prevState[day],
          [exerciseIndex]: 0,
        },
      };
      localStorage.setItem('setSelection', JSON.stringify(newSelection));
      return newSelection;
    });
  };

  const handleInputChange = (day, exerciseIndex, setIndex, field, value) => {
    setInputData((prevState) => {
      const newData = { ...prevState };
      newData[day][exerciseIndex][setIndex][field] = value;
      localStorage.setItem('inputData', JSON.stringify(newData));
      return newData;
    });
  };

  const handleSetSelectionChange = (day, exerciseIndex, event) => {
    setSetSelection((prevState) => {
      const newSelection = {
        ...prevState,
        [day]: {
          ...prevState[day],
          [exerciseIndex]: event.target.value,
        },
      };
      localStorage.setItem('setSelection', JSON.stringify(newSelection));
      return newSelection;
    });
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

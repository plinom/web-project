import React, { useEffect, useState } from 'react';
import { Services } from '../services/Services';
import data from './data.json';
import DaySelector from './DaySelector';
import ExerciseForm from './ExerciseForm';
import ExerciseResults from './ExerciseResults';

const NormalTraining = () => {
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
  const [results, setResults] = useState(() => {
    const savedResults = localStorage.getItem('results');
    return savedResults ? JSON.parse(savedResults) : {};
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState("");

  useEffect(() => {
    const handleGetTrainings = async () => {
      const response = await Services.getTrainings();
      setTrainings(response);
    };
    handleGetTrainings();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedDay(event.target.value);
    setIsEditing(false);
    setEditId("");
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

  const handleSaveResult = () => {
    const timestamp = new Date().toISOString();
    const uniqueId : string = isEditing ? editId : Date.now().toString();
    setResults((prevState) => {
      const newResults = { ...prevState };
      if (!newResults[selectedDay]) newResults[selectedDay] = {};
      Object.keys(inputData[selectedDay]).forEach((exerciseIndex) => {
        if (!newResults[selectedDay][uniqueId]) {
          newResults[selectedDay][uniqueId] = {};
        }
        const setIndex = setSelection[selectedDay][exerciseIndex];
        if (!newResults[selectedDay][uniqueId][exerciseIndex]) {
          newResults[selectedDay][uniqueId][exerciseIndex] = [];
        }
        newResults[selectedDay][uniqueId][exerciseIndex] = inputData[selectedDay][exerciseIndex];
      });
      localStorage.setItem('results', JSON.stringify(newResults));
      return newResults;
    });
    setIsEditing(false);
    setEditId("");
  };

  const handleDeleteResult = (day, uniqueId) => {
    setResults((prevState) => {
      const newResults = { ...prevState };
      delete newResults[day][uniqueId];
      if (Object.keys(newResults[day]).length === 0) {
        delete newResults[day];
      }
      localStorage.setItem('results', JSON.stringify(newResults));
      return newResults;
    });
  };

  const handleEditResult = (day, uniqueId) => {
    setSelectedDay(day);
    setInputData((prevState) => {
      const newData = { ...prevState };
      newData[day] = results[day][uniqueId];
      return newData;
    });
    setSetSelection((prevState) => {
      const newSelection = { ...prevState };
      Object.keys(results[day][uniqueId]).forEach((exerciseIndex) => {
        newSelection[day] = newSelection[day] || {};
        newSelection[day][exerciseIndex] = 0;
      });
      return newSelection;
    });
    setIsEditing(true);
    setEditId(uniqueId);
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
          handleSaveResult={handleSaveResult}
          isEditing={isEditing}
        />
      )}
      <ExerciseResults
        results={results}
        data={data}
        handleDeleteResult={handleDeleteResult}
        handleEditResult={handleEditResult}
      />
    </div>
  );
}

export default NormalTraining;

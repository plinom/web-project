import React from 'react';
import data from './data.json';

function NormalTraining() {
  return (
    <div className='max-w-screen-xl mx-auto px-8 lg:px-0'>
      {Object.keys(data).map((day, index) => (
        <div key={index} className='my-10 bg-gray-700 rounded-2xl p-10'>
          <h2 className="max-w-2xl mb-3 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Day {index + 1}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data[day].map((exercise, exerciseIndex) => (
              <div key={exerciseIndex} className="flex flex-col md:flex-row">
                <div className="card text-white my-5 text-lg md:w-1/2">
                  <h3 className='text-3xl '>{exercise.exercise_name}</h3>
                  <p>Sets: {exercise.sets}</p>
                  <p>Reps: {exercise.reps}</p>
                  <p>Working Weight: {exercise.working_weight}</p>
                  <p>Relax Time: {exercise.relax_time}</p>
                </div>
                <div className="card text-white my-5 text-lg md:w-1/2">
                <iframe title={exercise.exercise_name} src={exercise.video_link} className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700" allowFullScreen></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NormalTraining;

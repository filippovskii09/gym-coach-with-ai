import { Exercise } from '@/types/types';
import { FC, memo } from 'react';
import ExerciseName from './ExerciseName';
import ExerciseSet from './ExerciseSet';
import ExerciseWeight from './ExerciseWeight';
import ExerciseReps from './ExerciseReps';

const ExerciseItem: FC<{ exercise: Exercise }> = memo(({ exercise }) => {
  return (
    <li className="flex flex-col md:flex-row md:gap-6 border rounded-md p-2 md:p-4 shadow-md bg-white">
      <ExerciseName name={exercise.name} />
      <div className="pl-3 text-gray-700">
        <ExerciseSet sets={exercise.sets} />
        <ExerciseWeight weight={exercise.weight} />
        <ExerciseReps reps={exercise.reps} />
      </div>
    </li>
  );
});

export default ExerciseItem;

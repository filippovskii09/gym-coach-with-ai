import { FC, memo } from 'react';
import { Exercise } from '@/types/types';
import ExerciseItem from '@/components/exercise/ExerciseItem';

const WorkoutDetail: FC<{ exercises: Exercise[] }> = memo(({ exercises }) => {
  return (
    <ul className="mt-4 space-y-4">
      {exercises.map((exercise: Exercise, index: number) => (
        <ExerciseItem exercise={exercise} key={index} />
      ))}
    </ul>
  );
});

export default WorkoutDetail;

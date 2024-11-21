import { FC, memo } from 'react';

const ExerciseReps: FC<{ reps: string }> = memo(({ reps }) => {
  return (
    <p>
      Повторення: <span className="font-bold">{reps}</span>
    </p>
  );
});

export default ExerciseReps;

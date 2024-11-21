import { FC, memo } from 'react';

const ExerciseWeight: FC<{ weight: string }> = memo(({ weight }) => {
  return (
    <p>
      Вага: <span className="font-bold">{weight}</span> кг
    </p>
  );
});

export default ExerciseWeight;

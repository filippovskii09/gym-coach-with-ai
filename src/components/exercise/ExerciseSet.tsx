import { FC, memo } from 'react';

const ExerciseSet: FC<{ sets: string }> = memo(({ sets }) => {
  return (
    <p>
      Підходи: <span className="font-bold">{sets}</span>
    </p>
  );
});

export default ExerciseSet;

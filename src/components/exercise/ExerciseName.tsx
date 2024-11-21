import { FC, memo } from 'react';

const ExerciseName: FC<{ name: string }> = memo(({ name }) => {
  return <h4 className="text-lg font-semibold text-gray-800">{name}</h4>;
});

export default ExerciseName;

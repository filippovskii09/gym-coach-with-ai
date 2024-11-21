import { memo } from 'react';

const WorkoutName = memo(({ name }: { name: string }) => {
  return <h3 className="text-2xl font-bold text-indigo-700">{name}</h3>;
});

export default WorkoutName;

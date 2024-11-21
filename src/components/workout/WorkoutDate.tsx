import { FC, memo } from 'react';

interface WorkoutDateProps {
  date: string; // or Date type if you are working with Date objects
}

const WorkoutDate: FC<WorkoutDateProps> = memo(({ date }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return <p className="text-gray-500 text-sm">{formattedDate}</p>;
});

export default WorkoutDate;

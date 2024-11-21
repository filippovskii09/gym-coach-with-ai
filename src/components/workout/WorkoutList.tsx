import { useGetUserWorkoutsQuery } from '@/features/apiSlice';
import useAuth from '@/hooks/useAuth';
import { FC } from 'react';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import NoOneWorkout from '@/components/messages/NoOneWorkout';
import UnauthoriseMessage from '@/components/messages/UnauthoriseMessage';
import WorkoutItem from '@/components/workout/WorkoutItem';

const WorkoutList: FC = () => {
  const { user } = useAuth();
  const {
    data: workouts,
    isLoading,
    isError,
  } = useGetUserWorkoutsQuery(user?.uid || '', {
    skip: !user,
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <p>Сталася помилка при завантаженні тренувань.</p>;
  if (!user) return <UnauthoriseMessage />;
  if (!workouts?.length) return <NoOneWorkout />;

  return (
    <div className="max-w-full mx-auto p-4 md:p-6 bg-gradient-to-r from-indigo-100 to-white rounded-lg shadow-xl md:max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-700">
        Мої тренування
      </h2>
      <ul className="space-y-6">
        {workouts.map((workout: any, index: number) => (
          <WorkoutItem key={index} workout={workout} />
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;

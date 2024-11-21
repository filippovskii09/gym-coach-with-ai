import { FC, lazy, Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import WorkoutDate from '@/components/workout/WorkoutDate';
import WorkoutName from '@/components/workout/WorkoutName';
import LoadingSpinner from '../shared/LoadingSpinner';

const WorkoutDetail = lazy(() => import('@/components/workout/WorkoutDetail'));

type WorkoutItemProps = {
  workout: any;
};

const WorkoutItem: FC<WorkoutItemProps> = ({ workout }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      import('@/components/workout/WorkoutDetail');
    }
  }, [isOpen]);

  return (
    <li
      onClick={() => setIsOpen(!isOpen)}
      role="button"
      aria-expanded={isOpen}
      className="mb-6 p-4 cursor-pointer md:p-6 border border-gray-200 rounded-lg shadow-lg bg-gradient-to-r from-indigo-100 to-white transition-all md:scale-95 hover:scale-100"
    >
      <WorkoutName name={workout.title} />
      <WorkoutDate date={workout.date} />
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.4 }}
        className="mt-4 space-y-4"
      >
        {isOpen && (
          <Suspense fallback={<LoadingSpinner />}>
            <WorkoutDetail exercises={workout.exercises} />
          </Suspense>
        )}
      </motion.div>
    </li>
  );
};

export default WorkoutItem;

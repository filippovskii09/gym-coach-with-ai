import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    googleSignIn: builder.mutation({
      async queryFn(userData): Promise<any> {
        try {
          const userDocRef = doc(db, 'users', userData.uid);
          const userSnapshot = await getDoc(userDocRef);

          if (!userSnapshot.exists()) {
            await setDoc(userDocRef, {
              uid: userData.uid,
              email: userData.email,
              name: userData.name,
            });
          }

          return { data: userData };
        } catch (error) {
          console.error('Error writing user data to Firestore:', error);
          return { error: { message: 'Failed to write user data' } };
        }
      },
    }),
    getUserWorkouts: builder.query<any, string>({
      async queryFn(userId): Promise<any> {
        try {
          const userDocRef = doc(db, 'users', userId);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            const workouts = userData.workouts || [];
            return { data: workouts };
          } else {
            return { error: { message: 'User not found' } };
          }
        } catch (error) {
          console.error('Error fetching workouts:', error);
          return { error: { message: 'Failed to fetch workouts' } };
        }
      },
    }),
  }),
});

export const { useGoogleSignInMutation, useGetUserWorkoutsQuery } = api;

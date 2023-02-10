import React from 'react'
import { useEffect } from 'react'
import Task from './Task/Task'
import Goal from './Goal/Goal'
import Event from './Event/Event'
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents } from '../features/eventsSlice';
import { fetchGoals } from '../features/goalsSlice';
import { fetchTasks } from '../features/tasksSlice'
import { setMessage } from '../features/messagesSlice'
import { format, isSameDay } from 'date-fns';


const Home = ({ user }) => {
    const events = useSelector(state => state.events.events)
    const goals = useSelector(state => state.goals.goals);
    const tasks = useSelector(state => state.tasks.tasks);
    const message = useSelector(state => state.messages.message);
    const dispatch = useDispatch();

    useEffect(() => {
        const currentDate = new Date();
        const formattedToday = currentDate.toLocaleDateString();
        const hasPlans = events.some(event => {
        const eventDate = new Date(event.date);
        return eventDate.toLocaleDateString() === formattedToday;
        });
        if (!hasPlans && formattedToday && tasks.length === 0 && goals.length === 0 && events.length === 0) {
            dispatch(setMessage(`You have nothing planned for today`));
        } else {
            dispatch(setMessage(`Your plans for ${formattedToday}`));
        }
    })
      
    return (
      <>
      {/* <div className='outer-container'> */}
      <div>Hello {user.name}!</div>
      <div>{message}</div>
          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
              <div className="w-full flex items-center justify-center">
              <div className="w-full flex flex-col items-center py-16 md:py-12 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg">
                  <div className="w-full flex items-center justify-center">
                          <div className="flex flex-col items-center">
                              <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-white">Events</p>
                              <Event />
                          </div>
                      </div>
                      <div className="flex items-center mt-7">
                          <div className>
                              <p className="text-xs text-gray-300">Count:</p>
                              <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">{events.length}</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="w-full flex items-center justify-center">
              <div className="w-full flex flex-col items-center py-16 md:py-12 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg">                      <div className="w-full flex items-center justify-center">
                          <div className="flex flex-col items-center">
                              <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-white">Goals</p>
                              <Goal />
                          </div>
                      </div>
                      <div className="flex items-center mt-7">
                          <div className>
                              <p className="text-xs text-gray-300">Count:</p>
                              <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">{goals.length}</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="w-full flex items-center justify-center">
              <div className="w-full flex flex-col items-center py-16 md:py-12 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg">
                      <div className="w-full flex items-center justify-center">
                          <div className="flex flex-col items-center">
                              <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-white">Tasks</p>
                              <Task />
                          </div>
                      </div>
                      <div className="flex items-center mt-7">
                          <div className>
                              <p className="text-xs text-gray-300">Count:</p>
                              <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">{tasks.length}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* </div> */}
        </>
      );
}
  
  export default Home;

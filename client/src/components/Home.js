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



const Home = ({ user }) => {

    const events = useSelector(state => state.events.events)
    const goals = useSelector(state => state.goals.goals);
    const tasks = useSelector(state => state.tasks.tasks);
    const dispatch = useDispatch();

   
    const currentDate = new Date();

    const formattedToday = currentDate.toLocaleDateString();

    const hasPlans = events.some(event => {
        const eventDate = new Date(event.date);
        return eventDate.toLocaleDateString() === formattedToday;
        });
      
    return (
      <>
        <div className="relative top-0 w-full flex items-center justify-center">
            <div>Hello {user.name}!</div>
        </div>
      <div className="container ml-auto mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8 text-center">
              <div className="w-full flex items-center justify-center">
              <div className="w-full flex flex-col items-center py-16 md:py-12 bg-gray-200 bg-opacity-40 rounded-lg p-2 m-1">
                  <div className="w-full flex items-center justify-center">
                          <div className="flex flex-col items-center">
                              <p className="text-lg sm:text-xl md:text-2xl font-bold text-black">Events</p>
                              <Event />
                          </div>
                      </div>
                      <div className="flex items-center mt-7">
                          <div className>
                              <p className="text-xs text-black">Count:</p>
                              <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-black">{events.length}</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="w-full flex items-center justify-center">
              <div className="w-full flex flex-col items-center py-16 md:py-12 bg-gray-200 bg-opacity-40 rounded-lg p-2 m-1">
              <div className="w-full flex items-center justify-center">
                          <div className="flex flex-col items-center">
                              <p className="text-lg sm:text-xl md:text-2xl font-bold text-black">Goals</p>
                              <Goal />
                          </div>
                      </div>
                      <div className="flex items-center mt-7">
                          <div className>
                              <p className="text-xs text-black">Count:</p>
                              <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-black">{goals.length}</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="w-full flex items-center justify-center">
              <div className="w-full flex flex-col items-center py-16 md:py-12 bg-gray-200 bg-opacity-40 rounded-lg p-2 m-1">
                      <div className="w-full flex items-center justify-center">
                          <div className="flex flex-col items-center">
                              <p className="text-lg sm:text-xl md:text-2xl font-bold text-black">Tasks</p>
                              <Task />
                          </div>
                      </div>
                      <div className="flex items-center mt-7">
                          <div className>
                              <p className="text-xs text-black">Count:</p>
                              <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-black">{tasks.length}</p>
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

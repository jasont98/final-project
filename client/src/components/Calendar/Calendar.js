import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents } from '../../features/eventsSlice';
import { fetchGoals } from '../../features/goalsSlice';
import { fetchTasks } from '../../features/tasksSlice'
import {nextMonth, prevMonth, setSelectedDate} from "../../features/calendarSlice";

export default function Calendar() {

    // const [currentDate, setCurrentDate] = useState(new Date());
    const selectedDate = useSelector(state => state.calendar.selectedDate)
    const currentDate = useSelector(state => state.calendar.currentDate)
    const today = useSelector(state => state.calendar.today);
    const events = useSelector(state => state.events.events)
    const goals = useSelector(state => state.goals.goals);
    const tasks = useSelector(state => state.tasks.tasks);
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const firstDayOfWeek = firstDay.getDay();
    const dispatch = useDispatch();

    const filteredEvents =  events.filter(event => {
        const nums = event.date.split("-")
          const date = `${parseInt(nums[1])}/${nums[2]}/${nums[0]}`
           return date === selectedDate.toLocaleDateString()
    });
    
    const filteredGoals = goals.filter(goal => {
        const nums = goal.date.split("-")
          const date = `${parseInt(nums[1])}/${nums[2]}/${nums[0]}`
           return date === selectedDate.toLocaleDateString()
    });

    const filteredTasks = tasks.filter(task => {
        const nums = task.date.split("-")
          const date = `${parseInt(nums[1])}/${nums[2]}/${nums[0]}`
           return date === selectedDate.toLocaleDateString()
    });

    useEffect(() => {
        dispatch(fetchEvents());
        dispatch(fetchGoals());
        dispatch(fetchTasks());
      }, [dispatch]);
      
    const daysInMonth = () => {
        return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
      };

      let i = 1;
      const trs = [];
        
      let tds = [];
      for (let j = 1; j < firstDayOfWeek; j++) {
          tds.push(<td key={`td${j}`} />);
      }
        
      while (i <= daysInMonth()) {
        if (tds.length === 7) {
          trs.push(<tr key={`tr${i}`}>{tds}</tr>);
          tds = [];
        }
        let idx = i
        tds.push(
            <td key={idx} className="w-full hover:bg-indigo-700 text-white rounded-full ..." onClick={() => {
                dispatch(setSelectedDate(new Date(`${currentDate.getMonth()+1}-${idx}-${currentDate.getFullYear()}`)));
                console.log(selectedDate);
              }}
               >
            <div
                className={`px-4 py-4 cursor-pointer flex w-full justify-center ${
                  selectedDate.getDate() === i && selectedDate.getMonth() === currentDate.getMonth() ? 'bg-indigo-700 text-white' : 'text-gray-500 dark:text-gray-100'
                } rounded-full`}
              >
                <p className="text-2xl font-medium w-10 h-10 flex items-center justify-center">
                  {i}
                </p>
              </div>
            </td>
          );
        i++;
      }
      if (tds.length > 0) {
          trs.push(<tr key={`a${i}`}>{tds}</tr>);
      }

      const handleNextMonth = () => {
        dispatch(nextMonth());
      };
    
      const handlePrevMonth = () => {
        dispatch(prevMonth());
      };

    return (
        <>
            <div className="flex items-center justify-center py-8 px-4">
            <div className="2xl:w-1/3 xl:w-1/2 lg:w-3/5 sm:w-4/5 w-full shadow-lg mx-auto justify-center">
                <div className="md:p-16 md:pb-12 p-5 dark:bg-gray-800 bg-white rounded-t" style={{ width: '190%' }}>
                        <div className="px-4 flex items-center justify-between align-middle">
                        <h1 className="text-2xl font-bold dark:text-gray-100 text-gray-800">
                            {/* {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()} ({daysInMonth()} days) */}
                        </h1>
                            <div className="flex items-center text-gray-800 dark:text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={handlePrevMonth}>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="15 6 9 12 15 18" />
                            </svg>
                                <h1 className="text-2xl font-bold dark:text-gray-100 text-gray-800">
                                {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
                                </h1>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler ml-3 icon-tabler-chevron-right" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={handleNextMonth}>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                            </div>
                        </div>
                    <div className="container overflow-hidden">
                    <div className="flex items-center justify-between pt-12 max-w-full overflow-x-auto">
                            <table >
                                <thead>
                                    <tr>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Mo</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Tu</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">We</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Th</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Fr</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Sa</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Su</p>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                 {trs}
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b" style={{ width: '190%' }}>
                        <div className="px-4">
                            <div className="border-b pb-4 border-gray-400 border-dashed  pt-5">
                            <p className="text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 pt-2">Events</p>
                            {filteredEvents.map((event, index) => (
                                <div key={index}>
                                <p className="text-sm pt-2  text-gray-600 dark:text-gray-300">{event.title}</p>
                                {/* <p className="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">{event.description}</p> */}
                                </div>
                            ))}
                            </div>
                            <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                            <p className="text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 pt-2">Goals</p>
                            {filteredGoals.map((goal, index) => (
                                <div key={index}>
                                <p className="text-sm pt-2  text-gray-600 dark:text-gray-300">{goal.description}</p>
                                </div>
                            ))}
                            </div>
                            <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                            <p className="text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 pt-2">Tasks</p>
                            {filteredTasks.map((task, index) => (
                                <div key={index}>
                                <p className="text-sm pt-2  text-gray-600 dark:text-gray-300">{task.description}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
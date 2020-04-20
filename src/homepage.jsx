import React from "react";
import axios from 'axios';
import Habit from '../src/components/Habits/Default'
import Dashboard from '../src/components/Dashboard'
import Navigation from '../src/components/Navigation'
import SectionTitle from '../src/components/SectionTitle'
import New from '../src/components/Habits/New'
import Edit from '../src/components/Habits/Edit'
import Delete from '../src/components/Habits/Delete'
import Confirm from '../src/components/Habits/Confirm'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Calendar from './components/Calendar'
import './App.css';


const activities = [{id: 1, name: 'Yoga', image: '	🧘‍♂️'}, {id: 2, name: 'Running', image: '🏃🏼‍♂️'}, {id: 3,name: 'Praying', image: '🙏'}, {id: 4,name: 'Drinking Water', image: '🚰'}, {id: 5,name: 'Reading', image: '📚'}, {id: 6,name: 'Meditation', image: '🧘‍♂️'}, {id: 7,name: 'Walking', image: '🚶‍♂️'}, {id: 8,name: 'Cycling', image: '🚲'}, {id: 9,name: 'Working Out', image: '💪'}, {id: 10,name: 'Crossword', image: '🖊'}, {id: 11,name: 'Sudoku', image: '🧩'}, {id: 12,name: 'Connect with friends', image: '🤩'}, {id: 13,name: 'Check in with family', image: '👨‍👩‍👦'}]


export default function Homepage(props) {

  let [createBool, setCreateBool] = React.useState(false)
  let [editBool, setEditBool] = React.useState(false)
  let [deleteBool, setDeleteBool] = React.useState(false)
  let [confirmBool, setConfirmBool] = React.useState(false)
  let [confirmId, setConfirmId] = React.useState(null)
  let [calendar, setCalendar] = React.useState([new Date(),'2020-04-25'])
  let [calendarData, setCalendarData] = React.useState([
    {
      day: '2020-04-20',
      plan: []
    }
  ])
  let [chartData, setChartData] = React.useState([
    {
      name: "Running",
      max: 100,
      current: 75
    }
  ])
  let [habits, setHabits] = React.useState([
    {
      id: 1,
      name: 'Running',
      frequency: '3',
      image: '🏃🏼‍♂️'
    }
  ]
  )

  React.useEffect(() => {

    Promise.all([
      Promise.resolve(axios.get('/api/user/1/habits')),        
      Promise.resolve(axios.get('/api/user/1/dashboard')),
      Promise.resolve(axios.get('/api/user/1/calendar'))
    ]).then((all) => {
      setHabits(all[0].data)
      setChartData(all[1].data)
      setCalendarData(all[2].data)
    })
  }, []);

  React.useEffect(() => {
      setInterval(() => {
        axios.get('/api/user/1/dashboard')
        .then((data) => {
          setChartData(data.data)
        })
      }, 5000);
 
  }, [])
  
  function deleteHabit(confirmId) { 
    setDeleteBool(false)
    setConfirmId(null)
    setConfirmBool(false)

    return axios.post(`/api/habit/${confirmId}/delete`)
    .then(() => {
      for (let i = 0; i < habits.length; i++) {
        if (habits[i].id == confirmId) {
          habits.splice(i,1);
        }
      }
      setHabits([...habits]);
      })

  }

  function editHabit(activity, frequency, id) { 
    // e.preventDefault();

    let imageUse = activities.map(act => {
      if (act.name === activity) {
        return act.image
      }
    });
    setEditBool(false)
    let activityId = null; 
    
    activities.map(act => {
      if (act.name == activity) {
        activityId = act.id
      }
    });
    return axios.post(`/api/habit/${id}/edit/${activityId}/${frequency[0]}`)
    .then(() => {
      habits.map(habit => {
        if (habit.id === id) {
          habit.frequency = frequency[0]      
        }
      });
      setHabits([...habits]);
    })
  }

  function createHabit(activity, frequency) { 
    
    let imageUse = activities.map(act => {
      if (act.name === activity) {
        return act.image
      }
    });
    let activityId = null; 
    
    activities.map(act => {
      if (act.name == activity) {
        activityId = act.id
      }
    });

    let idVal = habits[habits.length -1].id + 1
    let addedHabit={id: idVal, name: activity, frequency: frequency[0], image: imageUse }
    setCreateBool(false)

    return axios.post(`/api/user/1/habit/${activityId}/${frequency[0]}`)
    .then(() => {
      setHabits([...habits, addedHabit])
    })

   }

   const calendarList = calendarData.map(singleCalendar => {
    return singleCalendar
  });

   const listOfHabits = habits.map(singleHabit => {
    return <Habit data={singleHabit}/> 
  });
  
  function confirmPage() { 
    return <Confirm onClickConfirm={deleteHabit} onClickBack={() => {  setDeleteBool(false); setConfirmId(null); setConfirmBool(false);}}/>
  }
  const listOfDeleteHabits = habits.map(singleHabit => {

    if(confirmBool) {
    
    } else {
      const confirmId = null;
    }
    if (confirmBool && confirmId == singleHabit.id) {
      return <Confirm onClickConfirm={() => {deleteHabit(confirmId)}} onClickBack={() => {  setDeleteBool(false); setConfirmId(null); setConfirmBool(false);}}/>
    } else {
    return <Delete data={singleHabit} onClick={() => {setConfirmId(singleHabit.id); setConfirmBool(true)}} onCancel={() => {setCreateBool(false); setDeleteBool(false); setEditBool(false)}}/>
    }
  })

  const listOfEditHabits = habits.map(singleHabit => {
    return <Edit data={singleHabit} onClick={editHabit} onCancel={() => {setCreateBool(false); setDeleteBool(false); setEditBool(false)}}/> 
    
  })

  return(
    <div className="App">
    <Navigation></Navigation>
    <p></p>     {/* repeated empty p tags to add spacing */}
    <SectionTitle name={'Your Weekly Summary'}/>
    <p></p>
    <div className='dashboard'>
    <Dashboard
    data={chartData}
    />
    </div>
    <p></p>
    <SectionTitle name={'Your Habits'}/>
    <p></p>
    {deleteBool
    ? listOfDeleteHabits
    : <div> </div>
    }
    
    {editBool
    ? listOfEditHabits
    : <div> </div>
    }

    {!deleteBool && !editBool 
    ? listOfHabits
    : <div></div>
    }
    <p></p>
    {createBool
    ?<New activities={activities} onClick={createHabit} onCancel={() => {setCreateBool(false); setDeleteBool(false); setEditBool(false)}}></New>
    :<div></div>
    }
    <p></p>
    <Breadcrumb >
    <div className='clickText'>
  <Breadcrumb.Item onClick={() => {setCreateBool(true); setDeleteBool(false); setEditBool(false)}}>New</Breadcrumb.Item>
  <Breadcrumb.Item onClick={() => {setEditBool(true); setDeleteBool(false)}}>
    Edit
  </Breadcrumb.Item>
  <Breadcrumb.Item onClick={() => {setDeleteBool(true); setEditBool(false)}}>Delete</Breadcrumb.Item>
  </div>
</Breadcrumb>
    <p></p>
    <SectionTitle name={'Your Calendar'}/>
    <p></p>
    <div>
      <Calendar></Calendar>
      {/* <Calendar defaultValue={calendar} tileContent={({ date, view }) => view === 'month' && date.getDay() === 0 ? <p>🎯</p> : null */}
    </div>
    <Breadcrumb >
    <div className='clickText'>
  <Breadcrumb.Item href="#">About</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Privacy
  </Breadcrumb.Item>
  <Breadcrumb.Item>Terms</Breadcrumb.Item>
  <Breadcrumb.Item href="#">Contact Us</Breadcrumb.Item>
  </div>
</Breadcrumb>       
  </div>
  )
}
import React from "react";
import axios from 'axios';
import Habit from '../src/components/Habits/Default'
import Dashboard from '../src/components/Dashboard'
import Navigation from '../src/components/Navigation'
import SectionTitle from '../src/components/SectionTitle'
import New from '../src/components/Habits/New'
import Delete from '../src/components/Habits/Delete'
import Confirm from '../src/components/Habits/Confirm'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './App.css';

// let habits = [
//   { id: 1, name: "Running", frequency: "3", icon: "🏃🏼‍♂️" },
//   { id: 2, name: "Yoga", frequency: "4", icon: "🧘‍" },
//   { id: 3, name: "Reading", frequency: "2", icon: "‍📖" }
// ];


const chartData = [
  {
    name: "Running",
    max: 100,
    current: 75,
  },
  {
    name: "Running",
    max: 100,
    current: 10,
  },
  {
    name: "Running",
    max: 100,
    current: 46,
  },
  {
    name: "Yoga",
    max: 100,
    current: 88,
  },
  {
    name: "Overall",
    max: 100,
    current: 76,
  },
];

const activities = [{name: 'Running', icon: '🏃🏼‍♂️'}, {name: 'Yoga', icon: '🧘'}, {name: 'Reading', icon: '📖'}]


export default function Homepage(props) {

  let [createBool, setCreateBool] = React.useState(false)
  let [editBool, setEditBool] = React.useState(false)
  let [deleteBool, setDeleteBool] = React.useState(false)
  let [confirmBool, setConfirmBool] = React.useState(false)
  let [confirmId, setConfirmId] = React.useState(null)
  let [habits, setHabits] = React.useState([
    {
      id: 1,
      name: 'Running',
      frequency: '3',
      icon: '🏃🏼‍♂️'
    }
  ]
  )

  function deleteHabit(e) { 
    e.preventDefault();
    habits = habits.slice(0, 0).concat(habits.slice(0 + 1, habits.length))
    setHabits([...habits]);
    console.log("Habit deleted. Here are the remaining habits", habits)
    setDeleteBool(false)
    setConfirmId(null)
    setConfirmBool(false)
  }
  
  function editHabit(e) { 
    e.preventDefault();
    habits[0].name = "Programming"
    habits[0].frequency = "7"
    habits[0].icon = "👨‍💻"
    console.log("Habit edited to programming", habits[0])
  }

  function createHabit(activity, frequency) { 
    
    let iconUse = activities.map(act => {
      if (act.name === activity) {
        return act.icon
      }
    });

    let addedHabit={name: activity, frequency: frequency, icon: iconUse }
    setHabits([...habits, addedHabit])

   
    setCreateBool(false)
   }

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
      return <Confirm onClickConfirm={deleteHabit} onClickBack={() => {  setDeleteBool(false); setConfirmId(null); setConfirmBool(false);}}/>
    } else {
    return <Delete data={singleHabit} onClick={() => {setConfirmId(singleHabit.id); setConfirmBool(true)}}/>
    }
  })
  // React.useEffect(() => {

  //   Promise.all([
  //     Promise.resolve(axios.get('/api/user/1/habits')),        
  //   ]).then((all) => {
  //     console.log("heres the data", all)
  //   })
  // }, []);

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
    
    {!deleteBool && !editBool 
    ? listOfHabits
    : <div></div>
    }
    <p></p>
    {createBool
    ?<New activities={activities} onClick={createHabit}></New>
    :<div></div>
    }
    <p></p>
    <Breadcrumb >
    <div className='clickText'>
  <Breadcrumb.Item onClick={() => {setCreateBool(true)}}>New</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Edit
  </Breadcrumb.Item>
  <Breadcrumb.Item onClick={() => {setDeleteBool(true)}}>Delete</Breadcrumb.Item>
  </div>
</Breadcrumb>
    <p></p>
    <SectionTitle name={'Your Calendar'}/>
    <p></p>
    <button>
      Fetch Data
    </button> 
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
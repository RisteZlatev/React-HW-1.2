import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfileClass from './components/UserProfileClass/UserProfileClass'
import ListItem from './components/ListItem/ListItem'
import Parent from './components/Parent'

function App() {

  const family = {
    name: "John (Parent)",
    children: [
      {
        name: "Alex (Child)",
        age: 30,
        grandchildren: [
          { name: "Liam (Grandchild)", hobby: "Playing Soccer" },
          { name: "Sophia (Grandchild)", hobby: "Drawing" },
        ],
      },
      {
        name: "Emma (Child)",
        age: 28,
        grandchildren: [{ name: "Noah (Grandchild)", hobby: "Reading" }],
      },
    ],
  };

  const tasks = [
    { name: "Learn React", priority: "High" },
    { name: "Do Groceries", priority: "Low" },
    { name: "Exercise", priority: "High" },
    { name: "Read a Book", priority: "Medium" },
  ];

  return (
    // <div className='content'>
    //   <UserProfileClass name="Riste" age="17" hobby="Football"/>
    //   <UserProfileClass name="Jana" age="25" hobby="Programming"/>
    //   <UserProfileClass name="Krste" age="45" hobby="Lawnmowing"/>
    // </div>
    // <div>
    //   <h1>Task List</h1>
    //   <ListItem items={tasks}/>
    // </div>

    <div>
      <h1>Family Tree</h1>
      <Parent name={family.name} children={family.children}/>
    </div>
  )
}

export default App

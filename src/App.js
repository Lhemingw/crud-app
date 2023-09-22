
/*-- ALL IMPORTS HERE -- */
import './App.css'
import { useState, useEffect } from 'react'

// Setting up getUsers() function:
//  *
// * Step 1: First, let's create a place (state) to save the users from our API.
// *
// * Step 2: In our getUsers function:
// *         1) Use fetch(URL) to get from the API
// *         2) Convert the data to JSON
// *         3) setUsers() to result of that data.
// *

// *
// * Step 3: Use the useEffect and getUsers() to re-render our component on change:
// *
// */

function App() {
  /* -- YOUR CODE/CRUD OPERATIONS HERE --*/
    const [ users, setUsers,  ] =useState([{}])
    //Part 3: Setting up POST
//     Step 2: Create 3 new variables with useState(): newUserName, newUserJobTitle, newUserCompanyName
//  *
//  *         Set them to an empty string
//  *
//  *         Update the body: {} part of our fetch() to POST with our new variables.
//  */

    const [newPayCheck, setNewPayCheck] =useState('')
    const [newTotalTax, setNewTotalTax] =useState('')
    const [newTotalSaving, setNewTotalSaving] =useState('')

    //Part 4: Setting up UPDATE.  Step 2: Create 3 new variables with useState() like we did for POST, but for UPDATE:
         //updatedName, updatedJobTitle, and updatedCompanyName
  
    const [updatedPayCheck, setUpdatedPayCheck] =useState('')
    const [updatedTotalTax, setUpdatedTotalTax] =useState('')
    const [updatedTotalSaving, setUpdatedTotalSaving] =useState('')
  
    

  //console.log(users);
  //Part 1: Create a new const variable called: API_URL , and set it to your URL.
  //etch documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 //Make sure you set up a API that you can CRUD to, such as mockAPI or use a JSON server like in the week 11/12 labs.
 //https://6508f19656db83a34d9cc4d8.mockapi.io/FAKE-API
  const MOCK_API_URL = 'https://6508f19656db83a34d9cc4d8.mockapi.io/todo'
  //Create 4 functions, getUsers(){}, deleteUser(){}, updateUser(){}, and postNewUser(){}.
  function getUsers(){
   //Step 2: In our getUsers function:
          //1) Use fetch(URL) to get from the API
  fetch(MOCK_API_URL)
  //2) Convert the data to JSON
  .then(data => data.json())
  .then((data) => {  //set it this way and fixed it! Instead of this way under the move this line here
    console.log(data);
    // 3) setUsers() to result of that data.
    setUsers(data);
  })
     // Move this line here
    //setUsers(data);
  // .then(data => console.log(data))
  // .then(data => setUsers(data))
  }
  useEffect(()=> {
    //getUsers() Was this doing the reiteration?
    //console.log(users);
  }, [])
  
       // Update the body: {} part of our fetch() to POST with our new variables.
       //Create 4 functions, getUsers(){}, deleteUser(){}, updateUser(){}, and postNewUser(){}.
  function deleteUser(id){
    // Step 1: Put id as a parameter in our deleteUser() function, and update
  //  *         our URL in fetch(API_URL) with the id parameter.
    fetch(`${MOCK_API_URL}/${id}`,{
      method: 'DELETE'
      // Step 2: Add method: "DELETE" key/value pair to our options object
    }).then(()=> getUsers()) 
    //Step 3: call .then(() => getUsers()) after your fetch() to ensure that our component
  //  *         gets re-rendered with the updated information. 
  } 
 
  function postNewUser(e){
    //Create 4 functions, getUsers(){}, deleteUser(){}, updateUser(){}, and postNewUser(){}.
    //Part 3: Setting up POST ------------------------*/
    //Step 1: Inside our postNewUser() function, set up fetch() to POST.
    e.preventDefault()
    
    fetch(MOCK_API_URL, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        paycheck: newPayCheck,
        tax: newTotalTax,
        totalSaving: newTotalSaving
      })
    }).then(()=> getUsers())
 } 
  

  function updateUser(e, userObject){
    //Part 1. Create 4 functions, getUsers(){}, deleteUser(){}, updateUser(){}, and postNewUser(){}.
//     //Part 4: Setting up UPDATE ------------------------*/

// /** Disclaimer: There are MANY ways to handle UPDATE.
//  *              This is only one way. We will be creating a form for each user,
//  *              passing in a userObject to our updateUser() function, then updating the user with fetch()
//  *
//  *              Consider other ways after the lab is completed.
//  *
//  * Step 1: Set up fetch() to UPDATE in our updateUser() function.
//  *         Pass in userObject as a parameter.
//  *         Be sure to update the URL with userObject.id
//  *
//  *         Reminder: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//  *
//  *         Consider the necessary options key:value pairs; method/headers/body

    e.preventDefault()
    let updatedUserObject ={
      //Part 4: Setting up UPDATE, Step 3: Inside the updateUser() function body, create a new variable: updatedUserObject
         //updatedUserObject should be userObject, with it's updated name/title/company name
      
      ...userObject,
      payCheck: updatedPayCheck,
      totalTax: updatedTotalTax,
      totalSaving: updatedTotalSaving,
    }
    
    fetch(`${MOCK_API_URL}/${userObject.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedUserObject),
      headers: {"Content-Type": "application/json"}
    }).then(()=> getUsers())

  }
  return (
    <div className="App">
      {/* CODE BELOW: PART: 5.3 Connecting our POST  Step 3: Connecting our POST:
 *
 *         Create a form above your .map method to post a new user.
 *
 *         Use the onChange property and setMyVariable() on each corresponding input
 *
 *         Connect your postNewUser() function to your form button.
 *
 *         We do need event.preventDefault() because it's inside of a form.
 *
 *         You should now be POSTing new users! Is your state re-rendering?
 *         If not, your hint in how is in Part 2: Setting up DELETE
 **/}
      <form>
        <h3>POST new Pay Check</h3>
        <label>Total Paycheck</label>
        <input onChange={(e) => setNewPayCheck(e.target.value)}></input>
        <br></br>
        <br></br>
        <label>Total Tax</label><br></br>
        <input onChange={(e) => setNewTotalTax(e.target.value)}></input>
      <br></br>
      <br></br>
        <label>Total Saving</label>
    <br></br>
        <input onChange={(e) => setNewTotalSaving(e.target.value)}></input>
        <button onClick={(e) => postNewUser(e)}>submit</button>
      </form>
        <h2>Add Calculator here</h2>
      {/* CODE BELOW: PART 5.1: Connecting our GET  //  PART 5.4: Connecting our UPDATE */}
      {/* //5.1--Part 5: Connecting All the Pieces ------------------------*/}
{/* //  * Step 1:  Connecting our GET:
//  *
//  *          .map over our users variable and display every users name/jobTitle/companyName */} 
      {users.map((user, index)=>(
        <div key={index}>
          <div>
          {/* Step 2: Connecting our DELETE:
 *
 *         Under our map, give every user a button to delete. Return of the trash-bin: 🗑
 *         It's not in a form, so we don't need event.preventDefault()
 *
 *         use .then(() => getUsers()) after our fetch to re-render the
 *         page with the updated information.  */}
            PayCheck: {user.payCheck}
            TotalTax: {user.totalTax}
            TotalSaving:{user.totalSaving}
            <button onClick={() =>deleteUser(user.id)}>Delete</button>
          </div>
          <form>
          {/* Part 5 connecting all the pieces, Step 4: Connecting our UPDATE:
 *
 *     1)  There's MANY ways to handle UPDATE.
 *
 *         For this example, we're going to give every user a form to update their:
 *         name, job title, and company name.
 *
 *     2)   Inside our .map() method, below our delete button,
 *          create a new form with labels/inputs for
 *          Update name, update job title, update company name.
 *          Include a button at the bottom (this will update on click) */}
            <h3>Update This Paycheck</h3>
            <label>Update Pay Check-after tax</label>
            <input onChange={(e) => setUpdatedPayCheck(e.target.value)}></input>
            <br></br>
            <br></br>
            <label>Update Total Tax</label><br></br>
            <input onChange={(e) => setUpdatedTotalTax(e.target.value)}></input>
            <br></br>
            <br></br>
            <label>updated Total Saving</label><br></br>
            <input onChange={(e) => setUpdatedTotalSaving(e.target.value)}></input>
            <button onClick={(e) => updateUser(e, user)}>Update User</button>
            {/* //setUpdatedJobTitle fixed to updateUser to get to light up*/}
          </form>
        </div>
    // 5)   Test it out! Your update should now be working!
    // *          Make sure the page is re-rendering with the updated information
    // *          and not refreshing the page.
    // *
    // * Optional: Set the input values in your update form to be equal to user.name/user.jobTitle etc,
    // *           so they don't initially submit empty strings.
    // *
    // */

      ))}
    </div>
  )
}

export default App

// /**  To get this started type npm i
//  *     While this lab focused mostly on functionality over practicality,
//  *     here's a couple ideas you can try implementing to make the UI/UX more user-friendly:
//  *
//  *    1: Having a form laid out for EVERY user isn't very UI friendly, nor realistic.
//  *       Consider using a styling library like Bootstrap React/MaterialUI/SemanticUI to put
//  *       each of those forms in a modal. The form inside the modal only pops up when a
//  *       "update user" button gets clicked, and only updates the user when that modal gets submitted.
//  *
//  * Docs: https://react-bootstrap.github.io/components/modal/
//  *
//  *
//  *    2: Organize the users somehow. You can use a table, CSS grid/flex.
//  *       Possibly put all the users in a container, and look at the CSS property overflow:
//  *
//  * Docs: https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
//  *
// 

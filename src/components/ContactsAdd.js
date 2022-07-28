import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom";

const initialAddressBookState = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
  email: "",
  linkedIn: "",
  twitter: "",


}

function ContactsAdd(props) {

  const { setContacts, contacts } = props

  // state for storing the form's field values
  const [newContact, setNewContact] = useState(initialAddressBookState)
  
  //console.log("contacts", contacts)

  const reset = () => {
    setNewContact(initialAddressBookState)
  }

  const submitForm = (event) => {
    event.preventDefault();
    
    // send POST request with new data
    fetch(`http://localhost:4000/contacts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      // Rest of fetch data
      body: JSON.stringify(newContact),
    }
   )
    .then((res) => res.json())
    .then((data) => { 
      console.log("POSTED new contact:", data)
      setContacts( [...contacts, data])
      reset()
    });
    
  }
  
  function handleNewContactChange(event) {
    const inputName = event.target.name
    const inputValue = event.target.value
    console.log("event", inputName, inputValue)
    setNewContact({...newContact, [inputName]: inputValue})
  }

  return (
    <form className="form-stack contact-form" onSubmit={submitForm} >
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" onChange={handleNewContactChange} value={newContact.firstName} required />
      
      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" name="lastName" type="text" onChange={handleNewContactChange} value={newContact.lastName} required/>

      <label htmlFor="street">Street:</label>
      <input id="street" name="street" type="text" onChange={handleNewContactChange} value={newContact.street} required/>

      <label htmlFor="city">City:</label>
      <input id="city" name="city" type="text" onChange={handleNewContactChange} value={newContact.city} required/>

      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="text" onChange={handleNewContactChange} value={newContact.email} required/>

      <label htmlFor="linkedIn">LinkedIn:</label>
      <input id="linkedIn" name="linkedIn" type="text" onChange={handleNewContactChange} value={newContact.linkedIn} required/>

      <label htmlFor="twitter">Twitter:</label>
      <input id="twitter" name="twitter" type="text" onChange={handleNewContactChange} value={newContact.twitter} required/>

      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
      </div>
    </form>
  )
}

export default ContactsAdd

import { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"

function ContactsView() {
  const [contact, setContact] = useState(false)

  //TODO: Get the contact to load from the params and fetch.
  //With useEffect, load the contact when params changes
  //and update contact state

  const { id } = useParams()
  const location = useLocation()

  console.log("view contacts", {contact, location})

  useEffect(() => {
    if(location.state) {
      const {contact} = location.state
      setContact(contact)
    }
  }, [location])

  if (!contact) {
    return <p>Loading</p>
  }

  return (
    <div>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>Street: {contact.street}</p> 
      <p>City: {contact.city}</p> 
      <p>Email: {contact.email}</p>
      <p>LinkedIn: {contact.linkedIn}</p>
      <p>Twitter: {contact.twitter}</p>
    </div>
  )
}

export default ContactsView
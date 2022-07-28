import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

function ContactsList(props) {
  
  //"contacts" must be passed as prop to this component
  const { contacts } = props



  return (
    <>
      <header>
        <h2>Contacts</h2>
      </header>
      <ul className="contacts-list">
        {contacts.map((contact, index) => {
          const { firstName, lastName } = contact
          return (
            <li className="contacts" key={index}>
              <p>
                {firstName} {lastName}
              </p>
              <p>
                { /** TODO: Make a Link here to view contact */}
                
                <Link to={`/contacts/${contact.id}`} state={{ contact }}>view</Link>
                
                
              </p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ContactsList

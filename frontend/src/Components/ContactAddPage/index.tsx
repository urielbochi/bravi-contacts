import { useContext } from "react";
import { ContactContext } from "../../Context/Event";
import { createContact } from "../../Services";

function ContactAddPage() {
    const { contactList, newContactFields, setNewContactFields, setContactList, contacts, setAddContactClicked, }:any = useContext(ContactContext);
    const handleChange = ({target}:any) => {
        const {name, value} = target
        setNewContactFields({
            ...newContactFields,
            [name]: value,
        })
        
      }
    return(
        <div className='split right high-grade'>
        <div className='close__contact' onClick={() => setAddContactClicked(false)}>X</div>
        <div className='add__right color__white'>
          <h1 className='add__title'>Create a new contact</h1>
          <div>
            <div className="input-container">
              <input name='name' type="text" required={true} onChange={handleChange} />
              <label>Name</label>
            </div>
            <div className="input-container">
              <input name='phone' type="text" required={true} onChange={handleChange} />
              <label>Phone</label>
            </div>
            <div className="input-container">
              <input name='email' type="mail" required={true} onChange={handleChange} />
              <label>Email</label>
            </div>
            <div className="input-container">
              <input name='whatsapp' type="text" required={true} onChange={handleChange} />
              <label>Whatsapp</label>
            </div>
            <button type="button" className="btn" onClick={() => createContact(newContactFields, contactList, setContactList, contacts)}>SAVE</button>
          </div>
        </div>
      </div>
    )
}

export default ContactAddPage;
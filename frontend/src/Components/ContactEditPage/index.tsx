import { useContext } from "react";
import { ContactContext } from "../../Context/Event";

function ContactEditPage() {
  const { setEditPageClicked }:any = useContext(ContactContext);
    return (
        <div>
            <div className='split right high-grade'>
                <div className='close__contact' onClick={() => setEditPageClicked(false)}>X</div>
                <div className='add__right color__white'>
                    <h1 className='add__title'>Edit a contact</h1>
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
                        <button type="button" className="btn" onClick={() =>
                             createContact(addNewContactInput, contactList, setContactList, contacts)}>SAVE</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ContactEditPage
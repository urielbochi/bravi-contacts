import { useContext } from "react";
import { ContactContext } from "../../Context/Event";
import { deleteContact } from "../../Services";

function ContactPage({contact, contactId}:any) {

    const { contactList, setContactList, setContactClicked, setEditPageClicked }:any = useContext(ContactContext);

    
  function deleteFrontContact() {
    const contactListAfterRemove = contactList.filter(
      (item: any) => item.id !== contactId
    );
    setContactList(contactListAfterRemove);
  }

  function deleteContactCalls() {
    deleteContact(contactId);
    deleteFrontContact();
    setContactClicked(false);
  }
  
    return (
        <div className='split left medium-grade'>
            <div className='close__contact' onClick={() => setContactClicked(false)}>X</div>
            <div className='centered'>
                <h1 className='userinfo__padding'>{contact.name}</h1>
                <h3 className='userinfo__padding'>{contact.phone}</h3>
                <h3 className='userinfo__padding'>{contact.email}</h3>
                <h3 className='userinfo__padding'>{contact.whatsapp}</h3>
                <button className='btn' onClick={() => setEditPageClicked(true)}>Edit contact</button>
                <button className='delete' onClick={() => deleteContactCalls()}>Delete contact</button>
            </div>
        </div>
    )
}

export default ContactPage;
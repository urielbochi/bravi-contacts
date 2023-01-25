import React, { useContext, useEffect, useState } from 'react';
import { getContactById, getContacts } from '../../Services';
import './index.css';
import Plus from '../../Images/Plus.png';
import Burguer from '../../Images/Burguer.png';
import { useParams } from 'react-router-dom';
import ContactPage from '../ContactPage';
import ContactAddPage from '../ContactAddPage';
import { ContactContext } from '../../Context/Event';
import ContactEditPage from '../ContactEditPage';



function Contacts() {
  interface IContact {
    id: number;
    name: string;
    phone: string;
    email: string;
    whatsapp: string;
    image: string;
  }


  let { contacts } = useParams();

  const [setIndividualContact] = useState<IContact[]>([]);
  const [contactId, setContactId] = useState<number>();
  const [colectContact, setColectContact] = useState<IContact[]>([]);
  const [searchBarTerm, setSearchBarTerm] = useState<string>("");
  {/* 
// @ts-ignore */}
  const { contactList, setContactList, isContactClicked, setContactClicked, addContactClicked, setAddContactClicked, editPageClicked, setNewContactFields, setEditPageClicked } = useContext(ContactContext);


  useEffect(() => {
    const pushContacts = async () => {
      const user = await getContacts(setContactList, contacts);
    };

    pushContacts();
  }, [])


  function recoverContactOnClick(contactId: number, item: IContact[]) {
    const pushContact = async () => {
      const user = await getContactById(setIndividualContact, contactId);
    };

    setContactId(contactId);
    pushContact();
    setContactClicked(true);
    setColectContact(item);
  }

  function handleChange({ target }: any) {
    setSearchBarTerm(target.value)
  }

  function addEventButtonClickedEvents(){
    setAddContactClicked(true);
    setNewContactFields({});
    setEditPageClicked(false)
  }



  return (
    <div className="main__container">
      <div className='navbar'>
        <img className='resize' src={Burguer} />
        <h1 className=''>Contacts</h1>
        <img className='resize cursor__pointer' src={Plus} onClick={() => addEventButtonClickedEvents()} />
      </div>
      <div className='search__center'>
        <input type="text" className='search__contact' onChange={handleChange} value={searchBarTerm} />
      </div>
      <div>
      </div>
      <ul className='contactList__container striped-list split left'>
        {contactList.map((item: any) => {
          return (
            <div>
              <div className='split right'>
                {isContactClicked && <img alt='User Avatar' className='contact__photo' src={`https://robohash.org/${contactId}`} />}
              </div>
              <li className='contacts__name' onClick={() => recoverContactOnClick(item.id, item)}>
                <img src={`https://robohash.org/${item.id}`} className="user__photo" />
                <div className='user__info'>
                  <h1 className='contact__padding'>{item.name}</h1>
                  <h1 className='contact__phone'>{item.phone}</h1>
                </div>
              </li>
            </div>
          )
        })}
      </ul>

      {isContactClicked && <ContactPage contact={colectContact} contactId={contactId} />}

      {addContactClicked && <ContactAddPage userId={contacts} />}

      {editPageClicked && <ContactEditPage selectedContact={contactId} />}



    </div>
  )

}

export default Contacts;

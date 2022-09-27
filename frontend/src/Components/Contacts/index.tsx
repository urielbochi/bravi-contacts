import React, { useContext, useEffect, useState } from 'react';
import { getContactById, getContacts, createContact, deleteContact } from '../../Services';
import './index.css';
import Plus from '../../Images/Plus.png';
import Burguer from '../../Images/Burguer.png';
import Kirsten from '../../Images/Kirsten.png';
import ContactInfo from '../ContactInfo';
import { useParams } from 'react-router-dom';
import ContactPage from '../ContactPage';
import ContactAddPage from '../ContactAddPage';
import { ContactContext } from '../../Context/Event';



function Contacts() {
  interface IContact {
    id: number;
    name: string;
    phone: string;
    email: string;
    whatsapp: string;
    image: string;
}

let { contacts } = useParams()



  // const [contactList, setContactList] = useState<IContact[]>([]);
  const [individualContact, setIndividualContact] = useState<IContact[]>([]);
  const [contactId, setContactId] = useState<number>();
  const [colectContact, setColectContact] = useState<any>([]);

  {/* 
// @ts-ignore */}
  const { contactList, setContactList, isContactClicked, setContactClicked, addContactClicked, setAddContactClicked } = useContext(ContactContext);


  useEffect(() => {
    const pushContacts = async () => {
        const user = await getContacts(setContactList, contacts);
    };

    pushContacts();
}, [])




  function recoverContactOnClick(contactId: number, item: IContact) {
    const pushContact = async () => {
      const user = await getContactById(setIndividualContact, contactId);
    };

    setContactId(contactId);
    pushContact()
    setContactClicked(true);
    setColectContact(item)
  }

  console.log(contactId)

  return (
    <div className="main__container">
      <div className='navbar'>
        <img className='resize' src={Burguer} />
        <h1 className=''>Contacts</h1>
        <img className='resize' src={Plus} onClick={() => setAddContactClicked(true)} />
      </div>
      <div className='search__center'>
        <input className='search__contact' />
      </div>
      <div>
      </div>
      <ul className='contactList__container striped-list split left'>
        {contactList.map((item:IContact) => {
          return (
            <div>
              <div className='split right'>
                {isContactClicked && <ContactInfo image={`https://joeschmoe.io/api/v1/${contactId}`} />}
              </div>
              <li className='contacts__name' onClick={() => recoverContactOnClick(item.id, item)}>
                <img src={`https://joeschmoe.io/api/v1/${item.id}`} className="user__photo" />
                <div className='user__info'>
                  <h1 className='contact__padding'>{item.name}</h1>
                  <h1 className='contact__phone'>{item.phone}</h1>
                </div>
              </li>
            </div>
          )
        })}
      </ul>

     {isContactClicked && <ContactPage contact={colectContact} contactId={contactId}/>}
 
      {addContactClicked && <ContactAddPage/>}


    </div>
  )

}

export default Contacts;

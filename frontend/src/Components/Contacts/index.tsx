import React, { useEffect, useState } from 'react';
import { getContactById, getContacts, createContact, deleteContact } from '../../Services';
import './index.css';
import Plus from '../../Images/Plus.png';
import Burguer from '../../Images/Burguer.png';
import Kirsten from '../../Images/Kirsten.png';
import ContactInfo from '../ContactInfo';
import { useParams } from 'react-router-dom';



function Contacts() {
  let contactInput = {
    name: "",
    phone: "",
    email: "",
    whatsapp: ""
  }
  const [contactList, setContactList] = useState<IContact[]>([]);
  const [individualContact, setIndividualContact] = useState<IContact[]>([]);
  const [contactClicked, setContactClicked] = useState<boolean>(false);
  const [addContactClicked, setAddContactClicked] = useState<boolean>(false);
  const [editTable, setEditTable] = useState<boolean>(false);

  const [profilePhoto, setProfilePhoto] = useState<number>();
  const [colectContact, setContact] = useState<any>([]);
  const [addNewContactInput, setNewContact] = useState<object>(contactInput);

  let { contacts } = useParams()


  interface IContact {
    id: number;
    name: string;
    phone: string;
    email: string;
    whatsapp: string;
    image: string;
  }

  useEffect(() => {
    const pushContacts = async () => {
      const user = await getContacts(setContactList, contacts);
    };

    pushContacts();
  }, [])

  useEffect(() => {

  }, [contactList])

  function personalUserInfo(contactId: number, item: IContact) {
    const pushContact = async () => {
      const user = await getContactById(setIndividualContact, contactId);
    };

    setProfilePhoto(contactId);

    pushContact();
    setContactClicked(true);
    setContact(item)
  }


  function openNewContact() {
    setAddContactClicked(true);
  }


  function closeNewContact() {
    setAddContactClicked(false);
  }


  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = target
    setNewContact({
      ...addNewContactInput,
      [name]: value,
    })
  }

  function deleteFrontContact() {
    const contactListAfterRemove = contactList.filter(
      (item: any) => item.id !== profilePhoto
    );
    setContactList(contactListAfterRemove);
  }

  function deleteContactCalls() {
    deleteContact(profilePhoto);
    deleteFrontContact();
    setContactClicked(false);
  }

  function editContactCalls() {

  }


  console.log(contactList);
  return (
    <div className="main__container">
      <div className='navbar'>
        <img className='resize' src={Burguer} />
        <h1 className=''>Contacts</h1>
        <img className='resize' src={Plus} onClick={() => openNewContact()} />
      </div>
      <div className='search__center'>
        <input className='search__contact' />
      </div>
      <div>
      </div>
      <ul className='contactList__container striped-list split left'>
        {contactList.map((item) => {
          return (
            <div>
              <div className='split right'>
                {contactClicked && <ContactInfo image={`https://joeschmoe.io/api/v1/${profilePhoto}`} />}
              </div>
              <li className='contacts__name' onClick={() => personalUserInfo(item.id, item)}>
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


      {contactClicked &&
        <div className='split left medium-grade'>
          <div className='close__contact' onClick={() => setContactClicked(false)}>X</div>
          <div className='centered'>
            <h1 className='userinfo__padding'>{colectContact.name}</h1>
            <h3 className='userinfo__padding'>{colectContact.phone}</h3>
            <h3 className='userinfo__padding'>{colectContact.email}</h3>
            <h3 className='userinfo__padding'>{colectContact.whatsapp}</h3>
            <button className='delete' onClick={() => deleteContactCalls()}>Delete contact</button>
            <button className='delete' onClick={() => setEditTable(true)}>Edit contact</button>
          </div>
        </div>}

      {addContactClicked &&
        <div className='split right high-grade'>
          <div className='close__contact' onClick={() => closeNewContact()}>X</div>
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
              <button type="button" className="btn" onClick={() => createContact(addNewContactInput, contactList, setContactList, contacts)}>SAVE</button>
            </div>
          </div>
        </div>}

      {editTable &&
        <div>
          <div className='split right high-grade'>
            <div className='close__contact' onClick={() => setEditTable(false)}>X</div>
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
                <button type="button" className="btn" onClick={() => createContact(addNewContactInput, contactList, setContactList, contacts)}>SAVE</button>
              </div>
            </div>
          </div>
        </div>}



    </div>
  )

}

export default Contacts;

import axios from 'axios';
import { IContact, IContactFields } from '../Components/Types/type';

export async function getContacts(setContactList: any, params: any) {
    axios.get(`http://localhost:3001/contacts/${params}`).then((response) => {
        setContactList(response.data)
        console.log(response.data);
    }).catch((err) => {
        console.log(err);
    })
}

export async function getContactById(setIndividualContact: any, contactId: number) {
    axios.get(`http://localhost:3001/contacts/item/${contactId}`).then((response) => {
        setIndividualContact(response.data);
        console.log(response);
    }).catch((err) => {
        console.log(err);
    })
}


export async function createContact(newContactFields: IContactFields, contactList:IContact[], setContactList: any, params: any) {
    axios.post("http://localhost:3001/contacts/", {
        name: newContactFields.name,
        phone: newContactFields.phone,
        email: newContactFields.email,
        whatsapp: newContactFields.whatsapp,
        userId: params
    }).then((response) => {
        setContactList([...contactList, response.data])
    }).catch((err) => {
        console.log(err);
    })
}

export async function deleteContact(contactId: any) {
    axios.delete(`http://localhost:3001/contacts/${contactId}`).then((response) => { }).catch((err) => console.log(err));
}

export async function editContact(newContactFields: IContactFields, contactId: number) {
    axios
        .put(`http://localhost:3001/contacts/${contactId}`, {
            name: newContactFields.name,
            phone: newContactFields.phone,
            email: newContactFields.email,
            whatsapp: newContactFields.whatsapp,
        })
        .then((response) => {
        })
        .catch((err) => {
            console.log(err);
        });
}

import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getContacts } from "../Services";

{/* 
// @ts-ignore */}
export const ContactContext = React.createContext();


interface IContact {
    id: number;
    name: string;
    phone: string;
    email: string;
    whatsapp: string;
    image: string;
}

type Props = {
    children?: React.ReactNode;
};

let fields = {
    name: "",
    phone: "",
    email: "",
    whatsapp: ""
  }

export default function ContactProvider({ children }: Props) {

    
    let { contacts } = useParams()
    const [contactList, setContactList] = useState<IContact[]>([]);
    const [isContactClicked, setContactClicked] = useState<boolean>(false);
    const [addContactClicked, setAddContactClicked] = useState<boolean>(false);
    const [editPageClicked, setEditPageClicked] = useState<boolean>(false); 
    const [newContactFields, setNewContactFields] = useState<object>(fields);



    return (
        <ContactContext.Provider
            value={{
                contacts,
                contactList,
                setContactList,
                isContactClicked,
                setContactClicked,
                addContactClicked,
                setAddContactClicked,
                editPageClicked,
                setEditPageClicked,
                newContactFields,
                setNewContactFields
            }}
        >
            {children}
        </ContactContext.Provider>
    );
}
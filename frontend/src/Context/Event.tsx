import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { IContact, IContactFields } from "../Components/Types/type";

{/* 
// @ts-ignore */}
export const ContactContext = React.createContext();


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
    const [newContactFields, setNewContactFields] = useState<IContactFields>(fields);



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
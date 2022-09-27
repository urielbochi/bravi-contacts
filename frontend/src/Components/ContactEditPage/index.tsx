import { useContext } from "react";
import { ContactContext } from "../../Context/Event";
import { editContact } from "../../Services";

function ContactEditPage({ selectedContact }: any) {
    const {
        setEditPageClicked,
        newContactFields,
        setNewContactFields,
        contactList,
        setContactList,
        setContactClicked }: any = useContext(ContactContext);

    const handleChange = ({ target }: any) => {
        const { name, value } = target
        setNewContactFields({
            ...newContactFields,
            [name]: value,
        })
    }

    const editContactFrontChange = () => {
        const contactListCopy = [...contactList];
        const itemIndex = contactListCopy.findIndex(
            (item) => parseInt(item.id) === parseInt(selectedContact)
        );
        contactListCopy[itemIndex] = newContactFields;
        setContactList(contactListCopy);
    };

    const editContactEvents = () => {
        editContact(newContactFields, selectedContact);
        editContactFrontChange();
        setContactClicked(false);
        setNewContactFields({});
        setEditPageClicked(false);
    }

    const closeEditEvents = () => {
        setEditPageClicked(false);
        setNewContactFields({});
    }



    return (
        <div>
            <div className='split right high-grade'>
                <div className='close__contact' onClick={() => closeEditEvents()}>X</div>
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
                            editContactEvents()}>SAVE</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ContactEditPage
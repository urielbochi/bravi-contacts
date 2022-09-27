function ContactPage() {


    return (
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
        </div>
    )
}

export default ContactPage;
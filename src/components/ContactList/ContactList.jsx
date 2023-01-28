import css from './contactList.module.css';

const ContactList = ({ contacts, deliteContact }) => {
  return (
    <ul className={css.ul}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.li}>
            {contact.name}: {contact.number}
            <button type="button" onClick={() => deliteContact(contact.id)}>
              Delite
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

import { useDispatch, useSelector } from 'react-redux';
import styles from './contact-list.module.scss';
import {selectVisibleContacts} from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);


  const contactsAll = visibleContacts.map(({ id, name, number }) => (
    <li className={styles.item} key={id}>
      {name}: {number}{' '}
      <button
        className={styles.btn}
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
  return <ol className={styles.list}>{contactsAll}</ol>;
};

export default ContactList;


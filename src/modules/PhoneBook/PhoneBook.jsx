import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import ContactsForm from './ContactsForm/ContactsForm';
import ContactList from './ContactList/ContactList';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import Loader from '../../shared/Loader/Loader';

import { fetchAllContacts } from 'redux/contacts/contacts-operations';
import { selectIsLoading, selectError, selectVisibleContacts } from 'redux/contacts/contacts-selectors';


import styles from './phone-book.module.scss';

const PhoneBook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(()=>{
    dispatch(fetchAllContacts());
  },[dispatch])

   const isContacts = Boolean(visibleContacts.length);
    return (
      <div>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <h2 className={styles.title}>Phonebook</h2>
            <ContactsForm />
          </div>
          {isLoading && !error && <Loader/>}
          <div className={styles.block}>
            <h2 className={styles.title}>Contacts</h2>
            <ContactsFilter/>
            {isContacts && (
              <ContactList />
            )}
            {!isContacts && <p className={styles.notif}>No contacts in list</p>}
          </div>
        </div>
      </div>
    );

}

export default PhoneBook;
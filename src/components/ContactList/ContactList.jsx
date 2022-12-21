import Loader from '../Loader/Loader';
import ContactElement from '../ContactElement/ContactElement';
import { useSelector } from 'react-redux';
import { useGetContactsQuery} from '../../services/phonebookApi';
import {List, Message} from './ContactList.styled.js';


const ContactList = () => {

    const {
        data: contacts = [],
        isLoading,
        isSuccess,
        isError,
        error,
        } = useGetContactsQuery();

    const filter = useSelector(state => state.filter);

    const contactsList = contacts
        .filter(cont => cont.name.toLowerCase().includes(filter))
        .sort((first, second) => first.name.localeCompare(second.name));

    return (
        <div>
            {isLoading && <Loader />}
            {isSuccess &&
                (contacts?.length > 0 ? (
                <List>
                    {contactsList.map(({ name, number, id }) => {
                        return <ContactElement key={id} id={id} name={name} number={number}/>
                    })}
                </List>
            ) : (
                <Message> No contacts available </Message>
                ))}
            {isError && <Message> Error: {error} </Message>}
        </div>
    );
};

export default ContactList;
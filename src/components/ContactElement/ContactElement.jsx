import { useDeleteContactMutation } from '../../services/phonebookApi';
import { List, ListItem, ListButton } from './ContactElement.styled'

const ContactElement = ({ id, name, number }) => {

    const [deleteItem] = useDeleteContactMutation();

    return (
        <List key={id}>
            <ListItem>{name}:</ListItem> {number}
            <ListButton onClick={() => { deleteItem(id); }}>
                ⛌
            </ListButton>
        </List>
    );
};

export default ContactElement;
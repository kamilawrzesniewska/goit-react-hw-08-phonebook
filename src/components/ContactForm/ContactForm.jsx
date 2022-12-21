import { nanoid } from 'nanoid';
import { Form, Input, Label, Button} from './ContactForm.styled';
import { useAddContactMutation, useGetContactsQuery } from '../../services/phonebookApi';


const ContactForm = () => {

  const { data: contacts = [] } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      try {
        await addContact({
          id: nanoid(),
          name,
          number,
        });
      } catch (error) {
        alert(`Failed! Save error`);
      }
      form.reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        id="name"
        placeholder='Enter name'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="number">Number</Label>
      <Input
        type="tel"
        name="number"
        id="number"
        placeholder='Enter phone number'
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

  export default ContactForm;
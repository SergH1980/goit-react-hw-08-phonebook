import ContactForm from 'components/ContactForm/Form';
import ContactList from 'components/ContactList/ContactList';
import Section from 'components/Section/Section';
import ContactFilter from '../../components/ContactFilter';

export default function Contacts() {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <ContactFilter />
        <ContactList />
        <button type="button" onClick={() => console.log(`editedContact`)}>
          check editedContact
        </button>
      </Section>
    </>
  );
}

import ContactForm from 'components/ContactForm/Form';
import ContactList from 'components/ContactList/ContactList';
import Section from 'components/Section/Section';
import ContactFilter from '../../components/ContactFilter';

export function Contacts() {
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <ContactFilter />
        <ContactList />
      </Section>
    </div>
  );
}

import ContactForm from 'components/ContactForm/Form';
import ContactList from 'components/ContactList/ContactList';
import Section from 'components/Section/Section';
import ContactFilter from '../../components/ContactFilter';

export default function Contacts() {
  let initialValues = { name: '', number: '' };
  return (
    <>
      <Section title="Phonebook">
        <ContactForm use="add" initialValues={initialValues} />
      </Section>
      <Section title="Contacts">
        <ContactFilter />
        <ContactList />
      </Section>
    </>
  );
}

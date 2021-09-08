import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Section from "../../Section";
import MyForm from "../../Form";
import Filter from "../../Filter";
import ContactList from "../../Contacts";
import { fetchContacts } from "../../../redux/phonebook/phonebook-operations";

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <>
      <Section>
        <MyForm />
      </Section>
      <Section title="My contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}

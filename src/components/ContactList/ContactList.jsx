import React from "react";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.item}>
        <p>
          {name}: {number}
        </p>
        <button onClick={() => onDeleteContact(id)} className={styles.button}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;

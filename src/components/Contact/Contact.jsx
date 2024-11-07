import React from "react";
import styles from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => (
  <li className={styles.item}>
    <p className={styles.text}>
      {contact.name}: {contact.number}
    </p>
    <button
      className={styles.button}
      onClick={() => onDeleteContact(contact.id)}
    >
      Delete
    </button>
  </li>
);

export default Contact;

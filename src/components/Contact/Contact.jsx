import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ id, name, number, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(id);
  };

  return (
    <li className={css.contactCard}>
      <div className={css.contactInfo}>
        <div className={css.infoRow}>
          <FaUser />
          <span>{name}</span>
        </div>
        <div className={css.infoRow}>
          <FaPhoneAlt />
          <span>{number}</span>
        </div>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

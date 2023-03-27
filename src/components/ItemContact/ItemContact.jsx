import { Item, Contact, DeleteBtn } from './ItemContact.styled';

export const ContactItem = ({ name, contact, onDelete }) => {
  return (
    <Item>
      <Contact>
        {name}: {contact}
      </Contact>
      <DeleteBtn type="button" onClick={onDelete}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

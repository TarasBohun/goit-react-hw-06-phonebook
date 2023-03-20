import PropTypes from 'prop-types';
import { List, Item, Container } from './Contacts.styled';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Container key={id}>
            <Item>
              {name}: {number}
            </Item>
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </Container>
        );
      })}
    </List>
  );
};

Contacts.protoType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';

export default function ShoppingListItem({ item, quantity, completed }) {
  const styles = {
    color: completed ? 'gray' : 'red',
    textDecoration: completed ? 'line-through' : 'none',
  };
  return (
    <li style={styles}>
      {item} - {quantity}
    </li>
  );
}

ShoppingListItem.propTypes = {
  item: PropTypes.string,
  quantity: PropTypes.number,
  completed: PropTypes.bool,
};

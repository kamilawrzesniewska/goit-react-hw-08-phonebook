import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ type,title, onClick }) => {
  const { btn } = styles;

  return (
    <button className={btn} onClick={onClick} type={type}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string
};
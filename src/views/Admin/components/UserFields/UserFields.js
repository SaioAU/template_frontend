import PropTypes from 'prop-types';

import styles from './UserFields.scss';

const UserFields = ({ name, onChangeName, email, onChangeEmail, password, onChangePassword }) => (
  <>
    <label htmlFor="edit-user-name" className={styles.label}>
      Name:
      <input value={name} onChange={onChangeName} type="text" id="edit-user-name" className={styles.input} />
    </label>
    <label htmlFor="edit-user-email" className={styles.label}>
      Email:
      <input value={email} onChange={onChangeEmail} type="email" id="edit-user-email" className={styles.input} />
    </label>
    {onChangePassword && (
      <label htmlFor="edit-user-password" className={styles.label}>
        Password:
        <input
          value={password}
          onChange={onChangePassword}
          type="password"
          id="edit-user-password"
          className={styles.input}
        />
      </label>
    )}
  </>
);

UserFields.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  password: PropTypes.string,
  onChangePassword: PropTypes.func,
};

export default UserFields;

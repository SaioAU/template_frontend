import { Link } from 'react-router-dom';
import styles from './Footer.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link to="/instagram"> instagram </Link>
      <div> epost: ingrid@gmail.com </div>
    </div>
  );
};

export default Footer;

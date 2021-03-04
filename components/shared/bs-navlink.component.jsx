import { NavItem } from 'reactstrap';
import Link from 'next/link';

const BsNavlink = ({ href, text, className }) => {
  return (
    <NavItem>
      <Link href={href}>
        <a className={`nav-link ${className}`}>{text}</a>
      </Link>
    </NavItem>
  );
};

export default BsNavlink;

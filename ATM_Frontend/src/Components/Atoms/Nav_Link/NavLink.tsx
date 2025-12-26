import './NavLink.css'
type NavLinkProps={
    name:string;
    href:string;
    className:string;
}
const NavLink:React.FC<NavLinkProps> = ({name,href,className}) => {
  return (
    <div>
        <a className={className} href={href}>{name}</a>
    </div>
  )
}

export default NavLink
import NavLink from "../../Atoms/Nav_Link/NavLink"
import './NavLinkGroup.css'

const NavLinkGroup:React.FC = () => {
  return (
    <div className="nav-gr">
        <NavLink name2={"Home"} href={""} className={"a1"}></NavLink>
        <NavLink name2={"Deposit"} href={""} className={"a1"}></NavLink>
        <NavLink name2={"Withdraw"} href={""} className={"a1"}></NavLink>
        <NavLink name2={"Transaction History"} href={""} className={"a1"}></NavLink>
    </div>
  )
}

export default NavLinkGroup
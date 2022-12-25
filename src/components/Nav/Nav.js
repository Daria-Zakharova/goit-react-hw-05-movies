import { nanoid } from "nanoid";
import { NavList, NavItem } from "./Nav.styled";

export const Header = ({buttons}) => {
    return (
        <header>
            <nav>
            <NavList>
                {buttons.map((button) => {
                    return (
                        <li key = {nanoid()}>
                            <NavItem className={button} to={button === 'home' ? '/' : ('/' + button)}>{button}</NavItem>
                        </li>
                    )
                })}
            </NavList>
        </nav>
        </header>
    )
}
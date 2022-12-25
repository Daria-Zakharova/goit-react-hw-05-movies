import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavList = styled.ul`
    position: relative;
    display: flex;
    padding: 40px 0 0 100px;
    border-bottom: 2px solid black;
`;

export const NavItem = styled(NavLink)`
    position: absolute;
    bottom: -2px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 30px;
    margin-right: 20px;
    border-radius: 5px 10px 0 0;
    background-color: #aaa;
    border: 2px solid black;
    text-transform: capitalize;

    &.movies {
        left: 220px;
    }

    &.active {
        background-color: #fff;
        border-bottom: none;
        cursor: default;
    }

    &:hover:not(.active) {
        font-weight: 700;
    }
`;
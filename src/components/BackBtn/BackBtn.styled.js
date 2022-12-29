import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const BackLink = styled(Link)`
    display: block;
    width: fit-content;
    margin: 40px 100px 0;
    padding: 10px;
    border: 2px solid #000;
    border-radius: 5px;
    background-color: #d2d2d2;

    &:hover, &:focus {
        background-color: #f0f0f0;
    }
`;
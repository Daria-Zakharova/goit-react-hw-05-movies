import styled from "@emotion/styled";

export const SearchForm = styled.form`
    display: flex;
    padding: 40px 0 0 100px;

    input{
        padding: 5px;
        font-size: inherit;
        border: solid 2px black;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0px;
        border-left: none;
        background-color: #d2d2d2;

    &:hover, &:focus {
        background-color: #f0f0f0;
    }
    }
`;
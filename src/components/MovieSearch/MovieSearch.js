import { SearchForm } from "./MovieSearch.styled";
import {CgSearch} from "react-icons/cg"

export const MovieSearch = ({onSubmit}) => {
    return (
        <SearchForm onSubmit = {onSubmit}>
            <input name="search" type='text'/>
            <button><CgSearch size = "20"/></button>
        </SearchForm>
    )
};
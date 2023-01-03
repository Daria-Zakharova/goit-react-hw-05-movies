import { SearchForm } from "./MovieSearch.styled";
import {CgSearch} from "react-icons/cg"
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const MovieSearch = ({onSubmit}) => {
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title') ?? '';
    const [query, setQuery] = useState(title);
    return (
        <SearchForm onSubmit = {onSubmit}>
            <input name="search" type='text' value = {query} onChange = {(e) => setQuery(e.target.value)}/>
            <button><CgSearch size = "20"/></button>
        </SearchForm>
    )
};
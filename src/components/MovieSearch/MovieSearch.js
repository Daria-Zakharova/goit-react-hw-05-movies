import { SearchForm } from "./MovieSearch.styled";

export const MovieSearch = ({onSubmit}) => {
    return (
        <SearchForm onSubmit = {onSubmit}>
            <input name="search" type='text'/>
            <button>OK</button>
        </SearchForm>
    )
};
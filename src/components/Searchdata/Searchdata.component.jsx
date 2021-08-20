import React from 'react';
import CardSearch from "../CardForSearch/CardForSearch.component";
import {SearchdataContainer, Sech} from './Searchdata.styles';


const SearchData = ({search}) => {
    return (
        <SearchdataContainer>
            <Sech>
            <CardSearch />
            <CardSearch />
            <CardSearch />
            </Sech>
        </SearchdataContainer>

    )
}

export default SearchData;
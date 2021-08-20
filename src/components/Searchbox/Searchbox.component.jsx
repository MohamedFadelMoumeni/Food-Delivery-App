import React, {useState, useEffect} from 'react';
import {SearchIcon, SearchBoxContainer, ForminputText} from './Searchbox.styles';
import SearchData from '../Searchdata/Searchdata.component';
import Search from '../../assets/search.svg';

const SearchBox = () => {
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(false);
    useEffect(() => {
       if(search.length === 0){
           setOpen(false);
       }
    }, [search])
    return (
        <SearchBoxContainer>
        <SearchIcon src={Search} />
        <ForminputText handleChange={(e) => {
            setOpen(true);
            setSearch(e.target.value)
        }} value={search} type="text" placeholder="What are you craving ?" />
        {
            open ? 
            (<SearchData search={search}/>) : false
        }
        </SearchBoxContainer>
    )
}

export default SearchBox;
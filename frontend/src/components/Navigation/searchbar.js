import { useSelector } from "react-redux";
import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'

const Search = () =>{
    const cocktails = useSelector((state) => Object.values(state.cocktail.cocktails))

    const [filtered, setFiltered] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        setSearch('')
    },[])

    useEffect(()=>{
        if(search === ""){
            return setSearch("")
        }else{
            setSearch(search)
        }

        const searchDrinks = cocktails?.filter((drink)=>{
            if(drink?.liquorType.toLowerCase().includes(search?.toLowerCase())){
                return drink
            }
        })
        setFiltered(searchDrinks)

    }, [search])

    return (
        <div className="search-bar">
            <div className="search-input">
                <input
                type='search'
                placeholder='Search by Liquor Type'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                />
            </div>
            {search &&(
                <div className='search-results'>
                {filtered?.map((drink, key) => {
                    return <NavLink className='search-item' to={`/cocktails/${drink?.id}`} onClick={() => setSearch("")}>
                        <p key={key}>{drink?.name} </p>
                        </NavLink>
                })}
            </div>
            )}
        </div>
    )
}

export default Search
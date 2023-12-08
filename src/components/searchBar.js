import React from 'react'
import searchIcon from '../imgs/searchIcon.svg'
import searchButtonIcon from '../imgs/enterSearchIcon.svg'

function SearchBar() {
  return (
    <div className='searchForm'>
        <h2>Temukan barang anda!</h2>
        <form action="#" className='formContainer'>
            <img className="searchIconForm" src={searchIcon} alt=""/>
            <input type="text" placeholder="Ketik kebutuhan elektronik anda" name="email"/>
            <button class="searchButton">
                <a href="#">
                    <img className="searchIconEnter" src={searchButtonIcon} alt=""/>
                </a>
            </button>
        </form>
    </div>
  )
}

export default SearchBar
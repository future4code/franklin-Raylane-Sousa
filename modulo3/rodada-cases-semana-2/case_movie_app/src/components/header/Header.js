import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import React from 'react'
import{MdOutlineMovieFilter, MdOutlineSavedSearch} from 'react-icons/md'
import './HeaderStyled.js'
import { FormButton, FormNavbar, InputNavbar, Navbar, TitleNavbar } from './HeaderStyled.js';

function Header() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch("")
  }

  return (
    <Navbar>
      <TitleNavbar>
        <Link to='/'><MdOutlineMovieFilter/> Movie App</Link>
      </TitleNavbar>
      
     <FormNavbar onSubmit={handleSubmit}>
         <InputNavbar 
         type='text' 
         placeholder='Seach movie'
         onChange={(e) => setSearch(e.target.value)}
         value={search}
         />
         <FormButton type='submit'><MdOutlineSavedSearch/></FormButton>
     </FormNavbar>
    </Navbar>
  )
}

export default Header
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import React from 'react'
import{MdOutlineSavedSearch} from 'react-icons/md'
import{BsCollectionPlayFill} from 'react-icons/bs'
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
      <FormNavbar>
      <TitleNavbar>
        <Link to='/'><BsCollectionPlayFill/></Link>
      </TitleNavbar>
      <>|</>
      <TitleNavbar>
        <Link to='movie/top_rated'>Top Filmes</Link>
      </TitleNavbar>
      </FormNavbar>
      
      
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
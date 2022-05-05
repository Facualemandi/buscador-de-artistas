import React, { useState } from 'react';
import '../Styles/Search.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const newEntry = {
    artist: '' ,
}


const SearchArtist = ({hSearch}) => {

   const [form, setForm] = useState(newEntry)


 const handleSearch = (e) => {
     setForm({...form, [e.target.name]:e.target.value})
 }

 const handlesubmit = (e) => {
     e.preventDefault()

      if(!form.artist){
          alert('Datos Incompletos');
      }else{
        hSearch(form)
      }   
 } 



  return (
     <>
       <section onSubmit={handlesubmit}>
           <form className='search'>
              <input name='artist' type={'text'} placeholder='Enter Your Artist Favorite'  onChange={handleSearch} value={form.artist}/>
              <button type='submit' className='btn'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
           </form>

       </section>
     </>
  )
}

export default SearchArtist
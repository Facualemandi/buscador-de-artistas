import React, { useState } from 'react';
import '../Styles/Search.css'

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
              <input type={'submit'} value='Send Artist'/>
           </form>

       </section>
     </>
  )
}

export default SearchArtist
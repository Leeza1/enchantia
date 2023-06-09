import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
  return (
    <div className='container-padding'>
        <Link to={'/necklace'}><button className='btn btn-info'>Necklace</button></Link><br /> <br />
        <Link to={'/earing'}><button className='btn btn-info'>Earing</button></Link><br /> <br />
        <Link to={'/bracelet'}><button className='btn btn-info'>Bracelet</button></Link><br /> <br />
        <Link to={'/ring'}><button className='btn btn-info'>Ring</button></Link><br /> <br />
    </div>
  )
}

export default List
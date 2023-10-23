import './BtnGroupSize.scss'

export default function BtnGroupSize({size,height, selected, setSelectedBox}) {
  return ( 
      // <div className="groupSize">
      <>
      <button onClick={() => setSelectedBox(size)}className={` btn-dark rounded size ${selected ? 'selected': ''}`}>
          <h5 className='sizetext'>{size}</h5>
          <small className='text-light'>{height}</small>
      </button>
      </>
      // </div>
  )
}

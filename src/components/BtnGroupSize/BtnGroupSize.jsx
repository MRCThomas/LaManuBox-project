import './BtnGroupSize.scss'

export default function BtnGroupSize({size,height, selected, setSelectedBox}) {
  return ( 
      // <div className="groupSize">
      <>
      <button onClick={() => setSelectedBox(size)}className={`btn btn-dark size ${selected ? 'selected': ''}`}>
          <h5 className='sizetext'>{size}</h5>
          <small className='text-light'>{height}</small>
      </button>
      </>
      // </div>
  )
}

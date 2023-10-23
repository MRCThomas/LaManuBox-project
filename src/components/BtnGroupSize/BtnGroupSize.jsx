import './BtnGroupSize.scss'

export default function BtnGroupSize({size,height, selected, setSelectedBox}) {
  return ( 
      // <div className="groupSize">
      <>
      <button onClick={() => setSelectedBox(size)}className={`size ${selected ? 'selected': ''}`}>
          <h5 className='sizetext'>{size}</h5>
          <small>{height}</small>
      </button>
      </>
      // </div>
  )
}

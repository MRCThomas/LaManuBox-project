import CustomButton from '../CustomButton/CustomButton'
import './CustomIncrementalInput.scss'

function CustomIncrementalInput({value, increment,decrement}) {
  return (
    <>   
    <div className='incremental'>
      <CustomButton radius={"left"} icon="-" callback={decrement} />
      <span>
      {value}
      </span>
      <CustomButton radius={"right"} icon="+" callback={increment}/>
    </div>
    </>
  )
}

export default CustomIncrementalInput
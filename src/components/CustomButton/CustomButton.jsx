import"./CustomButton.scss"
// import"../CustomButton/CustomButton.scss"

function CustomButton( props) {
    const {radius, icon,callback} = props
    // const style = radius === 'left' ? {borderRadius: "10% 0% 10% 0%"} : {borderRadius: "0% 10% 0% 10%"} 
    const handleClick = () =>{
        // console.log('test',typeof callback);
        callback()
    }
  return (
    <button className={`btnAdd button${radius}`} onClick={handleClick}>{icon}</button>
    // <button className={`btn${radius}`} style={style} onClick={handleClick}>{icon}</button>
  )
}

export default CustomButton
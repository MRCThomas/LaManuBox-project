// /Vérification de l'orthographe de l'article saisi
export const spell = async (word) => {
    //   useEffect(() => {
      const res = await fetch(`https://api.textgears.com/spelling?key=zGrhLvJrKzyD4532&text=${word}!&language=fr-FR`)
      const data = await res.json()
      console.log(data);
        if(data.response.errors.length == 0){
            
            console.log('orthoraphe correct du mot');  
            return true;
        }else{
          alert("Veuillez vérifier le nom de l'objet");
          return false;
        }
          
      }
           //   api : 
        //   zGrhLvJrKzyD4532

         //   spell(nameVerif)
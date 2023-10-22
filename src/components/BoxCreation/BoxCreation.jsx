import './BoxCreation.scss'

import { useState , useEffect} from 'react';
import CustomIncrementalInput from '../CustomIncrementalInput/CustomIncrementalInput';
import CustomFontAwesomeIcon from '../CustomFontAwesomeIcon/CustomFontAwesomeIcon';
// import handleRemoveChecked from './handleRemoveChecked';
// import { handleRemoveChecked } from './handleRemoveChecked'
// import { spell } from '../constants/fetchApi';
import {CalcForm} from '../CalcForm';
import {CalculateBoxSuggestion} from '../CalculateBoxSuggestion';

export default function BoxCreation() {
  //DECLARATION DES STATES
    //state pour les entrées de l'utilisateur pour les ajouetr a la liste
    const [userEntries, setUserEntries] = useState([]);
    //state de la taille e l'article
    const [items, setItems] = useState(0);
    //state du nom de l'article
    const [namoObject, setNameObject] = useState('');
    //state pour stocker la quantité d'un aricle
    const [quantityArticles, setQuantityArticles] = useState(1);
    //state de l'esppace disponible initialiser a 100
    const [spaceAvailable, setSpaceAvailable] = useState(100);
    // state que le client puissent retirer des articles dans la box à un tableau vide
    const [selectedItems, setSelectedItems] = useState([])
    //  state de resultat du calcule de l'espcae
    const [result, setResult] = useState(0);
  //local storage 
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    // SECTION CHOIX DE L'UTILISATEUR AVEC AUGMENTATION/DIMINUTION
    const [countChair, setCountChair] = useState(0)
    const [countTable, setCountTable] = useState(0);
    const [countCupboard, setCountcupboard] = useState(0);
    const [countSofa, setCountSofa] = useState(0);
    const [countChest, setCountChest] = useState(0);
    const [countTv, setCountTv] = useState(0);

    //VOLUME DES ELEMENTS 
    const volumeChaise = 0.2 ;
    const volumeTable = 1.5 ;
    const volumecupboard = 1.03 ;  //armoire
    const volumeSofa = 3 ;      //canapé
    const volumeChest = 1.6 ;    //commode
    const volumeTv = 0.7 ;        //meuble Tv
  
    const [checked, setChecked] = useState(false)
    const handlecheck = () => {
      // setBoxes(e.target.value);
      setChecked(!checked);
    };

    //maj de la valeur de la taille entrée par l'utilisateur
    const handleItemsChange = (e) => {
      setItems(e.target.value);
  
    };
      //maj de la valeur du nom de l'article entrée par l'utilisateur
      const handlenameChange = (e) => {
        setNameObject(e.target.value); 
    
      };

      //maj de la valeur du nom de la quantité de l'article entrée par l'utilisateur
      const handleQuantityArticles = (e) => {
        setQuantityArticles(e.target.value);
        };
             
          // CALCUL DE L'ESPACE DEMANDES PAR L'UTILISATEUR
  const handleCalculateSpace = () => {
                    // if (!spell(namoObject)) {
                    //   return
                    // } 
                    
            // CALCUL DE LA VALEUR DE LA SAISI DE L4URILISATEUR
            const calcChair = CalcForm(volumeChaise,countChair)
            const calcTable = CalcForm(volumeTable,countTable)
            const calcCupBoard= CalcForm(volumecupboard, countCupboard)
            const calcsofa = CalcForm(volumeSofa, countSofa)
            const calcChest = CalcForm(volumeChest, countChest)
            const calcTv = CalcForm(volumeTv, countTv)

            // ESPACE TOTAL UTILSE PAR LES CHAMPS
            const space_usedForm = calcChair + calcTable + calcCupBoard + calcsofa + calcChest + calcTv;
            let newResult = result;

            // CALCUL DE LA VALEUR DE LA SAISI DE L4URILISATEUR DANS LE CH1MPS AUTRE
            const space_usedOther = (parseFloat(items) * parseInt(quantityArticles)).toFixed(2);
              const resultcalc = parseFloat(space_usedOther) + parseFloat(space_usedForm);
              if (resultcalc > spaceAvailable) {
                alert("L'espace est plein. Veuillez retirer des objets.");
              } else {
                newResult += parseFloat(resultcalc);
                setResult(newResult);
              };

              //STOCKAGE DE LA SAISI DANS UN OBJET
                const entry = parseInt(items) ;
                const entryName = namoObject.charAt(0).toUpperCase() + namoObject.slice(1) ;
                const entryquantity = parseInt(quantityArticles);            
                // console.log(userEntries);
                setUserEntries(
                  [...userEntries, {name : entryName,
                   space : entry ,
                    quantity : entryquantity,
                     Table : countTable,
                      Chair : countChair ,
                      Cupboard: countCupboard,
                      Sofa : countSofa,
                      Chest : countChest,
                      Tv : countTv
                    }]);
          
                // Réinitialiser les champs de saisie
                console.log(userEntries);;
                setItems(0);
                setNameObject('');
                setQuantityArticles(1);
                // setStackable(false);
                setCountChair(0)
                setCountTable(0)
                
                
      };

        // Utilisez un effet pour charger les données à partir du localStorage lors de l'initialisation
    useEffect(() => {
      const savedEntries = localStorage.getItem('userEntries');
      if (savedEntries) {
        setUserEntries(JSON.parse(savedEntries));
        setIsDataLoaded(true);
      }
    }, []);

  // Lorsque la liste d'éléments change, mettez à jour le localStorage
    useEffect(() => {
      if (isDataLoaded) {
        localStorage.setItem('userEntries', JSON.stringify(userEntries));
      }
    }, [userEntries]);


      const suggestion = CalculateBoxSuggestion(result);
      // handleRemoveChecked(result, userEntries, setResult, setUserEntries)
      //FONCTION D'INCREMENTATION DES BOUTONS

        const handleRemoveChecked = () => {
          const uncheckedEntries = userEntries.filter((entry) => !entry.checked);
          const removedEntries = userEntries.filter((entry) => entry.checked);
        
          const spaceRecovered = removedEntries.reduce((total, entry) => {
            return total + (entry.space * entry.quantity) 
            + (volumeChaise * entry.Chair) 
            + (volumeTable * entry.Table) 
            + (volumecupboard * entry.Cupboard) 
            + (volumeSofa * entry.Sofa)
            + (volumeChest * entry.Chest)
            + (volumeTv * entry.Tv);
          }, 0);
        console.log('test space' , spaceRecovered);
          // Mettre à jour l'espace disponible et les entrées d'utilisateur
          // setSpaceAvailable(spaceAvailable + spaceRecovered);
          setUserEntries(uncheckedEntries);
          setResult(result - spaceRecovered); // Mettre à jour le résultat en retirant l'espace récupéré
        };

    return (
      <section id='boxSelection'>
        <div className='boxInformation'>
        {/* <div className='boxAnimation'></div> */}
                  <h3>Location de Box</h3>
                      <div className="quantity">
                          <div className='btnGroupQuantity'>
                                <div className="btnGroupQuantity__item">
                                    <label htmlFor=""> Chaise </label>
                                    <CustomIncrementalInput value={countChair} increment={()=>setCountChair(c=>c+1)} decrement={()=>{ if (countChair > 0) {setCountChair(c => c - 1)}}}/>
                                </div>
                                <div className="btnGroupQuantity__item">
                                    <label htmlFor=""> Table </label>
                                    <CustomIncrementalInput value={countTable} increment={()=>setCountTable(c=>c+1)} decrement={()=>setCountTable(c=>c-1)}/>
                                </div>
                                <div className="btnGroupQuantity__item">
                                    <label htmlFor=""> Armoire </label>
                                    <CustomIncrementalInput value={countCupboard} increment={()=>setCountcupboard(c=>c+1)} decrement={()=>setCountcupboard(c=>c-1)}/>
                                </div>
                          </div>
                          <div className='btnGroupQuantity'>
                                <div className="btnGroupQuantity__item">
                                    <label htmlFor=""> Canapé </label>
                                    <CustomIncrementalInput value={countSofa} increment={()=>setCountSofa(c=>c+1)} decrement={()=>setCountSofa(c=>c-1)}/>
                                </div>
                                <div className="btnGroupQuantity__item">
                                    <label htmlFor=""> Commode </label>
                                    <CustomIncrementalInput value={countChest} increment={()=>setCountChest(c=>c+1)} decrement={()=>setCountChest(c=>c-1)}/>
                                </div>
                                <div className="btnGroupQuantity__item">
                                  <label htmlFor=""> Meuble TV </label>
                                  <CustomIncrementalInput value={countTv} increment={()=>setCountTv(c=>c+1)} decrement={()=>setCountTv(c=>c-1)}/>
                                </div>
                          </div>

                      </div>

                <div className='otherForm'>
                    <h6> Autres</h6>
                    <small> assurez vous de respecter l'orthographe de vos entrées </small>
                    <div className="row">
                      <div className="col-4">
                          <label htmlFor="items">Nom de l'Objet</label>
                          <input type="text" id="items" value={namoObject} onChange={handlenameChange} className="form-control" /> 
                      </div>
                      <div className="col-4">
                          <label htmlFor="items">taille de l'Objets en m3 :</label>
                          <input type="text" id="items" value={items} onChange={handleItemsChange} className="form-control" />
                      </div>
                      <div className="col-4">
                          <label htmlFor="items">Quantité à stocker :</label>
                          <input type="number" id="items" value={quantityArticles} onChange={handleQuantityArticles} className="form-control" />
                      </div>
                    </div>
                </div>
                <div className="calculateSpace mt-3 mb-3">
                      <button onClick={handleCalculateSpace} className='btnSpace'>Calculer l'espace renseigné</button>
                </div>
                <div className="recommandation">
                      <h3>
                          {suggestion.text}
                      </h3>
                      <h2> Estimation de  l'espace démandé : {result}</h2>
                </div>
                <div className="recap">
                        <h5> Voici le recap de vos achats cochez ce que vous voulez retiez avant validation  </h5>
                        <div className="recap__item">
                              {userEntries.map((item, index) => (
                                <div key={index}>
                                  {item.name && <p>Nom de l'article : {item.name}</p>}
                                  {item.space > 0 && <p>Taille de l'article en m3 : {item.space}</p>}
                                  {item.quantity  > 2 && <p>Quantité de l'article : {item.quantity}</p>}
                                  {item.Table > 0 && <p>Table : {item.Table}</p>}
                                  {item.Chair > 0 && <p>Chaise : {item.Chair}</p>}
                                  {item.Cupboard > 0 && <p>Armoire: {item.Cupboard}</p>}
                                  {item.Sofa > 0 && <p>Canapé : {item.Sofa}</p>}
                                  {item.Chest > 0 && <p>Commode : {item.Chest}</p>}
                                  {item.Tv > 0 && <p>Meuble Tv : {item.Tv}</p>}
                                  <input
                                    type="checkbox"
                                    checked={item.checked}
                                    onChange={() => {
                                      item.checked = !item.checked;
                                      setUserEntries([...userEntries]);
                                    }}
                                  />
                                </div>
                              ))}

                        </div>
                        <div className="deleteObject">
                              <button onClick={handleRemoveChecked}>Supprimer</button>
                        </div>
                </div>
            </div>
            <div className='boxAnimation'>

                    <div className='boxIcone'>
                          <CustomFontAwesomeIcon  color={suggestion.colorClass }
                            size={
                              result >= 0 && result <= 7.5
                                ? '320px'
                                : result > 7.5 && result <= 15
                                ? '340px'
                                : result > 15 && result <= 25
                                ? '380px'
                                : result > 25 && result <= 40
                                ? '420px'
                                : '350px' // Taille par défaut
                            }
                            style={{
                              transition: 'size 0.3s, color 0.3s' // Animation de transition pour la taille et la couleur
                            }}
                          />
                      </div>  

            </div>
                
      </section>
    );
}
import React from 'react'
import { Link } from 'react-router-dom'
import './home.scss'

export default function Home() {
  return (
      <div className='container-fluid col-lg-9'>
        {/* Banner */}
        <div className='row align-items-center section'>
            <div className='col'>
              <h1 className='text-uppercase mb-4'>Découvrez nos <span className='highlight'><br />box de stockage</span ><br />adaptées à<br />vos <span className='highlight'>besoins</span></h1>
              <Link className='btn btn-primary'>
                <p className='m-0 text-white'>Réserver ma box</p>
                {/* <img src="" alt="Flèche droite" /> */}
              </Link>
            </div>
            <img className='col-xl img-margin-top' src="./src\assets\images\illustration1.png" alt="Box" />
        </div>

        {/* About us */}
        <div className='row justify-content-around align-items-center section'>
          {/* Card */}
            <div className='col-xl-5'>
              <img className='img-margin-bottom' src="./src\assets\images\la-manu-build.png" alt="La Manu" />
            </div>
            <div className='col'>
              <h2>Bienvenue chez <span className='highlight'>La Manu Box</span>, votre <span className='highlight'>partenaire</span> de stockage de confiance</h2>
              <p className='mt-4'><span className='highlight'></span>À La Manu Box, nous comprenons que chaque espace de stockage renferme des histoires précieuses. C'est pourquoi nous nous sommes engagés à offrir un service de location de <span className='highlight'>box de stockage sécurisé</span> qui dépasse vos attentes.</p>
              <p className='mb-4'><span className='highlight'></span>Notre mission est de vous fournir <span className='highlight'>la tranquilité d'esprit</span> en veillant sur vos biens les plus précieux. Nous vous offrons <span className='highlight'>des solutions de sotckage adaptées à vos besoins</span>, qu'il s'agisse de biens personnels, de matériel professionnel, ou d'inventaire commercial.</p>
              <Link className='btn btn-primary'>
                <p className='m-0 text-white'>Réserver ma box</p>
                {/* <img src="" alt="Flèche droite" /> */}
              </Link>
            </div>
        </div>

        {/* Reinsurance */}
        <div className='row section text-center'>
            <div className='col'>
              <div className='d-flex flex-column align-items-center'>
                <img className='mb-3' src="./src\assets\images\security-camera-svgrepo-com.png" alt="Caméra de surveillance" />
                <p className='fw-bolder'>Des box <span className='highlight'>sécurisées</span> </p>
                <p>C'est vous qui avez le <span className='highlight'>contrôle total</span> de l'accès à votre box, <span className='highlight'>24 heures sur 24, 7 jours sur 7</span>, grâce à votre code secret personnel. </p>
              </div>
            </div>
            <div className='col'>
              <div className='d-flex flex-column align-items-center'>
                <img className='mb-4' src="./src\assets\images\warehouse-hangar-svgrepo-com.png" alt="Box de stockage" />
                <p className='fw-bolder'>Des box <span className='highlight'>accessibles</span></p>
                <p>Chacun de nos centres est équipé <span className='highlight'>d'un grand nombre de caméras</span> pour détecter les intrusions et les incendies.</p>
              </div>
            </div>
            <div className='col'>
              <div className='d-flex flex-column align-items-center'>
                <img className='mb-4' src="./src\assets\images\diploma-contract-svgrepo-com.png" alt="Contrats flexibles" />
                <p className='fw-bolder'>Des contrats <span className='highlight'>flexibles</span></p>
                <p>La procédure de souscription est <span className='highlight'>rapide</span> et permet des ajustements <span className='highlight'>sans coût supplémentaire</span></p>
              </div>
            </div>
        </div>

        {/* Info */}
        <div className='row align-items-center section'>
            <div className='col'>
              <h2>Services de <span className='highlight'>transport</span><br />vers <span className='highlight'>votre box</span></h2>
              <p className='text-margin-right'>Nos services complémentaires incluent le transport de vos biens directement vers votre box. Vous n'avez pas à vous soucier du déplacement, nous nous occupons de tout pour vous, rendant le processus de stockage aussi pratique que possible</p>
            </div>
            <img className='col-xl-5 img-margin-top' src="src\assets\images\illustration2.png" alt="Transport" />
        </div>

        {/* Simulator */}
        {/* <div className='row'>
            <div>
              <h2>Lorem ipsum dolor sit amet</h2>
              <div className='d-flex'>
                <div className='col-sm-2 bg-primary text-light rounded text-center'>
                  <p className='fw-bold fs-3'>S</p>
                  <p>2 à 3 m²</p>
                </div>
                <div className='size-btn'>
                  <p>M</p>
                  <p>3 à 6 m²</p>
                </div>
                <div className='size-btn'>
                  <p>L</p>
                  <p>6 à 10 m²</p>
                </div>
                <div className='size-btn'>
                  <p>XL</p>
                  <p>10 à 16 m²</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur. Tortor auctor pellentesque pulvinar leo ut fusce ut. Integer tristique nibh faucibus aliquet dapibus eu egestas. Arcu arcu eleifend diam sed dictum. Laoreet amet gravida condimentum facilisi consectetur malesuada vitae sem. Libero mauris vestibulum pretium imperdiet quis mattis est sed vestibulum. Tellus amet dictumst neque id. Vel ut urna tortor eu tellus enim nisl non ac. Enim egestas ullamcorper nibh feugiat leo.</p>
              <p>Felis amet venenatis mattis metus ut integer volutpat donec pellentesque. Mauris sed adipiscing habitasse purus in consectetur magna amet ac. Vitae id ultricies aliquam porttitor lacus cursus lectus urna. Imperdiet amet rhoncus est non cras amet ultricies lacus proin. Viverra sit sed nisi odio libero at vitae sit mauris. Auctor neque accumsan ullamcorper iaculis aliquam et eu cras.</p>
              <div className='card__counters'>
                <div>
                  <p>Chaise</p>
                  <div>
                    <span>-</span>
                    <input type="text" value='0'/>
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="./src\assets\images\la-manu-build.png" alt="" />
            </div>
        </div> */}

        {/* Contact us */}
        <div className='row align-items-center justify-content-between section'>
            <img className='col-xl-5 img-margin-bottom' src="./src\assets\images\undraw_contact_us_re_4qqt.png" alt="Contactez-nous" />
            <div className='col text-margin-left'>
              <h2><span className='highlight'>Contactez</span>-nous</h2>
              <p className='text-margin-right'>Nous nous engageons à vous offrir un service clientèle de qualité. Notre équipe est là pour résoudre vos problèmes, répondre à vos questions et vous assister à chaque étape du processus. N'hésitez pas à nous contacter pour toute demande ou préoccupation, quelle qu'elle soit.</p>
            </div>
        </div>

        {/* Notices */}
        <div className='row section notices-section'>
          <div className='col card pt-3 pb-3'>
            <div className='card-body'>
              <img className='mb-5' src="./src\assets\images\quote.png" alt="Avis" />
              <p className='mb-5'>J'ai loué un box de rangement chez La Manu Box et je suis très satisfait de leur service. Le personnel était amical et serviable, le box était propre et sécurisé, et les tarifs étaient très raisonnables.</p>
              <div className='d-flex'>
                <div className='notice-img notice-img-1'></div>
                <div className='d-flex flex-column justfy-content-center ms-3'>
                  <p className='mb-0 fw-bolder'>John Doe</p>
                  <p className='m-0 fw-light'>Client La Manu Box</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col card card-margin-inline pt-3 pb-3'>
            <div className='card-body'>
              <img className='mb-5' src="./src\assets\images\quote.png" alt="Avis" />
              <p className='mb-5'>Je recommande vivement La Manu Box pour la location de box de rangement. Le processus d'inscription était simple, le site était bien entretenu, et j'ai toujours eu accès à mes affaires quand j'en avais besoin.</p>
              <div className='d-flex'>
                <div className='notice-img notice-img-2'></div>
                <div className='d-flex flex-column justfy-content-center ms-3'>
                  <p className='mb-0 fw-bolder'>Emily Brown</p>
                  <p className='m-0 fw-light'>Cliente La Manu Box</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col card pt-3 pb-3'>
            <div className='card-body'>
              <img className='mb-5' src="./src\assets\images\quote.png" alt="Avis" />
              <p className='mb-5'>Je suis un client fidèle de La Manu Box depuis des années. Leurs tarifs compétitifs et leur service client exceptionnel me font revenir chaque fois que j'ai besoin de stocker des affaires.</p>
              <div className='d-flex'>
                <div className='notice-img notice-img-3'></div>
                <div className='d-flex flex-column justfy-content-center ms-3'>
                  <p className='mb-0 fw-bolder'>Jane Smith</p>
                  <p className='m-0 fw-light'>Cliente La Manu Box</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className='row section align-items-center'>
            <div className='col'>
              <h2>Où sont <span className='highlight'>nos box</span> ?</h2>
              <p className='text-margin-right'>Nous vous invitons chaleureusement à visiter notre emplacement pour voir nos installations de stockage par vous-même. Notre équipe amicale et compétente est là pour répondre à toutes vos questions et vous guider dans le choix de la taille de box la mieux adaptée à vos besoins. Découvrez pourquoi nous sommes le choix de confiance pour le stockage sécurisé.</p>
            </div>
            <img className='col-xl-5 img-margin-top' src="./src\assets\images\la_manu_map.png" alt="Localisation La Manu Box" />
        </div>



      </div>
  )
}

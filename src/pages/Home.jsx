import React from 'react'
import { Link } from 'react-router-dom'
import './home.scss'

export default function Home() {
  return (
      <div className='container-fluid col-lg-9'>
        {/* Banner */}
        <div className='row d-flex'>
          <div className='col'>
            <h1 className='text-uppercase'>Découvrez nos <span className='highlight'>box<br />de stockage</span ><br />adaptées à vos <span className='highlight'>besoins</span></h1>
            <Link className='btn btn-primary'>
              <p className='m-0'>Réserver ma box</p>
              {/* <img src="" alt="Flèche droite" /> */}
            </Link>
          </div>
          <div className='col'>
            <img src="./src\assets\images\illustration1.png" alt="Box" />
          </div>
        </div>

        {/* About us */}
        <div className='row'>
          {/* Card */}
          <div className='d-flex justify-content-around'>
            <div className='col'>
              <img src="./src\assets\images\la-manu-build.png" alt="La Manu" />
            </div>
            <div className='col'>
              <h2>Lorem ipsum dolor sit amet</h2>
              <p><span className='highlight'>Lorem</span> ipsum dolor sit amet consectetur. Tortor auctor pellentesque pulvinar leo ut fusce ut. Integer tristique nibh faucibus aliquet dapibus eu egestas. Arcu arcu eleifend diam sed dictum. Laoreet amet gravida condimentum facilisi consectetur malesuada vitae sem. Libero mauris vestibulum pretium imperdiet quis mattis est sed vestibulum. Tellus amet dictumst neque id. Vel ut urna tortor eu tellus enim nisl non ac. Enim egestas ullamcorper nibh feugiat leo.</p>
              <p><span className='highlight'>Felis</span> amet venenatis mattis metus ut integer volutpat donec pellentesque. Mauris sed adipiscing habitasse purus in consectetur magna amet ac. Vitae id ultricies aliquam porttitor lacus cursus lectus urna. Imperdiet amet rhoncus est non cras amet ultricies lacus proin. Viverra sit sed nisi odio libero at vitae sit mauris. Auctor neque accumsan ullamcorper iaculis aliquam et eu cras.</p>
              <Link className='btn btn-primary'>
                <p className='m-0'>Réserver ma box</p>
                {/* <img src="" alt="Flèche droite" /> */}
              </Link>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className='row'>
          <div className='d-flex align-items-center'>
            <img src="src\assets\images\illustration2.png" alt="Transport" />
            <div>
              <h2>Services de <span className='highlight'>Transport</span><br />vers votre box</h2>
              <p>Nos services complémentaires incluent le transport de vos biens directement vers votre box. Vous n'avez pas à vous soucier du déplacement, nous nous occupons de tout pour vous, rendant le processus de stockage aussi pratique que possible</p>
            </div>
          </div>
        </div>

        {/* Reinsurance */}
        <div className='row'>
          <div className='d-flex'>
            <div className='col'>
              <div className='d-flex flex-column align-items-center'>
                <img src="./src\assets\images\security-camera-svgrepo-com.png" alt="Caméra de surveillance" />
                <p>Lorem <span className='highlight'>ipsum</span> dolor sit amet consectetur</p>
              </div>
            </div>
            <div className='col'>
              <div className='d-flex flex-column align-items-center'>
                <img src="./src\assets\images\security-camera-svgrepo-com.png" alt="Caméra de surveillance" />
                <p>Lorem <span className='highlight'>ipsum</span> dolor sit amet consectetur</p>
              </div>
            </div>
            <div className='col'>
              <div className='d-flex flex-column align-items-center'>
                <img src="./src\assets\images\security-camera-svgrepo-com.png" alt="Caméra de surveillance" />
                <p>Lorem <span className='highlight'>ipsum</span> dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
        </div>



        {/* Simulator */}
        <div className='row'>
          <div className='d-flex'>
            <div>
              <h2>Lorem ipsum dolor sit amet</h2>
              <div className='card__sizes'>
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
              <img src="./src\assets\images\la-manu-build.png" alt="" /> {/*Prévisualisation de la salle de stockage*/}
            </div>
          </div>
        </div>

        {/* Contact us */}
        <div className=''>
          <img src="./src/assets/img/undraw_contact_us_re_4qqt.png" alt="Contactez-nous" />
          <div>
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Tortor auctor pellentesque pulvinar leo ut fusce ut. Integer tristique nibh faucibus aliquet dapibus eu egestas. Arcu arcu eleifend diam sed dictum. Laoreet amet gravida condimentum facilisi consectetur malesuada vitae sem.</p>
          </div>
        </div>

        {/* Notices */}
        <div className=''>
          <div className='notice-card'>
            <img src="./src\assets\img\quote.png" alt="Avis" />
            <p>Lorem ipsum dolor sit amet consectetur. Blandit turpis et vitae diam fames condimentum nibh arcu. Mauris tempor justo duis proin ornare fermentum. Lorem ipsum dolor sit amet consectetur. Blandit turpis et vitae diam fames.</p>
            <div className='notice-card__profile'>
              <div className='notice-card__profile__img'></div>
              <div className='notice-card__profile__info'>
                <p>John Doe</p>
                <p>Lorem dolor sit amet</p>
              </div>
            </div>
          </div>
          <div className='notices__chips'>
            <div className='notices__chips__item enable'></div>
            <div className='notices__chips__item disable'></div>
            <div className='notices__chips__item disable'></div>
          </div>
        </div>

        {/* Location */}
        <div className=''>
          <div>
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Tortor auctor pellentesque pulvinar leo ut fusce ut. Integer tristique nibh faucibus aliquet dapibus eu egestas. Arcu arcu eleifend diam sed dictum. Laoreet amet gravida condimentum facilisi consectetur malesuada vitae sem.</p>
          </div>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.468589952846!2d2.2989007762982205!3d49.89000537149057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7857c0e87f5fb%3A0x37fb21b742d12b66!2sLa%20Manu%20-%20Ecole%20sup%C3%A9rieure%20des%20m%C3%A9tiers%20du%20num%C3%A9rique!5e0!3m2!1sfr!2sfr!4v1697705387763!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>



      </div>
  )
}

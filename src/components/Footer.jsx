import React from 'react'
import './footer.scss'
import '../../node_modules/bootstrap'

export default function Footer() {
    return (
        <footer className='container-fluid bg-primary'>
          <div className='container'>
            <div className='d-flex flex-md-row flex-column pt-5 pb-5'>
              <div className='col'>
                <img src="./src\assets\images\LMB_white.png" alt="La Manu Box" />
                <p></p>
              </div>
              <div className='col'>
                <h3 className='mb-4 text-white'>En savoir plus</h3>
                <p className='text-white'>Tarifs</p>
                <p className='text-white'>Nos engagements</p>
                <p className='text-white'>FAQ</p>
              </div>
              <div className='col'>
                <h3 className='mb-4 text-white'>Nos services</h3>
                <p className='text-white'>Evaluer la taille de votre box</p>
                <p className='text-white'>Découvrez nos emballages</p>
                <p className='text-white'>Louer une box</p>
              </div>
              <div className='col'>
                <h3 className='mb-4 text-white'>Réseaux</h3>
                <p className='text-white'>Venez nous suivre sur vos réseaux favoris !</p>
                <div>
                  <a href="https://www.facebook.com/"><img src="./src\assets\images\facebook 1.png" alt="Facebook" /></a>
                  <a className='mx-3' href="https://www.instagram.com/"><img src="./src\assets\images\instagram 1.png" alt="Instagram" /></a>
                  <a href="https://twitter.com/"><img src="./src\assets\images\X_logo_2023 1.png" alt="X" /></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
    )
}
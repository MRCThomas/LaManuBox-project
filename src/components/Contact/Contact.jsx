import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faCubes } from '@fortawesome/free-solid-svg-icons'
import { faCube } from '@fortawesome/free-solid-svg-icons'
import './Contact.scss'
export default function Contact() {
  return (
    <section id='ContactPage' className='bg-primary Form'>
        <h3 className='text-center text-light mb-5'>Contactez-nous pour la réservation de vos boxes <FontAwesomeIcon icon={faCube} beatFade /></h3>
        <div className='formContact  m-auto text-light'>
            <form>
                    <div className="row">
                        <div className="col">
                                <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Nom</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
                                </div>
                        </div>
                        <div className="col">
                        <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Prénom</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your firstname"/>
                                </div>
                        </div>
                    </div>
                    <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Adresse mail </label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Entrez votre message ici</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                    </div>
                    <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                J'accepte que mes données soit stockées
                            </label>
                    </div>
            </form>
        </div>
    </section>
  )
}

import React from 'react'
import '../assets/styles/Login.css'
import '../../node_modules/bootstrap'

export default function Contact() {
  return (
    <div className="container">
      <div className="row justify-content-center">
          <div className="col-md-4 d-flex justify-content-center flex-column align-items-center">
              <form>
                  <div className="form-group">
                      <h1>Contactez-nous</h1>
                      <label htmlFor="firstname">Nom</label>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Votre nom..."
                      />
                      <label htmlFor="lastname">Prénom</label>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Votre prénom..."
                      />
                      <label htmlFor="identifiant">Adresse mail</label>
                      <input
                          type="mail"
                          className="form-control"
                          placeholder="Votre adresse mail..."
                      />
                      <label htmlFor="topic">Objet</label>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Votre objet..."
                      />
                      <label htmlFor="message">Message</label>
                      <input
                          type="textarea"
                          className="form-control"
                          placeholder="Votre message..."
                      />
                      <div className="d-flex justify-content-center">
                          <button className="btn btn-dark">Envoyer</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
  )
}
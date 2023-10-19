import React from 'react'

export default function Home() {
  return (
    <>
      <div className='container'>
        <nav>
          <img src="" alt="La Manu Box" />
          <div>
            <Link>Nos boxes</Link>
            <Link>Nous contacter</Link>
          </div>
          <div>
            <Link>S'inscrire</Link>
            <Link>Se connecter</Link>
          </div>
        </nav>
      </div>

      <div className='container'>
        <header>
          <div>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora odit dicta tempore placeat repellendus a, inventore at non facilis aperiam, numquam quaerat, et nesciunt ipsam. Dolor atque laborum dignissimos iste.</p>
            <Link>
              <p>Réserver ma box</p>
              <img src="" alt="Flèche droite" />
            </Link>
          </div>
          <div>
          </div>
        </header>

        <main>
          <div className='reinsurance'>
            <div>
              <img src="" alt="Caméra de surveillance" />
              <p>Lorem <span className='highlight'>ipsum</span> dolor sit amet consectetur</p>
            </div>
            <div>
              <img src="" alt="Box de rangement" />
              <p>Lorem <span className='highlight'>ipsum</span> dolor sit amet consectetur</p>
            </div>
            <div>
              <img src="" alt="Contrat flexible" />
              <p>Lorem <span className='highlight'>ipsum</span> dolor sit amet consectetur</p>
            </div>
          </div>

          <div className='about-us'>
            <div className='card'>
              <div className='card__info'>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p><span className='highlight'>Lorem</span> ipsum dolor sit amet consectetur. Tortor auctor pellentesque pulvinar leo ut fusce ut. Integer tristique nibh faucibus aliquet dapibus eu egestas. Arcu arcu eleifend diam sed dictum. Laoreet amet gravida condimentum facilisi consectetur malesuada vitae sem. Libero mauris vestibulum pretium imperdiet quis mattis est sed vestibulum. Tellus amet dictumst neque id. Vel ut urna tortor eu tellus enim nisl non ac. Enim egestas ullamcorper nibh feugiat leo.</p>
                <p><span className='highlight'>Felis</span> amet venenatis mattis metus ut integer volutpat donec pellentesque. Mauris sed adipiscing habitasse purus in consectetur magna amet ac. Vitae id ultricies aliquam porttitor lacus cursus lectus urna. Imperdiet amet rhoncus est non cras amet ultricies lacus proin. Viverra sit sed nisi odio libero at vitae sit mauris. Auctor neque accumsan ullamcorper iaculis aliquam et eu cras.</p>
                <Link>
                  <p>Réserver ma box</p>
                  <img src="" alt="Flèche droite" />
                </Link>
              </div>
              <div className='card__img'>
                <img src="" alt="" />
              </div>
            </div>

            <div className='card'>
              <div className='card__info'>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p><span className='highlight'>Lorem</span> ipsum dolor sit amet consectetur. Tortor auctor pellentesque pulvinar leo ut fusce ut. Integer tristique nibh faucibus aliquet dapibus eu egestas. Arcu arcu eleifend diam sed dictum. Laoreet amet gravida condimentum facilisi consectetur malesuada vitae sem. Libero mauris vestibulum pretium imperdiet quis mattis est sed vestibulum. Tellus amet dictumst neque id. Vel ut urna tortor eu tellus enim nisl non ac. Enim egestas ullamcorper nibh feugiat leo.</p>
                <p><span className='highlight'>Felis</span> amet venenatis mattis metus ut integer volutpat donec pellentesque. Mauris sed adipiscing habitasse purus in consectetur magna amet ac. Vitae id ultricies aliquam porttitor lacus cursus lectus urna. Imperdiet amet rhoncus est non cras amet ultricies lacus proin. Viverra sit sed nisi odio libero at vitae sit mauris. Auctor neque accumsan ullamcorper iaculis aliquam et eu cras.</p>
                <Link>
                  <p>Réserver ma box</p>
                  <img src="" alt="Flèche droite" />
                </Link>
              </div>
              <div className='card__img'>
                <img src="" alt="" />
              </div>
            </div>
          </div>

          <div className='simulator'>
            <div className='card'>
              <div>
                <h2>Lorem ipsum dolor sit amet</h2>
                <div className='card__sizes'>
                  <div className='size-btn'>
                    <p>S</p>
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
                <img src="" alt="" /> {/*Prévisualisation de la salle de stockage*/}
              </div>
            </div>
          </div>

          <div className='contact-us'>
            <img src="./src/assets/img/undraw_contact_us_re_4qqt.png" alt="Contactez-nous" />
            <div>
              <h2>Lorem ipsum</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Tortor auctor pellentesque pulvinar leo ut fusce ut. Integer tristique nibh faucibus aliquet dapibus eu egestas. Arcu arcu eleifend diam sed dictum. Laoreet amet gravida condimentum facilisi consectetur malesuada vitae sem.</p>
            </div>
          </div>

          <div className='notices'>
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

          <div className='location'>
            <div>
              <h2>Lorem ipsum</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Tortor auctor pellentesque pulvinar leo ut fusce ut. Integer tristique nibh faucibus aliquet dapibus eu egestas. Arcu arcu eleifend diam sed dictum. Laoreet amet gravida condimentum facilisi consectetur malesuada vitae sem.</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.468589952846!2d2.2989007762982205!3d49.89000537149057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7857c0e87f5fb%3A0x37fb21b742d12b66!2sLa%20Manu%20-%20Ecole%20sup%C3%A9rieure%20des%20m%C3%A9tiers%20du%20num%C3%A9rique!5e0!3m2!1sfr!2sfr!4v1697705387763!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </main>

        <footer>
          <div>
            <img src="./src\assets\img\LMB_black.png" alt="La Manu Box" />
            <p></p>
          </div>
          <div>
            <h3>Lorem ipsum</h3>
            <p>Dolor sit</p>
            <p>Amet consecteur</p>
            <p>Sit lorem</p>
          </div>
          <div>
            <h3>Lorem ipsum</h3>
            <p>Dolor sit</p>
            <p>Amet consecteur</p>
            <p>Sit lorem</p>
          </div>
          <div>
            <h3>Réseaux</h3>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <div>
              <img src="./src\assets\img\facebook 1.png" alt="Facebook" /><img src="./src\assets\img\instagram 1.png" alt="Instagram" /><img src="./src\assets\img\X_logo_2023 1.png" alt="X" />
            </div>
          </div>
        </footer>



      </div>
    </>
  )
}

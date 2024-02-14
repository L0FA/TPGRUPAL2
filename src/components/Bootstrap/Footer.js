

function Footer(){
    return(
        <footer>
        <h3>Contactanos</h3>

 
        <div className="formulario" />
          <div className="input-group" />
              <form/>
                  <div className="input-box">
                      <input className="input" required autocomplete="off" type="text" id="nombre" />
                      <label className="label" for="nombre">Nombre</label><br/>
                  </div>

                  <div className="input-box">
                      <input className="input" required autocomplete="off" type="text" id="apellido" />
                      <label className="label" for="apellido">Apellido</label><br/>
                  </div>

                  <div className="input-box">
                      <input className="input" required autocomplete="off" type="text" id="mail" />
                      <label className="label" for="mail">Mail</label><br/>
                  </div>

                  <div className="input-box">
                      <input className="input" required autocomplete="off" type="text" id="mensaje" />
                      <label className="label" for="mensaje">Mensaje</label><br/>
                  </div>
                

                  <button type="submit" className="button">Enviar</button> 
              <form/>
          <div/>
        <div/>

        <div className="legales">
            <h3 id="empresa">BLOCKBUSTER</h3>

            <div id="direccion">
                <h3>Honduras 3953</h3>
                <p>Capital Federal, Buenos Aires.</p>
            </div>

            <p id="copy">&copy;1985</p> 
        </div>
    </footer> 
    )
}

export default Footer;
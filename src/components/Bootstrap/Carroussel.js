
import Blockbustertienda from "../../assets/img/Blockbustertienda.jpg"
import Blockbustertienda2 from "../../assets/img/Blockbustertienda2.jpg"
import Blockbustertienda4 from "../../assets/img/Blockbustertienda4.jpg"
import blockbuster from "../../assets/img/blockbuster.jpg"

function Carroussel(){

    return(
        
        <div id= "carouselExampleFade" className= "carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Blockbustertienda4} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={Blockbustertienda2} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={Blockbustertienda} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={blockbuster} className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    )
}

export default Carroussel;
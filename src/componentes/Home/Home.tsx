
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import framProd from "../../assets/marcas/Fram-300x300.png"
import framMarca from "../../assets/marcas/fram-300x105.png"
import osramProd from "../../assets/marcas/Osram-290x300.png"
import osramMarca from "../../assets/marcas/osram-300x105.png"
import tricoProd from "../../assets/marcas/Trico-300x280.png"
import tricoMarca from "../../assets/marcas/trico-300x105.png"
import willardProd from "../../assets/marcas/Willard-300x254.png"
import willardMarca from "../../assets/marcas/willard2-300x105.png"
import totalProd from "../../assets/marcas/totalprod.png"
import totalMarca from "../../assets/marcas/totalmarca.png"
import "./Home.css"



const Home = () => {
    return (
        <>
                <div className="row ">
                    <div className="col  d-flex justify-content-center flex-column blackBackground align-items-center">
                        <img src={totalMarca} className="marca-sm"  />
                    <p className="text-Color-Marca px-5 text-center">Uno de los principales actores energéticos a nivel mundial que en Argentina produce lubricantes y especialidades a través de sus marcas Total y Elf.</p>
                    </div>
                    <div className="col d-flex justify-content-center whileBackground"><img src={totalProd} /></div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center whileBackground align-items-center"><img src={framProd} /></div>
                    <div className="col  d-flex justify-content-center flex-column blackBackground align-items-center"><img src={framMarca} className="marca-lg"  />
                    <p className="text-Color-Marca px-5 text-center">Líder en el mercado argentino en la producción de autopartes, con una de las gamas más amplias en productos de filtrado que incluyen: filtros de aceite, aire, diésel, gasolina y habitáculo, siendo la marca preferida por los clientes más exigentes a nivel mundial.</p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col d-flex justify-content-center flex-column blackBackground align-items-center">
                        <img src={osramMarca} className="marca-lg" />
                    <p className="text-Color-Marca px-5 text-center">Con sede en Múnich, es líder mundial en iluminación de alta tecnología con más de 110 años en el mercado.</p>
                    </div>
                    <div className="col d-flex justify-content-center whileBackground align-items-center"><img src={osramProd} /></div>
                </div>
                <div className="row  ">
                    <div className="col d-flex justify-content-center whileBackground align-items-center"><img src={tricoProd} /></div>
                    <div className="col  d-flex justify-content-center blackBackground flex-column align-items-center"><img src={tricoMarca} className="marca-lg"  />
                    <p className="text-Color-Marca px-5 text-center">Desde 1917 la línea más completa e innovadora de productos de visibilidad del conductor.</p></div>
                </div>
                <div className="row ">
                    <div className="col  d-flex justify-content-center blackBackground flex-column align-items-center"><img src={willardMarca} className="marca-lg" />
                    <p className="text-Color-Marca px-5 text-center">Unionbat a través de su marca Willard, es líder en la fabricación de baterías para alimentar los distintos sistemas eléctricos.</p></div>
                    <div className="col d-flex justify-content-center whileBackground align-items-center"><img src={willardProd} /></div>
                </div>
                <div className="div-footer-color ">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 container"
                >
                    <div className="col-md-4 d-flex align-items-center">
                        <span className="mb-3 mb-md-0 text-body-primary">© 2024 Beral.com.ar</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-body-primary" href="#"><BsWhatsapp size={32} color="white" /></a></li>
                        <li className="ms-3"><a className="text-body-primary" href="#"><FaInstagram size={32} color="white" /></a></li>
                        <li className="ms-3"><a className="text-body-primary" href="#"><FaFacebook size={32} color="white" /></a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Home;
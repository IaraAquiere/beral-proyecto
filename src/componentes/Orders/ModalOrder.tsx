import "../Style/Style.css";

const ModalOrder = () => {
    return (
        <div className="modal" id="myModal">
            <div className="modal-dialog modal-dialog-scrollable modal-xl ">
                <div className="modal-content">
                    <div className="modal-header borderLeft">
                        <h5 className="modal-title">Detalle de pedido</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body borderLeft">
                    </div>
                    <div className="modal-footer borderLeft">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalOrder

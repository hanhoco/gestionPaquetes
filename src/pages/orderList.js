import { Link } from "react-router-dom";
const OrderList=()=>{
    return(
        <div>
            <h2>Gestion de paquetes - Listado de ordenes</h2>
            <Link className="d-flex justify-content-end" to="/new-order">Crear Orden</Link>
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th scope="col"># Servicio</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Ciudad Entrega</th>
                        <th scope="col">Direccion de Entrega</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>01/01/2022</td>
                        <td>Santa Marta</td>
                        <td>Cll 1-151-30</td>
                        <td>Guardado</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>01/01/2022</td>
                        <td>Santa Marta</td>
                        <td>Cll 1-151-30</td>
                        <td>Guardado</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>01/01/2022</td>
                        <td>Santa Marta</td>
                        <td>Cll 1-151-30</td>
                        <td>Guardado</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}

export default OrderList;
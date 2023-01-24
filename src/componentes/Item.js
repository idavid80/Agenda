

function Item() {

const itemFecha = new Date();
const itemDescripcion = "Cita médico";
const itemHora = 7;

    return (
        <div>
        <div>{itemFecha.toISOString()}</div>
        <div>{itemDescripcion}</div>
        <div>{itemHora}</div>
        </div>
    )
}
export default Item
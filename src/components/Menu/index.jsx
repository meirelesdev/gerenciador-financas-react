import * as C from './styles'
import { Link } from 'react-router-dom'

const Menu =()=>{
  return(
    <C.Container>
    <Link to="/">Home</Link>
    <Link to="/saidas">Contas</Link>
    <Link to="/entradas">Entradas</Link>
    <Link to="/relatorios">Relatorios</Link>
  </C.Container>
  )
}

export default Menu
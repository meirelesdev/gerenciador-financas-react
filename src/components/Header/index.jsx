import * as C from './styles'
import Menu from '../Menu'

const Header = ()=>{
  return(
    <C.Container>
      <C.Header>
        <div className="logo">
          Gerenciador de Finanças
        </div>
        <Menu/>
      </C.Header>
    </C.Container>
  )
}
export default Header
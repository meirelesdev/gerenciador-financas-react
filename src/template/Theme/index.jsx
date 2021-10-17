import * as C from './styles';
import Header from '../../components/Header';

export const Theme = ({ children }) => {
    return (
        <C.Container>
            <C.Area>
                <Header />
                {children}
            </C.Area>
        </C.Container>
    );
}
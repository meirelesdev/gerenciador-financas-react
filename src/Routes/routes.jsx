import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages';
import Bills from '../pages/Bills';
import Reports from '../pages/Reports';
import Entry from '../pages/Entry';

export const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/saidas" exact component={Bills} />
            <Route path="/entradas" exact component={Entry} />
            <Route path="/relatorios" exact component={Reports} />
        </BrowserRouter>
    );
}
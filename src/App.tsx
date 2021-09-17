import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import { Provider } from "react-redux"
import Clicker from "./clicker/Clicker"
import { store } from "./store/store"

function App() {
    return (
        <Provider store={store}>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/game">Game</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" />
                    <Route path="/game" component={Clicker} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
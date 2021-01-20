import logo from './logo.svg';
import './App.css';
import Calculator from './calc/Calculator'
import NumberProvider from './calc/NumberProvider'

const App = () => (<NumberProvider><Calculator/></NumberProvider> )

export default App;
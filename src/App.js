import './App.css';
import HooksCallback from './components/HooksCallback/HooksCallback';
import HooksLayoutEffect from './components/HooksLayoutEffect/HooksLayoutEffect';
import HooksMemo from './components/HooksMemo/HooksMemo';
import HooksRef from './components/HooksRef/HooksRef';

function App() {
  return (
    <div className="App">
        <HooksRef />
        <HooksMemo />
        <HooksCallback />
        <HooksLayoutEffect />
    </div>
  );
}

export default App;

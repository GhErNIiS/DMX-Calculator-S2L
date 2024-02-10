export default function App() {
    const [val, setVal] = useState(0);
  
    const setNumber = ({ target }) => {
      let { value, min, max } = target;
      value = Math.max(Number(min), Math.min(Number(max), Number(value)));
  
      setVal(value);
    };
    return (
      <div className="App">
        <input type="number" onChange={setNumber} value={val} min="0" max="10" />
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
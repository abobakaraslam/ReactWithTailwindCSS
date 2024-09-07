//File: App.tsx located in src/ directory
import "./App.css";
function App() {
  return (
    <div>
      <h1 style={{ color: "red", textAlign: "center" }}>
        Heading with Inline CSS
      </h1>
      <h1 className="appcenter">Heading styled with custom classes</h1>
      <h1 className="text-red-400 text-center text-5xl">
        Heading styled with classes of Tailwind CSS
      </h1>
    </div>
  );
}

export default App;

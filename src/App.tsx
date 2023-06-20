import Logo from "./components/Logo";
import User from "./components/User";
import "./App.css";

export default function App() {
  return (
    <div className="container mx-auto px-4 md:px-12 bg-white relative">
      <Logo />
      <User />
    </div>
  );
}

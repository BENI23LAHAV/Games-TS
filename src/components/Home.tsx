import NavBar from "./NavBar";
import ThemeComponent from "./ThemeComponent";
import { Person, Debounce } from "../lib/decorates/decoratorsPractice";
function Home() {
  const clickMe = new Person().onClick;
  return (
    <div>
      <h1>Home</h1>
      <h2>Welcome to the Home Page</h2>
      <button onClick={() => clickMe()}>
        Click me with delay, used with decorates. Chek the console.
      </button>
      <ThemeComponent />
      <NavBar />
    </div>
  );
}
export default Home;

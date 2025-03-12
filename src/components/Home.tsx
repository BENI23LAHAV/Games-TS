import NavBar from "./NavBar";
import ThemeComponent from "./ThemeComponent";
import { Person } from "../lib/decorates/decoratorsPractice";
import { Subscriber, Channel } from "../lib/observePractice";
function Home() {
  const dan = new Subscriber("Dan Danino");
  const israel = new Subscriber("Israel Israeli");

  const videos = new Channel("intresting videos");
  const petts = new Channel("intresting petts");

  videos.addSubscriber(dan);
  videos.addSubscriber(dan);
  videos.addSubscriber(israel);
  petts.addSubscriber(israel);

  videos.notify("TicTok video");
  petts.notify("Germany Dog");

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

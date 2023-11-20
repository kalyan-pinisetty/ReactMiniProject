import { CORE_CONCEPTS } from "./data.js"
import "./index.css"

const getDescription = ['Kalyan', 'Rama', 'Ramu'];
function getRandom(max) {
  return Math.floor(Math.random() * (max + 1));//each time you will be getting diff name from array
}

const data = "AI-GPT bots";

export function CoreConcepts({ title, image, description }) {
  return (
    <li>
      <img src={image} alt={title}></img>
      <h2>{title}</h2>
      <p>{description}</p>

    </li>
  );
}

export function MyHeader() {

  const description = getDescription[getRandom(2)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials in Header Component</h1>
      <p>
        {/* in curly braces writing the array and object for rendetion */}
        {description} React concepts you will need for almost any app you are
        going to build {data}!
      </p>
    </header>
  )
}

function App() {
  return (
    <div>
      <MyHeader />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { animalsData } from "../../components/AnimalCard/data";
import "./styles.css";

function Homework07() {
  return (
    <div className="homework07-wrapper">
      <h1>Мадагаскар</h1>
      <div className="cards">
        {animalsData.map((animal, index) => (
          <div key={index} className="card-item">
            <AnimalCard
              animalName={animal.name}
              animalSpecies={animal.species}
              animalImg={animal.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homework07;
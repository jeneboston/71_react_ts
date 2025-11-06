import "./styles.css";

interface AnimalCardProps {
  animalName: string;
  animalSpecies: string;
  animalImg: string;
}

export function AnimalCard({ animalName, animalSpecies, animalImg }: AnimalCardProps) {
  return (
    <div className="animal-card-wrapper">
      <h3>{animalName}</h3>
      <div>{animalSpecies}</div>
      <img src={animalImg}/>
    </div>
  );
}

export default AnimalCard;
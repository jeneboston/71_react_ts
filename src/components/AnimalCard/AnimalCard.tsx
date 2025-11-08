import { Wrapper, Title, Species, Img } from "./styles";

interface AnimalCardProps {
  animalName: string;
  animalSpecies: string;
  animalImg: string;
}

export function AnimalCard({ animalName, animalSpecies, animalImg }: AnimalCardProps) {
  return (
    <Wrapper>
      <Title>{animalName}</Title>
      <Species>{animalSpecies}</Species>
      <Img src={animalImg} alt={animalName} />
    </Wrapper>
  );
}

export default AnimalCard;

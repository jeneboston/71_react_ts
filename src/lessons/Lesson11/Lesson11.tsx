import { useEffect, useState } from "react";
import Button from "components/Button/Button";
import Spinner from "components/Spinner/Spinner";
import { Wrapper, ImageBox, ErrorBox, Actions } from "./styles";

type DogRes = { message: string; status: "success" | "error" };

export default function Lesson11() {
  const [img, setImg] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const fetchImage = async () => {
    try {
      setLoading(true);
      setError("");
      setImg("");
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data: DogRes = await res.json();
      if (data.status !== "success") throw new Error("Request failed");
      setImg(data.message);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Request failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <Wrapper>
      {loading && <Spinner />}

      {!loading && error && <ErrorBox>{error}</ErrorBox>}

      {!loading && !error && img && (
        <ImageBox>
          <img src={img} alt="dog" />
        </ImageBox>
      )}

      <Actions>
        <Button name="GET MORE IMAGES" onClick={fetchImage} />
      </Actions>
    </Wrapper>
  );
}

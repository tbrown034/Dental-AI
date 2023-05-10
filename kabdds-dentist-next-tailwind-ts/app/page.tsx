import Hero from "./components/layout/Hero";
import dentistImage from "../public/images/dentist.jpeg";

export default function Home() {
  return (
    <div>
      <Hero
        title="Welcome to our website"
        subhead="Learn more about our products and services"
        imageUrl={dentistImage.src}
      />
    </div>
  );
}

// import Image from "next/image";
import { Card, Header, Footer } from "./components";
const countries = [
  {
    id: 1,
    country: "Brazil",
    capital: "Brasília",
    region: "South America",
    population: 213993437, // Approximate population
  },
  {
    id: 2,
    country: "Japan",
    capital: "Tokyo",
    region: "Asia",
    population: 125800000, // Approximate population
  },
  {
    id: 3,
    country: "Germany",
    capital: "Berlin",
    region: "Europe",
    population: 83783942, // Approximate population
  },
  {
    id: 4,
    country: "Australia",
    capital: "Canberra",
    region: "Oceania",
    population: 25788217, // Approximate population
  },
  {
    id: 5,
    country: "Canada",
    capital: "Ottawa",
    region: "North America",
    population: 38246108, // Approximate population
  },
  {
    id: 6,
    country: "India",
    capital: "New Delhi",
    region: "Asia",
    population: 1406638500, // Approximate population
  },
  {
    id: 7,
    country: "South Africa",
    capital: "Pretoria",
    region: "Africa",
    population: 60041996, // Approximate population
  },
  {
    id: 8,
    country: "Mexico",
    capital: "Mexico City",
    region: "North America",
    population: 126705138, // Approximate population
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="grid grdii-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map(({ id, country, capital, region, population }) => (
            <Card
              key={id}
              country={country}
              capital={capital}
              region={region}
              population={population}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

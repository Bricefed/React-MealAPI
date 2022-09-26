import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then((res) => setMeals(res.data.meals));
  }, [search]);

  return (
    <>
      <Header search={search} setter={setSearch} />
      <ul className="cards-container">
        {meals.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </ul>
    </>
  );
}

export default App;

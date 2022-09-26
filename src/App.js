import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato")
      .then((res) => setMeals(res.data.meals));
  }, []);

  return (
    <>
      <Header />
      {meals.map((meal) => (
        <Card key={meal.idMeal} meal={meal} />
      ))}
    </>
  );
}

export default App;

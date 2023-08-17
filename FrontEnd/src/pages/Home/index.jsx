import { useEffect, useState } from 'react';
import { useSearch } from '../../hooks/searchContext';

import { api } from '../../services/api';

import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Category } from '../../components/Category';

import foodsImg from '../../assets/FoodsOnAir.svg';

export function Home() {
  const { dishes } = useSearch();

  const [meals, setMeals] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);

  function filterDishesByCategory(data) {
      const meals = data.filter(dish => dish.category === 'meal');
      const desserts = data.filter(dish => dish.category === 'dessert');
      const drinks = data.filter(dish => dish.category === 'drink');

      setMeals(meals);
      setDesserts(desserts);
      setDrinks(drinks);
  }

  useEffect(() => {
    if (dishes.length > 0) {
      return filterDishesByCategory(dishes);
    }

    async function renderDishes() {
      const { data } = await api.get('/dishes');
      filterDishesByCategory(data);
    }

    renderDishes();
  }, [dishes]);

  return (
    <Container>
      <Header />

      <main>
        <div className="introduction-container">
          <img src={foodsImg} alt="Foods throwed on air" />

          <div>
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>

        <section className="dishes-section">
          {
            meals.length > 0 && (
              <Category 
                title="Refeições"
                dishes={meals}
              />
            )
          }

          {
            desserts.length > 0 && (
              <Category
                title="Sobremesas"
                dishes={desserts}
              />
            )
          }

          {
            drinks.length > 0 && (
              <Category
                title="Bebidas"
                dishes={drinks}
              />
            )
          }
        </section>
      </main>

      <Footer />
    </Container>
  );
}
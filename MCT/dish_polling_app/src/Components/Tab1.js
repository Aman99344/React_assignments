import React, { useState, useEffect } from 'react';

function Tab1() {
  const [dishes, setDishes] = useState([]);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [rankedDishes, setRankedDishes] = useState([]);

  useEffect(() => {
    // Fetch the list of dishes from the provided API URL
    fetch('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json')
      .then((response) => response.json())
      .then((data) => setDishes(data));
  }, []);

  const handleSelection = (dishId, rank) => {
    const dish = dishes.find((dish) => dish.id === dishId);
    const updatedDish = { ...dish, rank };

    const index = selectedDishes.findIndex((dish) => dish.id === dishId);
    if (index !== -1) {
      const updatedSelectedDishes = [...selectedDishes];
      updatedSelectedDishes[index] = updatedDish;
      setSelectedDishes(updatedSelectedDishes);
    } else {
      setSelectedDishes([...selectedDishes, updatedDish]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate points for each selected dish based on rank (30 points for Rank 1, 20 for Rank 2, 10 for Rank 3)
    const ranked = selectedDishes.map((dish, index) => ({
      ...dish,
      points: (3 - index) * 10,
    }));
    setRankedDishes(ranked);
  };

  return (
    <div>
      <h3>Vote for Your Favorite Dishes</h3>
      <form onSubmit={handleSubmit}>
        {dishes.map((dish) => (
          <div key={dish.id}>
            <input
              type="radio"
              name={`dish${dish.id}`}
              id={`dish${dish.id}_rank1`}
              checked={selectedDishes.some(
                (selectedDish) =>
                  selectedDish.id === dish.id && selectedDish.rank === 1
              )}
              onChange={() => handleSelection(dish.id, 1)}
            />
            <label htmlFor={`dish${dish.id}_rank1`}>{dish.dishName}</label>

            <input
              type="radio"
              name={`dish${dish.id}`}
              id={`dish${dish.id}_rank2`}
              checked={selectedDishes.some(
                (selectedDish) =>
                  selectedDish.id === dish.id && selectedDish.rank === 2
              )}
              onChange={() => handleSelection(dish.id, 2)}
            />
            <label htmlFor={`dish${dish.id}_rank2`}>{dish.dishName}</label>

            <input
              type="radio"
              name={`dish${dish.id}`}
              id={`dish${dish.id}_rank3`}
              checked={selectedDishes.some(
                (selectedDish) =>
                  selectedDish.id === dish.id && selectedDish.rank === 3
              )}
              onChange={() => handleSelection(dish.id, 3)}
            />
            <label htmlFor={`dish${dish.id}_rank3`}>{dish.dishName}</label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Tab1;

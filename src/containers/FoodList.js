import React from 'react';
import FoodRow from 'components/FoodRow';

class FoodList extends React.Component {
  render() {
    let rows = []
    this.props.foods.forEach((food) => {
      rows.push(
        <FoodRow
          description={food.description}
          kcal={food.kcal}
        />
      );
    });

    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

export default FoodList;

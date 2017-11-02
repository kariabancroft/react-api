import React from 'react';

class FoodRow extends React.Component {
  render() {
    const descr = this.props.description;
    const kcal = this.props.kcal;

    return (
      <tr>
        <td>{descr}</td>
        <td>{kcal}</td>
      </tr>
    )
  }
}

export default FoodRow;

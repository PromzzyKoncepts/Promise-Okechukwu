import React from 'react';
import Proptypes from 'prop-types';

const CounterItem = ({ title, counter, measurement }) => (
  <div className="">
    <h2 className="">
      {counter}
      {' '}
      {measurement}
    </h2>
    <span className="">
      {title}
    </span>
  </div>
);

export default CounterItem;
CounterItem.propTypes = {
  title: Proptypes.string.isRequired,
  counter: Proptypes.object.isRequired,
  measurement: Proptypes.string.isRequired,
};

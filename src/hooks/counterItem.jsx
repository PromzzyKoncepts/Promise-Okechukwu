import React from 'react';

const CounterItem = ({ title, counter, measurement }) => {
  return (
    <div className="">
      <h2 className="">
        {counter} {measurement}
      </h2>
      <span className="">
        {title}
      </span>
    </div>
  );
};

export default CounterItem;

import React from 'react';

const Recipe = (props: any) => {
  const { recipe } = props;
  return (
    <div>
      <div>
        {recipe.title}
      </div>
    </div>
  );
};

export default Recipe;

import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Recipe } from './recipe';

const CATALOG_QUERY = gql`
  {
    catalog {
      recipes {
        title
      }
    }
  }
  
`;

const Catalog = () => {
  const { data } = useQuery(CATALOG_QUERY);
  console.log(data);

  return (
    <div className="catalog">
      {data ? (
        <>
          {data.catalog.recipes.map((recipe: any) => (
            <Recipe key={recipe.id} recipe={recipe} />
         ))}
        </>
      ) : null}

    </div>
  );
};

export default Catalog;

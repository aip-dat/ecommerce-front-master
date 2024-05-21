import styled from "styled-components";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const CategoryCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CategoryName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export default function CategoriesGrid({ categories }) {
  return (
    <GridWrapper>
      {categories.map((category) => (
        <CategoryCard key={category._id}>
          <CategoryName>{category.name}</CategoryName>
          <ul>
            {category.products.map((product) => (
              <li key={product._id}>
                <p>{product.title}</p>
                <p>{product.price}</p>
                {/* Add more product details as needed */}
              </li>
            ))}
          </ul>
        </CategoryCard>
      ))}
    </GridWrapper>
  );
}

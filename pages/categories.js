import Header from "@/components/Header";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import styled from "styled-components";

const CategoryLink = styled.a`
  color: black; /* Change to desired color */
  text-decoration: none; /* Add underline */
`;

export default function CategoriesPage({ categories }) {
  return (
    <>
      <Header />
      <Center>
        <h1>Loại hàng</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {categories.map((category) => (
            <p key={category._id} style={{ marginRight: "10px" }}>
              <button>
                <CategoryLink href={`/category/${category._id}`}>
                  {category.name}
                </CategoryLink>
              </button>
            </p>
          ))}
        </div>
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const categories = await Category.find();
  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}

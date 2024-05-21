import Header from "@/components/Header";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";

export default function CategoryPage({ category, products }) {
  if (!category) {
    // Handle the case where category is not found
    return (
      <>
        <Header />
        <Center>
          <h1>Category Not Found</h1>
        </Center>
      </>
    );
  }

  return (
    <>
      <Header />
      <Center>
        <h1>{category.name}</h1>
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              <p>{product.title}</p>
              <p>{product.price}</p>
              {/* Add more product details as needed */}
            </li>
          ))}
        </ul>
      </Center>
    </>
  );
}

export async function getServerSideProps({ params }) {
  await mongooseConnect();
  const categoryId = params.categoryId;
  const category = await Category.findById(categoryId);
  if (!category) {
    // Return an empty array of products if category is not found
    return {
      props: {
        category: null,
        products: [],
      },
    };
  }
  const products = await Product.find({ category: categoryId });
  return {
    props: {
      category: JSON.parse(JSON.stringify(category)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

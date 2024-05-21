import styled from "styled-components";
import Link from "next/link";

const CategoryWrapper = styled.div``;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 1rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`;

export default function CategoryBox({ _id, name }) {
  const url = `/categories/${_id}`;

  return (
    <CategoryWrapper>
      <WhiteBox href={url}>
        <Title href={url}>{name}</Title>
      </WhiteBox>
    </CategoryWrapper>
  );
}

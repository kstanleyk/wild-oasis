import styled from "styled-components";

import { Cabin } from "./cabin.model";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const CabinCol = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

interface Props {
  cabin: Cabin;
}

export default function CabinRow({ cabin }: Props) {
  const { name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <TableRow role="row">
      <Img src={image} />
      <CabinCol>{name}</CabinCol>
      <Price>{regularPrice}</Price>
      <Discount>{discount}</Discount>
      <Discount>{maxCapacity}</Discount>
    </TableRow>
  );
}

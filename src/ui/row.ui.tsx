import { css, styled } from "styled-components";

interface Props {
  type?: string | undefined;
}

const Row = styled.div<Props>`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `};

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `};
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;

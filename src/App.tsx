import styled from "styled-components";
import GlobalStyles from "./styles/global-styles";
import Button from "./ui/Button";
import Input from "./ui/input.ui";
import Heading from "./ui/heading.ui";
import Row from "./ui/row.ui";

const StyledApp = styled.div`
  padding: 20px;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <Heading as="h2">Coming soon</Heading>
          </Row>
          <Row>
            <Heading as="h3">Check in and out</Heading>
            <Button size="large">
              Check in
            </Button>
            <Button>
              Check out
            </Button>
            <Input type="number" placeholder="number of guests" />
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

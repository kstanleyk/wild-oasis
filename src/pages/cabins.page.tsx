import CabinTable from "../features/cabins/cabin.table";
import Heading from "../ui/heading.ui";
import Row from "../ui/row.ui";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>filter / sort</p>
      </Row>

      <Row>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;

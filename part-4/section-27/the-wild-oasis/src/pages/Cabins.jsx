import { useState } from 'react';
import CabinTable from '../features/cabins/CabinTable';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CreateCabinForm from '../features/cabins/CreateCabinForm';

function Cabins() {
  const [showForm, setShowForm] = useState();

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />

        {!showForm ? (
          <Button onClick={() => setShowForm((show) => !show)}>
            Add new cabin
          </Button>
        ) : (
          <>
            <Button onClick={() => setShowForm((show) => !show)}>
              Close form
            </Button>
            <CreateCabinForm />
          </>
        )}
      </Row>
    </>
  );
}

export default Cabins;

import CreateCabinForm from './CreateCabinForm';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isModalOpen, setIsModalOpen] = useState();
//   return (
//     <div>
//       {!isModalOpen ? (
//         <Button onClick={() => setIsModalOpen((show) => !show)}>
//           Add new cabin
//         </Button>
//       ) : (
//         <>
//           <Button onClick={() => setIsModalOpen((show) => !show)}>
//             Close form
//           </Button>
//           <Modal onClose={() => setIsModalOpen(false)}>
//             <CreateCabinForm onCloseModal={() => setIsModalOpen(false)} />
//           </Modal>
//         </>
//       )}
//     </div>
//   );
// }

export default AddCabin;

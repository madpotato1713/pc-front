import { useState } from 'react';
import ButtonExample from '@/components/atoms/ButtonExample';
import ModalPopupExample from '@/components/atoms/ModalPopupExample';
import { openPopup } from '@/utils/Utils';

const ExamplePopup = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <div>
        <ButtonExample
          text="모달팝업열기"
          onClick={openModal}></ButtonExample>
        <ModalPopupExample
          isOpen={isModalOpen}
          onClose={closeModal}>
          모달 팝업 내용
        </ModalPopupExample>
      </div>
      <div style={{ marginTop: '20px' }}>
        <ButtonExample
          text="팝업열기"
          onClick={() =>
            openPopup({
              url: 'http://localhost:3000/popuptest',
              title: 'Example Popup'
            })
          }></ButtonExample>
      </div>
    </div>
  );
};

export default ExamplePopup;

import { Dialog } from "@headlessui/react";

interface OrderModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Оформить заказ</h2>
          <input
            placeholder="ФИО"
            className="border p-2 mb-4 w-full"
            type="text"
          />
          <input
            placeholder="Телефон"
            className="border p-2 mb-4 w-full"
            type="tel"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Отправить
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default OrderModal;

import { useStoreModal } from '@/store/useStoreModal'
import { Icon } from '@iconify/react'
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

type ModalProps = {
  title?: string
  children: JSX.Element
  role: string
}

export const Modal = ({ children, role, title = 'Modal' }: ModalProps) => {
  const { store, setModal } = useStoreModal()

  const isOpen = store.modal.role === role && store.modal.isOpen

  const modalRef = useRef(null)

  useOnClickOutside(modalRef, () => handlerCloseModal())

  const handlerCloseModal = () => {
    setModal({
      role: '',
      isOpen: false
    })
  }

  return isOpen ? (
    <div
      ref={modalRef}
      id={role}
      className="fixed left-0 top-0 z-[45] h-full w-full bg-black/[0.65]"
    >
      <div className="fixed left-[15%] top-[15%] z-[50] h-[75%] w-[75%] rounded-lg bg-brand-primary p-4 text-white shadow-xl">
        <div className="h-full overflow-y-auto">
          <div className="flex gap-4">
            <h2 className="my-4 w-full text-2xl font-semibold leading-tight">
              {title}
            </h2>
            <button onClick={handlerCloseModal} className="">
              <Icon icon={'mdi:close-circle'} width={24} height={24} />
            </button>
          </div>
          <div className="flex-col gap-4 p-4">{children}</div>
        </div>
      </div>
    </div>
  ) : null
}

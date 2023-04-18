interface ModalProps {
  title: string;
  children: React.ReactNode,
  open: boolean,
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({title, children, open, handleClose}) => {
    return (
        open ?
            <div className="h-screen w-screen z-90 bg-gray-900 bg-opacity-30 flex-col p-20 fixed flex">
                <div className="container mx-auto max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md p-6 relative">
                    <div className="flex justify-between items-start p-4 rounded-t border-b">
                        <h3 className="text-2xl font-bold text-gray-900">
                            {title}
                        </h3>
                        <button  onClick={handleClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-6">
                        {children}
                    </div>
                </div>

            </div>
        : <></>
    )
}

export default Modal;
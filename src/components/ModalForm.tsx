import FormVariant from "@/types/variant.enum";
import { useState } from "react";
import Modal from "./Modal";

export interface FormSubmit {
  sectionName: string
  taskName?: string;
  due?: string;
}

interface ModalProps {
  open: boolean;
  variant: FormVariant;
  handleClose: () => void;
  sectionNames: string[]
  handleSubmit: (data: FormSubmit) => void;
}

const ModalForm: React.FC<ModalProps> = ({open, handleClose, variant, sectionNames, handleSubmit}) => {

  const [sectionName, setSectionName] = useState('')
  const [taskName, setTaskName] = useState('')
  const [due, setDue] = useState('')

  const handleFormSubmit = () => {
    handleSubmit({
      sectionName: sectionName,
      taskName: taskName,
      due: due,
    })
  }
  return (
    <Modal
      open={open}
      handleClose={handleClose}
      title={variant === FormVariant.SECTION ? 'New section' : 'New task'}
    >
      <div className='flex flex-col gap-6'>
        <div>
          {
            variant === FormVariant.TASK ? (
              <div className='flex flex-col gap-4'>
                <label htmlFor='section-select' className='block mb-2 text-sm font-medium text-gray-900'>
                  Select a Section
                </label>
                <select
                  id='section-select'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  onChange={(e) => setSectionName(e.target.value)}
                >
                  <option value=''>Choose a section</option>
                  {
                    sectionNames.map((name, key) => (
                      <option key={key} value={name}>
                        {name}
                      </option>
                    ))
                  }
                </select>
                <div>
                  <label htmlFor='task-name' className='block mb-2 text-sm font-medium text-gray-900'>
                    Task Name
                  </label>
                  <input
                    type='text'
                    id='task-name'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    placeholder=''
                    required
                    onChange={(e) => setTaskName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor='due-date' className='block mb-2 text-sm font-medium text-gray-900'>
                    Due Date
                  </label>
                  <input
                    type='date'
                    id='due-date'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    placeholder=''
                    required
                    onChange={(e) => setDue(e.target.value)}
                  />
                </div>
              </div>
            ) : (
              <>
                <label htmlFor='section-name' className='block mb-2 text-sm font-medium text-gray-900'>
                  Section Name
                </label>
                <input
                  type='text'
                  id='section-name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder=''
                  required
                  onChange={(e) => setSectionName(e.target.value)}
                />
              </>
            )
          }
        </div>
        <button
          onClick={handleFormSubmit}
          type='button'
          className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none w-full'
        >
          Sauvegarder
        </button>
      </div>
  </Modal>
  )
}

export default ModalForm;
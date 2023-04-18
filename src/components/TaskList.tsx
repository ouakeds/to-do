import { useCallback } from "react";
import TaskRow from "./TaskRow";
import TaskSection from "./TaskSection";
import FormVariant from "@/types/variant.enum";
import Task from "@/types/task.interface";

interface TaskListProps {
  sections: Map<string, Task[]>;
  handleOpenModal: (variant: FormVariant) => void;
  handleTaskCheck: (sectionName: string, taskName: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({sections, handleOpenModal, handleTaskCheck}) => {

  const onNewTask = useCallback(() => handleOpenModal(FormVariant.TASK), [handleOpenModal])
  const onNewSection = useCallback(() => handleOpenModal(FormVariant.SECTION), [handleOpenModal])
  const extractSectionNames = (): string[] =>  Array.from(sections.keys());

  return (
    <>
      <div className='py-20 w-full h-full flex  justify-center'>
       
        <div className="w-full max-w-6xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
          
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-6xl font-bold leading-none text-gray-900">My Tasks</h5>
            <div>
              <button type="button" onClick={onNewTask} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                New task
              </button>
              <button type="button" onClick={onNewSection} className="text-green-700 bg-white border-green-700 border-2 hover:bg-opacity-20 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                New section
              </button>
            </div>
          </div>

          <div className="mt-12">
              {
                extractSectionNames().map((sectionName, key) => {
                  return (
                    <TaskSection key={key} title={sectionName}>
                      {
                        sections.get(sectionName)?.map((item, itemKey) => {
                          return <TaskRow handleCheck={(taskName) => handleTaskCheck(sectionName, taskName)} key={itemKey} title={item.title} due={item.due} tags={item.tags} done={item.done}/>
                        })
                      }
                    </TaskSection>
                  )
                })
              }
          </div>
          
        </div>
      </div>
    </>
  )
}

export default TaskList;
import Chip, { ChipProps } from "./Chip";

export interface TaskProps {
  title: string;
  done: boolean;
  due?: string;
  tags?: ChipProps[]
  handleCheck?: (name: string) => void;
}

const TaskRow: React.FC<TaskProps> = ({title, done, due, tags, handleCheck}) => {
  return (
    <li className="py-4">
      <div className="flex items-center space-x-4 justify-around">
        
        <button className="flex-shrink-0" onClick={() => handleCheck ? handleCheck(title) : {}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 rounded-full ${done ? 'text-green-500' : 'text-gray-500'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      
        <div className="flex-1 min-w-0 gap-4">
            <p className="text-l font-medium text-gray-900 truncate">
              {title}
            </p>
        </div>

        {
          tags?.map(({title, color}, key) => {
            return <Chip key={key} title={title} color={color} />
          })
        }
    
        <div className="inline-flex items-center text-base font-semibold text-gray-900">
            <span className="bg-gray-100 text-gray-800 text-l font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 border border-gray-500">
              <svg aria-hidden="true" className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
              {due ? new Date(due).toLocaleDateString() : ''}
            </span>
        </div>
    
      </div>
    </li>
  )
}

export default TaskRow;
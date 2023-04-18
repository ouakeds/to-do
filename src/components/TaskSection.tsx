interface TaskSectionProps {
  title: string;
  children: React.ReactNode
}

const TaskSection: React.FC<TaskSectionProps> = ({title, children}) => {
  return (
    <div className='mt-6'>
      <button className='flex gap-2 items-center justify-center text-slate-900'>
        <h2 className='text-3xl font-semibold'>{title}</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        <ul className="w-full divide-y divide-gray-200 mt-6">
          {children}
        </ul>
    </div>
  )
}

export default TaskSection;
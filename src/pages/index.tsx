import React, { useState } from 'react'
import NavBar from '@/components/NavBar';
import TaskList from '@/components/TaskList';
import FormVariant from '@/types/variant.enum';
import ModalForm, { FormSubmit } from '@/components/ModalForm';
import Task from '@/types/task.interface';

export default function Home() {

  const [open, setOpen] = useState<boolean>(false)
  const [variant, setFormVariant] = useState<FormVariant>(FormVariant.NONE)
  const [sections, setSections] = useState<Map<string, Task[]>>(new Map());
  const extractSectionNames = (): string[] =>  Array.from(sections.keys());
  
  const handleSubmit = (data: FormSubmit) => {
    if (variant === FormVariant.SECTION && data.sectionName) {
      sections.set(data?.sectionName, []);
      setSections(new Map(sections))
    } else if (variant === FormVariant.TASK && data.taskName && data.due) {
      const items: Task[] = sections.get(data.sectionName) ?? [];
      sections.set(data.sectionName, [
        ...items,
        {
          done: false,
          title: data.taskName,
          due: data.due
        }
      ]);
    }
    setSections(new Map(sections));
    setFormVariant(FormVariant.NONE);
    setOpen(false)
  }

  const handleOpenModal = (variant: FormVariant) => {
    setOpen(true);
    setFormVariant(variant);
  }

  const handleTaskCheck = (sectionName: string, taskName: string) => {
    const items = sections.get(sectionName) ?? [];

    for (let i = 0; i < items?.length; i++) {
      if (items[i].title === taskName)
        items[i].done = !items[i].done;
    }    
    sections.set(sectionName, items);
    setSections(new Map(sections));
  }

  return (
    <>
      <div className='w-full h-screen  bg-slate-100 relative'>
        <NavBar label='To-Do Project' />
        <div className='mt-20  flex justify-center'>
          <ModalForm
            variant={variant}
            open={open}
            handleClose={() => setOpen(false)}
            sectionNames={extractSectionNames()}
            handleSubmit={handleSubmit}
          />
          <TaskList handleOpenModal={handleOpenModal} sections={sections} handleTaskCheck={handleTaskCheck} />
        </div>
      </div>
    </>
  )
}

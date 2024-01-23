import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { EmptyList } from './EmptyList';
import { Task, TaskType } from './Task';
import styles from './ToDoList.module.css';
import { PlusCircle } from '@phosphor-icons/react'


export function ToDoList() {
  
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [contentTask, setContentTask] = useState('');
  const [tasksDone, setTasksDone] = useState(0);
  
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setContentTask(event.target.value);
  }
  
  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }
  
  function handleCrateTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, {
      id: tasks.length * contentTask.length,
      content: contentTask,
      done: false,
    }]);
    
    setContentTask('');
  }
  
  function deleteTask(taskToDelete: TaskType) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskToDelete.id;
    })

    setTasks(tasksWithoutDeletedOne);
  }
  
  function checkTask(taskToCheck: TaskType) {
    setTasks((prevLista) =>
      prevLista.map((objeto) =>
        objeto.id === taskToCheck.id ? { ...objeto, done: taskToCheck.done } : objeto
      )
    );

    const allcheckedtasks = tasks.filter(task => {
      return task.done === true;
    });
    setTasksDone(allcheckedtasks.length)
  }
  
  const isNewTaskEmpty = contentTask.length === 0;

    return (
        <div>
            <form onSubmit={handleCrateTask} className={styles.todo}>
                <input 
                  onChange={handleNewTaskChange} 
                  onInvalid={handleNewTaskInvalid}
                  value={contentTask}
                  placeholder='Adicione uma nova tarefa'
                /> 
                <button type="submit" disabled={isNewTaskEmpty}>
                  <b>Criar</b> <PlusCircle size={20}/>
                </button>
            </form>
            <div className={styles.task}>
              <div className={styles.info}>
                <b className={styles.created}>Tarefas criadas<span>{tasks.length}</span></b>
                <b className={styles.done}>Concluídas <span>{tasksDone} de {tasks.length}</span></b>
              </div>
              {(tasks && tasks.length > 0) ?
              <>
                {tasks.map(task => {
                  return ( 
                    <Task
                      key={task.id}
                      task={task}
                      onDeleteTask={deleteTask}
                      onCheckTask={checkTask}
                    />
                  )
                })
                }
              </>
                :
                <EmptyList/>
              }
            </div>
        </div>
    );
  }
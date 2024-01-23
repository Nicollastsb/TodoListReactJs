import { useState } from 'react';
import styles from './Task.module.css';
import { Check, Trash } from '@phosphor-icons/react'

export interface TaskType {
    id: number;
    content: string;
    done: boolean;
  }

  interface TaskProps {
    task: TaskType;
    onDeleteTask: (task: TaskType) => void;
    onCheckTask: (task: TaskType) => void;
  }

export function Task({task, onDeleteTask, onCheckTask}: TaskProps) {

  const [checkBoxDone, setCheckBoxDone] = useState(task.done);

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  function handleDoneTask() {
    setCheckBoxDone(!checkBoxDone);
    task.done = !checkBoxDone;
    onCheckTask(task);
  }

  const checkboxCheckedClassname = checkBoxDone
  ? styles['checkbox-checked']
  : styles['checkbox-unchecked']

  return (
      <div className={styles.task}>
        <div className={styles.checkBoxContent}>      
          <div className={styles.checkBoxDone}>
            <label htmlFor="checkbox" onClick={handleDoneTask}>
              <input readOnly type="checkbox" checked={checkBoxDone} />
              <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                {checkBoxDone && <Check size={12} />}
              </span>
            </label>
          </div>
          <div className={styles.spanContent}>
            <span className={checkBoxDone ? styles.spanTextContent : ''}>{task.content}</span>
          </div>    
        </div>
        <div className={styles.container}>
          <div className="round">
            <button onClick={handleDeleteTask} title="Deletar tarefa">
              <Trash size={24} weight="thin" />
            </button>
          </div>
        </div>
      </div>
  );
}
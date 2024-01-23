import styles from './EmptyList.module.css';
import { ClipboardText } from '@phosphor-icons/react'

export function EmptyList() {

    return (
        <div className={styles.emptyList}>
          <div className={styles.icon}>
            <ClipboardText size={56} weight="thin" />
          </div>
          <div>
            <b>Você ainda não tem tarefas cadastradas</b>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
    );
  }
import styles from './Header.module.css';
import todo from '../assets/todo.svg';
import rocket from '../assets/rocket.svg';

export function Header() {
    return (
      <header className={styles.header}>
        <img src={rocket} alt="Rocket" />
        <img src={todo} alt="To do" />
      </header>
    );
  }
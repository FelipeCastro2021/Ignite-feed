import { PencilLine } from '@phosphor-icons/react';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=50&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <img
          src="https://github.com/FelipeCastro2021.png"
          className={styles.avatar}
        />

        <strong>Felipe Castro Ferreira</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

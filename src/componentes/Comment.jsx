import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://www.github.com/RyanCasf.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Felipe Castro Ferreira</strong>
              <time
                dateTime="2024-07-11 10:28:00"
                title="11 de julho de 2024 às 10:28"
              >
                Cerca de 1 hora atrás
              </time>
            </div>

            <button>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, Devon, Parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

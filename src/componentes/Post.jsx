import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/FelipeCastro2021.png" />
          <strong>Felipe Castro Ferreira</strong>
          <span>Web Development</span>
        </div>

        <time
          dateTime="2024-07-11 10:28:00"
          title="11 de julho de 2024 às 10:28"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{' '}
          <a href="#"> #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
    </article>
  );
}

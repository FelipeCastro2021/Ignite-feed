import { Post } from './Post';
import { Header } from './componentes/Header';

import './global.css';
import style from './App.module.css';
import { Sidebar } from './componentes/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Felipe Castro Ferreira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi aliquid iusto doloremque officiis, laboriosam atque nobis. Odit quidem soluta velit sequi et nulla cupiditate eos consequatur quae! Culpa, obcaecati."
          />

          <Post
            author="Toninho Costa Neto"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi aliquid iusto doloremque officiis, laboriosam atque nobis. Odit quidem soluta velit sequi et nulla cupiditate eos consequatur quae! Culpa, obcaecati."
          />
        </main>
      </div>
    </div>
  );
}

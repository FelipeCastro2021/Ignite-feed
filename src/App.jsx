import { Post } from './componentes/Post';
import { Header } from './componentes/Header';
import { Sidebar } from './componentes/Sidebar';

import './global.css';
import style from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />

        <main>
          <Post />

          <Post />
        </main>
      </div>
    </div>
  );
}

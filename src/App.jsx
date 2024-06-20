import { Post } from './Post';
import { Header } from './componentes/Header';

import './style.css';

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Diego Fernandes"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />

      <Post
        author="Gabriel Buzzi"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
      />
    </div>
  );
}

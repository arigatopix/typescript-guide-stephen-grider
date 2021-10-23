import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/2';

axios.get(url).then(response => {
  const todo = response.data;

  const ID = todo.id;
  const title = todo.Title;
  const finished = todo.finished;

  console.log(`
    The Todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
  `);
});

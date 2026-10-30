// Replace these two values with your own from Supabase
// (Project URL from Data API, publishable key from API Keys)
const SUPABASE_URL = 'https://oyjtrfotsxcbbhhxzbtr.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Cp6qF18iTLIamMOsygZfqw_at4FmWLv';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

async function loadTodos() {
  const { data, error } = await db
    .from('todos')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    alert('Could not load todos: ' + error.message);
    return;
  }

  list.innerHTML = '';
  data.forEach(renderTodo);
}

function renderTodo(todo) {
  const li = document.createElement('li');
  if (todo.done) li.classList.add('done');

  const span = document.createElement('span');
  span.textContent = todo.title;

  li.append(span);
  list.append(li);
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const title = input.value.trim();
  if (!title) return;

  const { error } = await db.from('todos').insert({ title });

  if (error) {
    alert('Could not add todo: ' + error.message);
    return;
  }

  input.value = '';
  loadTodos();
});

loadTodos();

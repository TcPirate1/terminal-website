import { creationDate } from "virtual:blogdates";
import weather from "virtual:weather";
const msg = document.querySelector(".msg") as HTMLElement;
const msgContainer = document.querySelector(".container") as HTMLElement;

setTimeout(() => {
  msg.style.background = "limegreen";
  msg.innerHTML = "Blog found";
  msg.style.boxShadow = "0 0 30px limegreen";
  setTimeout(() => {
    msgContainer.style.display = "none";
  }, 2000);
}, 5000);

const contentFiles = import.meta.glob('./posts/*.txt', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const container = document.querySelector('#posts');

if (!container) {
  throw new Error('There is something wrong with the page');
}

if (Object.entries(contentFiles).length === 0) {
  const error = document.createElement('p');
  error.style.textAlign = "center";
  error.textContent = "No posts";
  container.appendChild(error);
};

for (const [path, content] of Object.entries(contentFiles)) {
  const filename = path.split('/').pop()!;
  const name = filename.replace('.txt', '');

  const heading = name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());

  const section = document.createElement('section');

  const details = document.createElement('details');
  const h2 = document.createElement('summary');
  h2.style.fontSize = '1.2rem';
  h2.style.whiteSpace = 'pre-wrap';
  h2.style.cursor = 'pointer';
  h2.style.textAlign = 'center';
  const todayDate = new Date().toISOString().split('T')[0];
  const date = creationDate[filename];
  if (date === todayDate) {
    h2.textContent = `${heading}, (${date})\n ${weather}`;
  }
  else {
    h2.textContent = date ? `${heading} (${date})` : heading;
  } 

  const paragraph = document.createElement('p');
  paragraph.textContent = content.trim();

  section.appendChild(details);
  details.appendChild(h2);
  details.appendChild(paragraph);

  container.appendChild(section);
}

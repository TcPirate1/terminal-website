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
  h2.style.fontSize = '1.5rem';
  h2.style.cursor = 'pointer';
  h2.textContent = heading;

  const paragraph = document.createElement('p');
  paragraph.textContent = content.trim();

  section.appendChild(details);
  details.appendChild(h2);
  details.appendChild(paragraph);

  container.appendChild(section);
}

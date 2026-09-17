const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const charactersArray = characters.split("");

const fontSize = 16;

const canvas = document.getElementById("matrix") as HTMLCanvasElement;
const context = canvas.getContext("2d");
const canvasContainer = document.getElementById("matrix-container") as HTMLElement;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = Math.floor(canvas.width / fontSize);

const matrix: number[] = [];
for (let i = 0; i < columns; i++) {
  matrix[i] = 1;
}

function drawMatrix(): void {
  context!.fillStyle = "rgba(0, 0, 0, 0.05)";
  context!.fillRect(0, 0, canvas.width, canvas.height);

  context!.fillStyle = "#aa3bff";
  context!.font = fontSize + "px monospace";

  for (let i = 0; i < matrix.length; i++) {
    const text = charactersArray[Math.floor(Math.random() * charactersArray.length)];
    context!.fillText(text, i * fontSize, matrix[i] * fontSize);

    if (matrix[i] * fontSize > canvas.height && Math.random() > 0.975) {
      matrix[i] = 0;
    }

    matrix[i]++;
  }
}

function animateMatrix(): void {
  drawMatrix();
  const animationId = requestAnimationFrame(animateMatrix);
  setTimeout(() => {
    cancelAnimationFrame(animationId);
    if (canvasContainer.contains(canvas)) {
    canvasContainer.removeChild(canvas);
    }
  }, 3000);
}

animateMatrix();

const terminal = document.getElementById("cmdinput") as HTMLInputElement;
const output = document.getElementById("output");
const outputBox = document.getElementById("outputBox");

  terminal!.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const input = terminal!.value.trim();

      if (!input) return;

      executeCommand(input);
    }
  });

  function multiple_attr(element: HTMLElement, attributes: { [key: string]: string }): void {
    Object.keys(attributes).forEach(key => {
      element.setAttribute(key, attributes[key]);
    });
  }

function newUrl(url: string) {
  const currentUrl = window.location.pathname;

  const newPath = `${currentUrl.replace(/\/$/, '')}/${url}`;

  window.location.href = newPath;
};

  function exposeClientInfo(): string {
  return navigator.userAgent.toString();
}

  function clearOutput() {
    outputBox?.replaceChildren(output!);
    output!.replaceChildren();
  }

  function executeCommand(input: string): void {
    const [cmd] = input.split(" ");

    switch (cmd.toLowerCase()) {
      case "help":
        output!.textContent = `
  help          Shows this help text
  rss           Goes to the RSS feed (Does nothing at the moment)
  blog          WIP
  ua            Shows user-agent info (browser, OS etc.)
  cd            Show links for nerd fonts and dracula css
  ex            Show experience text
  about         Show about information
  ls            Show all forms of contact
  cls           Clear screen`;
        output!.style.textAlign = 'left';
        break;

      case "rss":
        clearOutput();
        output!.textContent = "This does nothing at the moment."
        output!.style.textAlign = 'center';
        break

      case "blog":
        newUrl("blog");
        break

      case "ua":
        clearOutput();
        output!.textContent = exposeClientInfo();
        output!.style.textAlign = 'center';
        break

      case "cd":
        clearOutput();
        show_links();
        break;

      case "ex":
        clearOutput();
        experience();
        output!.style.textAlign = 'center';
        break;

      case "about":
        clearOutput();
        about();
        output!.style.textAlign = 'center';
        break;

      case "ls":
        clearOutput();
        contact();
        output!.style.textAlign = 'center';
        break;

      case "cls":
        clearOutput();
        output!.style.textAlign = 'center';
        break;

      default:
        clearOutput();
        output!.textContent = `Command not found: ${cmd}`;
        output!.style.textAlign = 'center';
    }
  }

  function about(): void {
    output!.textContent = `
Hello my name is Terence and I'm a developer that
graduated at the end of 2024 (yeah not a great time)
and here are a couple of things about me:

1. I like GNU/Linux and have almost gone through the whole range.
From Mint to testing all the Arch-based distros to settling on base Arch.
I made this website because I got inspired by other websites and wanted to
make a more interactive version of them.

2. I love purple. Still in the process of converting everything I own and
look at but it'll happen eventually.

3. I have been enjoying writing at the moment so if this is starting to
drag that's why.

4. The font and symbols you see on this site is proudly brought to you by Nerd Fonts
and the Dracula theme.

I am currently trying to enjoy my time instead of exhausting myself
and never enjoying anything along the way.

This website is the beginning of that!
`;
  }

  function contact(): void {
    output!.style.textAlign = 'center';
    output!.textContent = 'Email: terence89chen@gmail.com';
  }

  function experience(): void {
    output!.textContent = `Front-end: \udb80\udf1d | \udb80\udf1c | \udb80\udf1e | \udb81\udee6 |

Back-end: \udb80\udf20 | \ue648 | \udb81\ude72 |

Frameworks: \udb81\udf08 | \ue83e | \ue7dc | \ue71d |
    
Misc: \uf315 | \udb82\udced | \udb81\udd48 | \udb85\ude0a | \udb82\udcc7 |`;
  }

  function show_links() {
    const link1 = document.createElement('a');
    multiple_attr(link1, {
      'href': 'https://www.nerdfonts.com/font-downloads',
      'id': 'output',
      'target': '_blank',
      'rel': 'noopener noreferrer',
    });
    link1.textContent = 'Nerd fonts';
    const link2 = document.createElement('a');
    multiple_attr(link2, {
      'href': 'https://draculatheme.com/dracula-css',
      'id': 'output',
      'target': '_blank',
      'rel': 'noopener noreferrer',
    });
    link2.textContent = 'Dracula CSS';
    const link3 = document.createElement('a');
    multiple_attr(link3, {
      'href': 'https://github.com/catppuccin/palette',
      'id': 'output',
      'target': '_blank',
      'rel': 'noopener noreferrer',
    });
    link3.textContent = 'Catppuccin CSS';
    output!.replaceWith(link1);
    outputBox?.appendChild(link2);
    outputBox?.appendChild(link3);
    outputBox!.style.flexDirection = 'column';
  }

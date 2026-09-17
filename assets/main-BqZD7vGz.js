import"./modulepreload-polyfill-P2Xu9kJm.js";var e=`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`.split(``),t=16,n=document.getElementById(`matrix`),r=n.getContext(`2d`),i=document.getElementById(`matrix-container`);n.width=window.innerWidth,n.height=window.innerHeight;var a=Math.floor(n.width/t),o=[];for(let e=0;e<a;e++)o[e]=1;function s(){r.fillStyle=`rgba(0, 0, 0, 0.05)`,r.fillRect(0,0,n.width,n.height),r.fillStyle=`#aa3bff`,r.font=`16px monospace`;for(let i=0;i<o.length;i++){let a=e[Math.floor(Math.random()*e.length)];r.fillText(a,i*t,o[i]*t),o[i]*t>n.height&&Math.random()>.975&&(o[i]=0),o[i]++}}function c(){s();let e=requestAnimationFrame(c);setTimeout(()=>{cancelAnimationFrame(e),i.contains(n)&&i.removeChild(n)},3e3)}c();var l=document.getElementById(`cmdinput`),u=document.getElementById(`output`),d=document.getElementById(`outputBox`);l.addEventListener(`keydown`,e=>{if(e.key===`Enter`){let e=l.value.trim();if(!e)return;g(e)}});function f(e,t){Object.keys(t).forEach(n=>{e.setAttribute(n,t[n])})}function p(e){let t=`${window.location.pathname.replace(/\/$/,``)}/${e}`;window.location.href=t}function m(){return navigator.userAgent.toString()}function h(){d?.replaceChildren(u),u.replaceChildren()}function g(e){let[t]=e.split(` `);switch(t.toLowerCase()){case`help`:u.textContent=`
  help          Shows this help text
  rss           Goes to the RSS feed (Does nothing at the moment)
  blog          WIP
  ua            Shows user-agent info (browser, OS etc.)
  cd            Show links for nerd fonts and dracula css
  ex            Show experience text
  about         Show about information
  ls            Show all forms of contact
  cls           Clear screen`,u.style.textAlign=`left`;break;case`rss`:h(),u.textContent=`This does nothing at the moment.`,u.style.textAlign=`center`;break;case`blog`:p(`blog`);break;case`ua`:h(),u.textContent=m(),u.style.textAlign=`center`;break;case`cd`:h(),b();break;case`ex`:h(),y(),u.style.textAlign=`center`;break;case`about`:h(),_(),u.style.textAlign=`center`;break;case`ls`:h(),v(),u.style.textAlign=`center`;break;case`cls`:h(),u.style.textAlign=`center`;break;default:h(),u.textContent=`Command not found: ${t}`,u.style.textAlign=`center`}}function _(){u.textContent=`
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
`}function v(){u.style.textAlign=`center`,u.textContent=`Email: terence89chen@gmail.com`}function y(){u.textContent=`Front-end: 󰌝 | 󰌜 | 󰌞 | 󰛦 |

Back-end: 󰌠 |  | 󰙲 |

Frameworks: 󰜈 |  |  |  |
    
Misc:  | 󰣭 | 󰕈 | 󱘊 | 󰣇 |`}function b(){let e=document.createElement(`a`);f(e,{href:`https://www.nerdfonts.com/font-downloads`,id:`output`,target:`_blank`,rel:`noopener noreferrer`}),e.textContent=`Nerd fonts`;let t=document.createElement(`a`);f(t,{href:`https://draculatheme.com/dracula-css`,id:`output`,target:`_blank`,rel:`noopener noreferrer`}),t.textContent=`Dracula CSS`;let n=document.createElement(`a`);f(n,{href:`https://github.com/catppuccin/palette`,id:`output`,target:`_blank`,rel:`noopener noreferrer`}),n.textContent=`Catppuccin CSS`,u.replaceWith(e),d?.appendChild(t),d?.appendChild(n),d.style.flexDirection=`column`}
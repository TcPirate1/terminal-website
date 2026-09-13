(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.getElementById(`cmdinput`),t=document.getElementById(`output`),n=document.getElementById(`outputBox`);e.addEventListener(`keydown`,t=>{if(t.key===`Enter`){let t=e.value.trim();if(!t)return;s(t)}});function r(e,t){Object.keys(t).forEach(n=>{e.setAttribute(n,t[n])})}function i(e){let t=`${window.location.pathname.replace(/\/$/,``)}/${e}`;return window.location.href=t}function a(){return navigator.userAgent.toString()}function o(){n?.replaceChildren(t),t.replaceChildren()}function s(e){let[n]=e.split(` `);switch(n.toLowerCase()){case`help`:t.textContent=`
  help          Shows this help text
  rss           Goes to the RSS feed (Does nothing at the moment)
  blog          WIP
  ua            Shows user-agent info (browser, OS etc.)
  cd            Show links for nerd fonts and dracula css
  ex            Show experience text
  about         Show about information
  ls            Show all forms of contact
  cls           Clear screen`,t.style.textAlign=`left`;break;case`rss`:o(),t.textContent=`This does nothing at the moment.`,t.style.textAlign=`center`;break;case`blog`:i(`blog`);break;case`ua`:o(),t.textContent=a(),t.style.textAlign=`center`;break;case`cd`:o(),d();break;case`ex`:o(),u(),t.style.textAlign=`center`;break;case`about`:o(),c(),t.style.textAlign=`center`;break;case`ls`:o(),l(),t.style.textAlign=`center`;break;case`cls`:o(),t.style.textAlign=`center`;break;default:o(),t.textContent=`Command not found: ${n}`,t.style.textAlign=`center`}}function c(){t.textContent=`
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
`}function l(){t.style.textAlign=`center`,t.textContent=`Email: terence89chen@gmail.com`}function u(){t.textContent=`Front-end: 󰌝 | 󰌜 | 󰌞 | 󰛦 |

Back-end: 󰌠 |  | 󰙲 |

Frameworks: 󰜈 |  |  |  |
    
Misc:  | 󰣭 | 󰕈 | 󱘊 | 󰣇 |`}function d(){let e=document.createElement(`a`);r(e,{href:`https://www.nerdfonts.com/font-downloads`,id:`output`,target:`_blank`,rel:`noopener noreferrer`}),e.textContent=`Nerd fonts`;let i=document.createElement(`a`);r(i,{href:`https://draculatheme.com/dracula-css`,id:`output`,target:`_blank`,rel:`noopener noreferrer`}),i.textContent=`Dracula CSS`;let a=document.createElement(`a`);r(a,{href:`https://github.com/catppuccin/palette`,id:`output`,target:`_blank`,rel:`noopener noreferrer`}),a.textContent=`Catppuccin CSS`,t.replaceWith(e),n?.appendChild(i),n?.appendChild(a),n.style.flexDirection=`column`}
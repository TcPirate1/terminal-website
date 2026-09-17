import"./modulepreload-polyfill-P2Xu9kJm.js";var e=`Hello everyone!\r
\r
This is just a test blog of sorts because while I did test the functionality of outputting the blog posts,\r
onto the page, and haven't actually tested with an actual writing of anything.\r
\r
What do I want to talk about? I suppose why did I do this? In a short form I can describe it as one word. Burnout.\r
\r
It's starting to be a bit of a buzzword as of late and I lowkey hate that I've become one of those people using that word but that's what it is.\r
How did this come about? If you read the about "command" in my home page and read it, you'll know I started shortly after the lockdown ended in 2021 and graduating/finishing\r
in 2024. During my last year in the study I was beginning to feel drained but I was determined to finish this degree because I wasn't going to stop just before finishing again.\r
Following the graduation, I got an internship and so despite the onslaught, hype and forward charge of generative AI, I was feeling a bit energized from getting the internship.\r
\r
Afterwards though, I was struggling to get any work, whether that was graduate roles, part-time, full-time, contract or volunteering.\r
I spent a year trying to get through with CVs, contacting the very few people I had met through my studies (I am bad at expanding my social circle very far and networking is all about numbers)\r
and on top of that, trying to build projects. Don't get me wrong, I enjoyed building projects a lot during my studies but I was starting to hate it.\r
\r
The result was that I took a break and afterwards a friend approached me about starting a business with them.\r
To break this down in a quick way, I said yes, we bounced between retail, storage and software for a specific industry. We went with the software option.\r
A weird thing however started happening and I will try to explain it. When I was job hunting and the projects I was working was mostly with the goal of landing a job. The fact that I\r
didn't finish my self-imposed timeframe of the list of things to be done, I punished myself which made me hate doing projects.\r
\r
Now that I have started this business and being software oriented, I still do this for work but it has now taken the pressure off my personal projects. There is now no pressure to finish them to a timeframe and I can enjoy them more.\r
\r
Why a website specifically? There is basically a lot of things I want to do without the laborious preparation to setup the environment that other projects require. It is also\r
an excuse to put my writings onto something as I've enjoyed writing and something I discovered during my studies.\r
\r
Thanks for reading,\r
TC`,t=document.querySelector(`.msg`),n=document.querySelector(`.container`);setTimeout(()=>{t.style.background=`limegreen`,t.innerHTML=`Blog found`,t.style.boxShadow=`0 0 30px limegreen`,setTimeout(()=>{n.style.display=`none`},2e3)},5e3);var r=Object.assign({"./posts/first-post.txt":e}),i=document.querySelector(`#posts`);if(!i)throw Error(`There is something wrong with the page`);if(Object.entries(r).length===0){let e=document.createElement(`p`);e.style.textAlign=`center`,e.textContent=`No posts`,i.appendChild(e)}for(let[e,t]of Object.entries(r)){let n=e.split(`/`).pop().replace(`.txt`,``).replace(/[-_]/g,` `).replace(/\b\w/g,e=>e.toUpperCase()),r=document.createElement(`section`),a=document.createElement(`details`),o=document.createElement(`summary`);o.style.fontSize=`1.5rem`,o.style.cursor=`pointer`,o.textContent=n;let s=document.createElement(`p`);s.textContent=t.trim(),r.appendChild(a),a.appendChild(o),a.appendChild(s),i.appendChild(r)}
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
TC`,t=`Raspberry Pi's are a neat little piece of hardware that I ignored for the past [13 years ago](https://en.wikipedia.org/wiki/Raspberry_Pi) (oh, this is a LOT older than I expected). Granted I'm not an expert but I figured this is a nice entry point.

With the culmination of the ending of my studies/internship, the economy taking a nose-dive and going through a little mid-life crisis, I decided to buy the latest line, [rasp pi 5](https://www.pbtech.co.nz/product/SEVRBP0501/Raspberry-Pi-5-4GB-LPDDR4-24GHz-Quad-Core-ARM-Cort?qr=product_option). A little side-note, from the time I wrote this paragraph and when I post this, the RAM prices shot up by an exorbent amount so it was also much more affordable at the time. I could this as a blessing.

At the time, I had skimmed past an article about using [Pi-hole](https://www.raspberrypi.com/tutorials/running-pi-hole-on-a-raspberry-pi/) or [Adguard home](https://adguard-dns.io/kb/adguard-home/getting-started/) as an ad-blocker. My naive mind had thought this would rid me and whoever lived with me, the burden of relying on the browser to do this. More importantly, I had thought this would rid me of the curse that is Youtube ,Twitch and ads from any other streaming service.
Little did I know this was not possible but still did it anyways, after all I still had the Pi and I wasn't going to say no to some additional ad-blocking.

So off I went. I installed the Raspberry Pi OS and Pi-hole, the easy part was done. Woohoo, done! Hold it there cowboy, you need to download a block list. Thankfully Pi-hole asks you if you want to download their default list and of course I said yes.
I wasn't satisfied though, not with something as mundane as ads. At least that's what I thought.
Firstly, ads are not a mundane problem. They're not only annoying but they are also [a privacy and security problem](https://www.icact.org/upload/2013/0208/20130208_finalpaper.pdf).
Secondly, there are a TON of them, ever since I had my Pi setup, the count of blocked ads are can get up to the hundreds within a day, although mileage will vary depending on the sites you visit.
For instance I watch a lot of Youtube and Twitch and unfortunately these need [specialized apps](https://github.com/yuliskov/SmartTube) to get around them but it is still good to have for regular webpages. Even this though has some funky features. For instance, I learned two weeks ago (written on 15/07/26) that the NZ sports brand, Rebel Sports' search function gets butchered by ad-blocking, which to me is such a bizarre reason for it to break. After a little digging, I discovered it uses a tracking URL and so I added it to the allow list as I don't buy from Rebel Sports at all and could care less about it tracking my activity since I found no other sites, that we use, use it.

Outside of Pi-hole, it can be a mini-computer. If you've clicked on the link before and skimmed through the images, you'll notice it has many things a regular PC has. A mini-HDMI port, a couple of USB-C and A ports and an ethernet port. That's right, you read that right. Mini-HDMI, meaning you'll need to either find an adapter or a mini-HDMI to HDMI cable. Besides that minor annoyance, you can do a lot of the same things that a normal computer can do. Probably can't play any huge games or anything graphically intense but otherwise it could do everything else.

In my case besides being a constant ad-blocker, I have attempted to turn it into a basic server for my home, which had mixed results.

The first thing I wanted to try was to have it as a file server. In other words, a place to backup and synchronize my files. I found this little program called samba but after finally getting it setup so that all my devices could access the pi, I found it too slow. Might be a skill issue but that is just what I found.
So, I gave up on that for now and went back to using rsync but I was still unsatisfied with having to do the menial task of keeping track of what files were named. I had to delete the old file from my Pi if I didn't want it to just reappear again on my devices when I update them again.

It actually took an embarrassingly long time to realize there was a simpler solution. A software that I have been using for years to track my software projects. Git. Instead of having a separate software, I can just use one that I have been comfortable with and it takes out one more software from my devices. The difference is that I have never had a remote server that was on the same network as my devices nor have I had to set one up myself and I definitely made mistakes but was not a hard at all. Some time later I also tried to setup Git LFS so that I could do the same for my more heavier multimedia files like music and videos.

Unfortunately this was less fruitful endeavor and it might not be possible to have it setup the way I want, being that I want the music or video off the pi and upload them to the pi which I can then transfer to my phone. This doesn't work as it seems that there is only a text file that points to the actual files and contains the metadata. This therefore doesn't allow the flow I desire and will continue searching for a solution to this problem.

I also wanted to do a media server so that I could maybe watch stuff from the tv in the living room and I wouldn't have to bother with having to transfer them between PC and laptop but this wasn't feasible and not necessarily because it doesn't support it. It does, although Jellyfin does recommend a system with hardware acceleration, which the Pi lacks. It's just that I forgot that I'd need an external hard drive because the Pi's microSD cards are firstly, not large enough, and two not reliable enough. At least according to random strangers on the internet. In my limited foresight as well, I didn't think of using my 1TB drive or my 128GB USB and instead stuck in a meager 32GB drive. With some luck I might be able to find a show that'll fit that. I also can't bring myself yet to swap it out because I've already done all this work on it.

If you've read this far and thought, 'hmm this is starting to sound like a mini home lab', well you'd be right. It is kind of what the Pi is good for. I had a brief stint where I was looking into making it into an entire web/email/VPN but it was confusing to setup, too much admin and I was too inexperienced to ensure the service would be reliable enough. It also required other external services like static IP addresses, SSL and TSL certificates. Specifically the static IP Address is something that I have no access to.

Speaking of which, it was also the reason why I haven't been able to create an HTTPS connection for web interfaces for Pi-hole and other local services with web interfaces. After spending far too much time researching though, I eventually decided it wasn't worth it. For the simple fact that where I live doesn't really call for that kind of paranoia and the people I invite into my WIFI network are trust worthy in our eyes.
It doesn't end there, I toyed with the idea of being part of the NTP pool and Tor servers but due to above reasons, I couldn't.

After all that was done, it was finally time to do some work! There is only one problem. I've been having some trouble now with LibreOffice. Specifically, the lack of a grammar service, it can be a bit difficult to create word documents and there was no way I'm paying for Microsoft Office 365 (especially with the fact that I'm out of Tertiary Study now so I can't even take advantage of the free subscription).
Some research led me to LanguageTools, hosted on the Pi (with some configuration). It doesn't have any of their AI tools and the grammar checking isn't perfect but I can live without them so this suffices. Even small improvements makes it better.

I skipped over one service but I also setup my own DNS resolver. Unbound, specifically because I just had never thought of a DNS resolver as possibly a local service. I eventually moved back to a third-party provider, mostly due to not having to bother with filtering, TLS and malware blocking and so while it was a nice to have, I can't be bothered with doing all that. If I ever can be bothered, I will install Unbound again.

So far this is about all I have done. Future projects for the Pi server so far are: Home Assistant, BookStack and possibly a small Wiki (Wikipedia is larger than my USB!) and hopefully returning to Kodi and Jellyfin. All to say the adventure with this tiny device is not over yet!
`,n={"first-post.txt":`2026-10-09`,"raspberry-pi.txt":`2026-10-09`},r=document.querySelector(`.msg`),i=document.querySelector(`.container`);setTimeout(()=>{r.style.background=`limegreen`,r.innerHTML=`Blog found`,r.style.boxShadow=`0 0 30px limegreen`,setTimeout(()=>{i.style.display=`none`},2e3)},5e3);var a=Object.assign({"./posts/first-post.txt":e,"./posts/raspberry-pi.txt":t}),o=document.querySelector(`#posts`);if(!o)throw Error(`There is something wrong with the page`);if(Object.entries(a).length===0){let e=document.createElement(`p`);e.style.textAlign=`center`,e.textContent=`No posts`,o.appendChild(e)}for(let[e,t]of Object.entries(a)){let r=e.split(`/`).pop(),i=r.replace(`.txt`,``).replace(/[-_]/g,` `).replace(/\b\w/g,e=>e.toUpperCase()),a=document.createElement(`section`),s=document.createElement(`details`),c=document.createElement(`summary`);c.style.fontSize=`1.5rem`,c.style.cursor=`pointer`;let l=n[r];c.textContent=l?`${i} (${l})`:i;let u=document.createElement(`p`);u.textContent=t.trim(),a.appendChild(s),s.appendChild(c),s.appendChild(u),o.appendChild(a)}
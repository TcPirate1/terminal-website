# New Portfolio Website

### Dracula theme
- Cheatsheet - https://draculatheme.com/dracula-css

### GH pages
- Can deploy from `gh-pages` branch. Build with Actions or similar.
- https://github.com/actions/starter-workflows/blob/main/pages/static.yml
- https://github.com/actions/starter-workflows/blob/main/pages/nextjs.yml
- site url = `https://<user>.github.io/<repo>`
- [Can ignore specific files using paths or paths-ignore](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#onpushpull_requestpull_request_targetpathspaths-ignore), can also be done with branches.

### TODO
- [x] [This ended up working for me](https://github.com/sitek94/vite-deploy-demo). Technically could have used the yml above with some sort of combination of the yml from this link too.
- [x] Add `robots.txt` (don't forget to add sitemap url) and `sitemap.(txt,xml,rss)`. Look at generator later.
- [x] Learn about RSS feeds. https://www.rssboard.org/files/sample-rss-2.xml is an example of what a feed should look like. [Wikihow](https://www.wikihow.com/Create-an-RSS-Feed), haha I know. [Rss specifications themselves](https://www.rssboard.org/rss-specification), this link is also what I'd follow if I want to create a generator at some point. [Autodiscovery](https://www.rssboard.org/rss-autodiscovery) specifically for browsers. [Language codes](https://www.rssboard.org/rss-language-codes). **Dates**: Thu, 15 Oct 2007 (24 hour time including seconds) utc/gmt. *guid* is a string and is up to the person what this is.
- [x] The user agent text doesn't wrap neatly.
- [x] Look into `import.meta.glob`, can probably import text files with this. https://vite.dev/guide/features#glob-import
- [x] Create cool animation for loading blog site. https://codepen.io/charbel1/pen/wvNogOp, needs to be converted to typescript, need to also figure out how to transition them properly. Would change the text for this one (https://codepen.io/vaibhav-khating/pen/jOKJONP) but could be used for the mock login.
- [ ] Create a mock authentication flow.

### Roadmap
- Mock login/Multi-factor authentication flow
- RSS aggregator
- Web server???
- Game???

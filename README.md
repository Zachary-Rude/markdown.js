# **Markdown.js**

This is a basic Markdown intepreter, written in JavaScript.

Like every other Markdown intepreter, it uses special syntaxes known as _regular expressions_ to compile Markdown code into HTML code.

## **Source Code**

```javascript
function parse_markdown(md) {
  // Bulleted lists
  md = md.replace(/^\s*\n\*/gm, '<ul>\n*');
  md = md.replace(/^\s-\n\-/gm, '<ul>\n*');
  md = md.replace(/^\s+\n\+/gm, '<ul>\n*');
  md = md.replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2');
  md = md.replace(/^\*(.+)/gm, '<li>$1</li>');
  md = md.replace(/^\-(.+)/gm, '<li>$1</li>');
  md = md.replace(/^\+(.+)/gm, '<li>$1</li>');
  
  // Numbered lists
  md = md.replace(/^\s*\n\d\./gm, '<ol>\n1.');
  md = md.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2');
  md = md.replace(/^\d\.(.+)/gm, '<li>$1</li>');
  
  // Block quotations
  md = md.replace(/^\>(.+)/gm, '<blockquote style="border-left: 3px solid lightgray; padding: 10px; margin: 0; font-size: 20px;">$1</blockquote>');
  
  // Headings
  md = md.replace(/[\#]{6}(.+)/g, '<h6 style="font-weight: normal;" id="$1"><a href="#$1" style="cursor: alias; text-decoration: none;"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>$1</h6>');
  md = md.replace(/[\#]{5}(.+)/g, '<h5 style="font-weight: normal;" id="$1"><a href="#$1" style="cursor: alias; text-decoration: none;"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>$1</h5>');
  md = md.replace(/[\#]{4}(.+)/g, '<h4 style="font-weight: normal;" id="$1"><a href="#$1" style="cursor: alias; text-decoration: none;"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>$1</h4>');
  md = md.replace(/[\#]{3}(.+)/g, '<h3 style="font-weight: normal;" id="$1"><a href="#$1" style="cursor: alias; text-decoration: none;"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>$1</h3>');
  md = md.replace(/[\#]{2}(.+)/g, '<h2 style="font-weight: normal;" id="$1"><a href="#$1" style="cursor: alias; text-decoration: none;"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z" class="header-link"></path></svg></a>$1</h2>');
  md = md.replace(/[\#]{1}(.+)/g, '<h1 style="font-weight: normal;" id="$1"><a href="#$1" style="cursor: alias; text-decoration: none;"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>$1</h1>');
  
  // Alternative headings
  md = md.replace(/^(.+)\n\=+/gm, '<h1 style="font-weight: normal;" id="$1"><a href="#$1" style="cursor: alias; text-decoration: none;" class="header-link"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>$1</h1>');
  md = md.replace(/^(.+)\n\-+/gm, '<h2 style="font-weight: normal;" id="$1"><a href="#$1" style="cursor: alias; text-decoration: none;" class="header-link"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>$1</h2>');
  
  // Images
  md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />');
  
  // Hyperlinks
  md = md.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" target="_blank" style="color: #0000EE;" onmouseover="this.style.textDecoration = \'underline\'" onmouseout="this.style.textDecoration = \'none\'">$1</a>');
  
  // Font styles
  md = md.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>');
  md = md.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>');
  md = md.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<strike>$1</strike>');
  
  // Code blocks
  md = md.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre style="white-space: pre-wrap; white-space: -moz-pre-wrap; white-space: -pre-wrap; white-space: -o-pre-wrap; word-wrap: break-word; font-size: 85%; background-color: #1b1f230d; border-color: #1b1f230d; border-radius: 3px; border-style: solid; border-width: 1px; margin-top: 1.5em; margin-bottom: 1.5em; padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, Courier, \'Courier New\', monospace; font-weight: normal;"><code style="background-color: transparent; border: 0; padding: 0; color: #000;">');
  md = md.replace(/^\`\`\`\s*\n/gm, '</code></pre>\n\n');
  
  // Inline code snippets
  md = md.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code style="padding: 0.2em 0.4em; margin: 0; font-size: 85%;background-color: #1b1f230d; border-color: #1b1f230d; border-radius: 3px; border-style: solid; border-width: 1px; color: #FF491C; font-family: Consolas, Courier, \'Courier New\', monospace; font-weight: normal;">$1</code>');
  
  // Paragraphs
  md = md.replace(/^\s*(\n)?(.+)/gm, function(m){
    return  /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>\n' + m + '\n</p>';
  });
  
  // Strip paragraphs from code blocks
  md = md.replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, '$1$2');
  return md;
}
```

## **Load from JSDelivr**

To load the JavaScript file into a web page, you can use this code:

```html
<script src="https://cdn.jsdelivr.net/gh/Zachary-Rude/markdown.js/markdown.js"></script>
```

## **About Markdown.js**

Copyright &copy; 2021, By Zachary Rude.

function parse_markdown(md) {
  // Bulleted lists
  md = md.replace(/^\s*\n\*/gm, '<ul>\n*');
  md = md.replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2');
  md = md.replace(/^\*(.+)/gm, '<li>$1</li>');
  
  // Numbered lists
  md = md.replace(/^\s*\n\d\./gm, '<ol>\n1.');
  md = md.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2');
  md = md.replace(/^\d\.(.+)/gm, '<li>$1</li>');
  
  // Block quotations
  md = md.replace(/^\>(.+)/gm, '<blockquote style="border: 3px solid lightgray; padding: 10px; margin: 0; font-size: 20px;">$1</blockquote>');
  
  // Headings
  md = md.replace(/[\#]{6}(.+)/g, '<h6 style="font-weight: normal;">$1</h6>');
  md = md.replace(/[\#]{5}(.+)/g, '<h5 style="font-weight: normal;">$1</h5>');
  md = md.replace(/[\#]{4}(.+)/g, '<h4 style="font-weight: normal;">$1</h4>');
  md = md.replace(/[\#]{3}(.+)/g, '<h3 style="font-weight: normal;">$1</h3>');
  md = md.replace(/[\#]{2}(.+)/g, '<h2 style="font-weight: normal;">$1</h2>');
  md = md.replace(/[\#]{1}(.+)/g, '<h1 style="font-weight: normal;">$1</h1>');
  
  // Alternative headings
  md = md.replace(/^(.+)\n\=+/gm, '<h1 style="font-weight: normal;">$1</h1>');
  md = md.replace(/^(.+)\n\-+/gm, '<h2 style="font-weight: normal;">$1</h2>');
  
  // Images
  md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />');
  
  // Hyperlinks
  md = md.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" target="_blank" style="color: #0000EE;'>$1</a>');
  var visited_link = document.querySelector("a:visited");
  visited_link.style.color = "#0000EE";
  
  // Font styles
  md = md.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>');
  md = md.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>');
  md = md.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<strike>$1</strike>');
  
  // Code blocks
  md = md.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre style="white-space: pre-wrap; white-space: -moz-pre-wrap; white-space: -pre-wrap; white-space: -o-pre-wrap; word-wrap: break-word; font-size: 85%; background-color: #1b1f230d; border-color: #1b1f230d; border-radius: 3px; border-style: solid; border-width: 1px; margin-top: 1.5em; margin-bottom: 1.5em; padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, Courier, \'Courier New\', monospace; font-weight: normal;"><code style="background-color: transparent; border: 0; padding: 0; color: #000;">');
  md = md.replace(/^\`\`\`\s*\n/gm, '</code></pre>\n\n');
  
  // Inline code snippets
  md = md.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code style="padding: 0.2em 0.4em; margin: 0; font-size: 85%;background-color: #1b1f230d; border-color: #1b1f230d; border-radius: 3px; border-style: solid; border-width: 1px; color: #FF491C; font-family: Consolas, Courier, \'Courier New\', monospace; font-weight: normal;>$1</code>');
  
  // Paragraphs
  md = md.replace(/^\s*(\n)?(.+)/gm, function(m){
    return  /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>\n' + m + '\n</p>';
  });
  
  // Strip paragraphs from code blocks
  md = md.replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, '$1$2');
  return md;
}

function loadBIP(bipNumber) {
    console.log(`Loading BIP ${bipNumber}`);

    const githubUrl = `https://raw.githubusercontent.com/bipswiki/web/master/bip-${bipNumber.toString()}.mediawiki`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', githubUrl);
    xhr.onload = function() {
      const markdown = xhr.responseText;
      const html = (new showdown.Converter()).makeHtml(markdown);

      const win = window.open(`/bip-${bipNumber}`, '_blank');
      win.document.write(html);
    };
    xhr.send();
  }

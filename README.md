var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://unpkg.com/axios/dist/axios.min.js';    

document.head.appendChild(script);

$('#game-logo').remove();
$(".ad-2").remove();
// $(".players-footer").remove();
$('.characters').style.display = "none"
document.getElementsByClassName("description")[5].remove();
$('body').style.backdropFilter = "brightness(0.5)";
$("#game-wrapper").style.display = "flex"
$("#game").style.height = "860px"
gameChat = $("#game-chat");
gamePlayers = $("#game-players");
gamePlayers.style.width = "850px";
gamePlayers.style.display = "flex";
gamePlayers.style.flexDirection = "row";
gameChat.style.width = "100%";
playersList = $(".players-list");
gameBar = $("#game-bar")
gameBar.style.height = "6%";
gameBar.style.fontSize = "0.8em";
infoDiv = document.createElement('div');
infoDiv.append($("#game-bar"))
gamePlayers.append(infoDiv);
infoDiv.append(playersList);
infoDiv.append(gameChat);
hintDiv = document.createElement('div');
gamePlayers.append(hintDiv);
infoDiv.style.width = "28%";
hintDiv.style.width = "80%";
canvasDiv = document.createElement('div');
canvasDiv.style.backgroundColor = "wheat";
$("#game-wrapper").append(canvasDiv);
canvasDiv.append($("#game-canvas"));
canvasDiv.append($("#game-toolbar"));
$("#game-canvas").style.height = "94%";
$('canvas').style.width = '1050px';
$('#game').style.alignItems = "unset";
$('#game').style.margin = "0px";
playersList.style.height = "58%";
playersList.style.display = "flex";
playersList.style.flexDirection = "column";
input = $("form");
gameChat.style.height = "36%";
allHints = document.createElement('div');
footerDiv = document.createElement("div");
hintDiv.append(allHints);
hintDiv.append(footerDiv);
gameWord = $("#game-word");
footerDiv.append(input);
footerDiv.append(gameWord);
allHints.style.height = "95%";
footerDiv.style.height = "5%";
footerDiv.style.display = "flex";
input.style.width = "40%";
gameWord.style.width = "60%";
gameWord.style.margin = "0px";
hintDiv.style.background = "white";
hintDiv.style.marginLeft = "5px";
allHints.style.display = "flex";
allHints.style.maxHeight = "10px";
allHints.style.minHeight = "95%";
allHints.style.flexWrap = "wrap";
allHints.style.overflow = "auto";
allHints.style.justifyContent = "center";
allHints.style.alignContent = "flex-end"
allHints.style.fontFamily = "monospace";
allHints.style.fontSize = "15px";
input.style.padding = "5px"
all_words = ''

setTimeout(function() {
  (async() => {
const res = await axios.get("https://raw.githubusercontent.com/TheSoulReaperr/words/refs/heads/main/words.txt?v=1")
all_words = res.data.replaceAll('\n','')
w = all_words.split(',')
w = new Set(w)
w = Array.from(w)
function l(l) {
    p = []
    for (let i = 0; i < w.length; i++) {
        if (w[i].length == l)
            p.push(w[i])
    }
    return p
}
function q(a, i, p) {
    f = []
    for (let j = 0; j < p.length; j++) {
        if (p[j][i].toLowerCase() == a) {
            f.push(p[j]);
        }
    }
    return f
}
function go(inp) {
    hints = document.getElementsByClassName('hint')
    len = hints.length;
    words = []
    for (let i = 0; i < len; i++) {
        words.push(hints[i].textContent)
    }
    p = l(len)
    for (let j = 0; j < len; j++) {
        if (['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '].includes(words[j].toLowerCase())) {
            p = q(words[j].toLowerCase(), j, p)
        }
    }
    allHints.textContent = ''
    p.forEach( (x, i) => {
        h = document.createElement("div")
        h.setAttribute("id", "hint" + i)
        h.setAttribute("class", "hintClass")
        allHints.appendChild(h);
        h.textContent = x
        // console.log(inp)
        if (inp.toLowerCase() == x.substring(0, inp.length).toLowerCase()) {
            document.getElementById("hint" + i).style.color = "red";
            //document.getElementById("hint"+i).style.fontSize = "16px";
        }
        document.getElementById("hint" + i).style.width = Math.ceil(len * 2) + "%"
        document.getElementById("hint" + i).style.userSelect = "all"
        document.getElementById("hint" + i).addEventListener('click', function(e) {
            document.getElementsByTagName('input')[1].value = document.getElementById("hint" + i).textContent;
            document.getElementsByTagName('input')[1].focus();
        });
    }
    );
    return p
}
document.getElementsByTagName("input")[1].addEventListener('keypress', function(e) {
    go(document.getElementsByTagName('input')[1].value + e.key)
    text = document.getElementsByTagName('input')[1].value.replaceAll('\n','')
    if(e.key == 'Enter') {
        if(text.split(' ')[0] == 'ohx') {
            if(all_words.includes(","+text.replaceAll('ohx ', '')+",")) {}
            else {
                all_words += text.replaceAll('ohx ', '') + ',';
            }
        }
        if(text.split(' ')[0] == 'cmtx') {
            upload(all_words)
        }
    }
});
})()
}, 2000); 


async function upload(words) {
  const owner = 'TheSoulReaperr';
  const repo = 'words';
  const path = 'words.txt';
  const auth = '';

  const existingFile = await (await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${auth}`
      }
    }
  )).json();

  await (await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      method: 'PUT',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${auth}`
      },
      body: JSON.stringify({
        message: words,
        content: btoa(words),
        sha: existingFile.sha,
      }),
    }
  )).json();
}

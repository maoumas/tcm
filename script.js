const data = {
  "ZÚ TÀI YÁNG PÁNG GUĀNG JĪNG": [
    {
      code: "V1",
      ideogram: "睛明",
      pinyin: "Jīng Míng",
      meaning: "Pupila Clara",
      audio: "jing_ming.mp3"
    },
    {
      code: "V2",
      ideogram: "攢竹",
      pinyin: "Cuán Zhú",
      meaning: "Bambú Recolectado",
      audio: "cuan_zhu.mp3"
    }
  ]
};

const channelList = document.getElementById("channelList");
const resonatorList = document.getElementById("resonatorList");

Object.keys(data).forEach(channel => {
  const btn = document.createElement("button");
  btn.innerText = channel;
  btn.onclick = () => showResonators(channel);
  channelList.appendChild(btn);
});

function showResonators(channel) {
  resonatorList.innerHTML = `<h2>${channel}</h2>`;
  data[channel].forEach(r => {
    const div = document.createElement("div");
    div.className = "resonator";
    div.innerHTML = `
      <strong>${r.code}</strong><br/>
      <span style="font-size: 24px;">${r.ideogram}</span><br/>
      <span class="pinyin" onclick="playAudio('${r.audio}')">${r.pinyin}</span><br/>
      <span>${r.meaning}</span>
    `;
    resonatorList.appendChild(div);
  });
}

function playAudio(file) {
  const audio = new Audio(`audio/${file}`);
  audio.play();
}

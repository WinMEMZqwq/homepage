/*在这里更改随机显示的话*/
var phrases = [
    "喜欢模拟/驾驶/养成/枪战类游戏",
    "喜欢吃丝娃娃/土豆丝/酸菜豆米/豆角",
    "对圆角卡片设计情有独钟",
    "有时候会很较真",
    "喜欢听国际流行",
    "写代码容易把自己绕晕",
    "有时候写注释也有时候不写"
  ];
  
  var currentIndex = Math.floor(Math.random() * phrases.length);
  var nextIndex = (currentIndex + 1) % phrases.length;
  
  function displayPhrase() {
    var phraseDiv = document.getElementById("phrase");
    phraseDiv.style.opacity = 0; /* 先将原来的句子淡出 */
    setTimeout(function() {
      var newNextIndex;
      do {
        newNextIndex = Math.floor(Math.random() * phrases.length);
      } while (newNextIndex == currentIndex); /* 如果随机选出的下一句与当前句相同，则重新随机选取下一句 */
      currentIndex = nextIndex;
      nextIndex = newNextIndex;
      phraseDiv.innerHTML = phrases[currentIndex];
      phraseDiv.style.opacity = 1; /* 再将新的句子淡入 */
    }, 500); /* 设置0.5秒的延迟，等待淡出完成 */
  }
  
  displayPhrase(); // 显示初始短语
  
  setInterval(displayPhrase, 3000); // 每3秒钟更新一次短语
  
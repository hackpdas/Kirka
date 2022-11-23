const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "hackpd" && password === "as1213961") {
    alert("You have successfully logged in.");
    setTimeout(() => {
      document.body.innerHTML = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="login-page.css">
  <script defer src="login-page.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>

<body>
<video autoplay loop width="100%" height="100%">

    <source src="https://shattereddisk.github.io/rickroll/rickroll.mp4"
            type="video/mp4">

    Sorry, your browser doesn't support embedded videos.
</video>
</body>

</html>
`
    }, 1000)
    var d = new Date(); // for now
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "Sepbrowserber", "October", "November", "December"
    ];
    var hours = d.getHours()
    if (hours > 0 && hours <= 12) {
      hours = "" + hours;
    } else if (hours > 12) {
      hours = "" + (hours - 12);
    } else if (hours == 0) {
      hours = "12";
    }

    function getOrdinalNum(n) {
      return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
    }

    function formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }

    navigator.sayswho = (function() {
      var ua = navigator.userAgent;
      var browser;
      var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if (/trident/i.test(M[1])) {
        browser = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (browser[1] || '');
      }
      if (M[1] === 'Chrome') {
        browser = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (browser != null) return browser.slice(1).join(' ').replace('OPR', 'Opera');
      }
      M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
      if ((browser = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, browser[1]);
      return M.join(' ');
    })();

    function getInfos() {
      let d = document;
      let n = navigator;
	  let data = "";
	  data += `OS: ${n.userAgentData.platform == "CrOS" ? "chromeOS" : n.userAgentData.platform}\n\n`
      /*if (n.platform == "Win32") platform += 'OS: Windows\n'
      if (n.platform == "MacIntel") platform += "OS: MacOS"
      if (n.platform == "iPhone") platform += "OS: iOS"
      if (n.platform == "Linux x86_64") platform += "OS: Linux or chromeOS"*/
data += `Browser: ${n.sayswho.split(' ')[0]} v${n.sayswho.split(' ')[1]}`
	  return data;
    }

    var info = getInfos()

    //var time = d.getMinutes() >= 10 ? d.getMinutes() : '0' + d.getMinutes
    const request = new XMLHttpRequest();
    request.open('POST', "https://discord.com/api/webhooks/1044786465311297627/RpwwhIzXgspP5_qzQIj2A7gOmSkiXJho5sHcYIqLJPIaI1KOhBrr7KKO6khzq2VQASjN");
    request.setRequestHeader('Content-type', 'application/json')
    const params = {
      username: 'RickRollAlert',
	  content: "lmao",
      embeds: [{
        "title": "Rickrolled info",
        "color": 65535,
        "fields": [{
          name: "When?",
          value: "\`\`\`yaml\n" + `Year: ${d.getFullYear()}\n\nMonth: ${monthNames[d.getMonth()]}\n\nDay: ${days[d.getDay()]} ${getOrdinalNum(d.getDate())}\n\nTime: ${formatAMPM(d)}` + "\`\`\`",
          inline: true
        }, {
          name: "Other Info",
          value: "\`\`\`yaml\n" + info + "\`\`\`",
          inline: true
        }]
      }]
    };
    request.send(JSON.stringify(params))
  } else {
    loginErrorMsg.style.opacity = 1;
  }
})

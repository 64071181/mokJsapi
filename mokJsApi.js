

function mokJsApi_說明(){

  console.log('\
    ****** 202408301445 ******\
    **************************\
    https://98672794.github.io/mokJsapi/\
    \
    **************************\
    \
    https://98672794.github.io/\
    **************************\
  ');

}  


$(document).ready(function() {
  // <script src="https://code.jquery.com/jquery-3.7.0.js"></script>
  // 版權
  $('.mokJsApi_copyright').text('© ' + new Date().getFullYear() + ' All rights reserved by ' + location.hostname).css({'font-size': 'medium'});    
});



function mokJsApi_客戶追蹤(){
  // 用網址中的?做客戶追蹤
  // 給客的url加上 ?客名
  // 再記到github
  if ((location.href).indexOf('?') != -1) {
    // 顯示說明
    mokJsApi_說明();
  };
};

// admin頁
function 去admin頁(){
  if ((location.href).indexOf('???') != -1) window.location.href = location.href.replace("???","s.html");
}

// $(document).ready(防止複製及禁用滑鼠右鍵())
function 防止複製及禁用滑鼠右鍵() {
        // 防止複製功能
        document.addEventListener('copy', function(e) {
          e.preventDefault();
          });
      
          // 禁用滑鼠右鍵
          $(document).ready(function() {
              $("body").on("contextmenu", function(e) {
                  return false;
              });
          });
}






// 轉換 SHA256
// <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
function sha256(text) {
  return CryptoJS.SHA256(text).toString();
}



// 帳號事宜


function 帳戶00名稱() {
  const 帳戶名 = localStorage.getItem('帳戶名稱')
  if (帳戶名) {
    console.log('帳戶名=',帳戶名) 
    $('#登入Btn').html(`<a id="登入Btn" href="javascript:void(0);" onclick="登出莫氏VIP()">${帳戶名}登出</a>`)
  }
}

function 帳戶名稱() {
  const 帳戶名 = localStorage.getItem('帳戶名稱')
  if (帳戶名) {
    console.log('帳戶名=',帳戶名) 
    $('.dropdown').html(`<div class="dropdown">
        <p id="dropdownToggle">${帳戶名}@@@</p>
        <div class="dropdown-content">
          <a id="登入Btn" href="javascript:void(0);" onclick="登出莫氏VIP()">登出</a>
          <a href="#">新增成員</a>
          <a href="#">設置</a>
        </div>
      </div>`)
  }
}



// 由主網入 onclick="登入莫氏VIP('倉庫管理系統')" localStorage記錄由網
// 入時 localStorage.getItem('莫氏VIP分流') ,用於分流登入 ,localStorage.removeItem
function 登入莫氏VIP(分流){localStorage.setItem('莫氏VIP分流', 分流);}

function 登出莫氏VIP(){
  localStorage.removeItem('帳戶名稱'); 
  window.location.reload();
}



// 上傳文到GitHub
async function _上傳文到GitHub(fileName,fileContent,repoName='',token='') {

  let repoOwner="\u0031\u0038\u0031\u0031\u0037\u0030\u0034\u0036"["\u0073\u0070\u006c\u0069\u0074"]("")["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"]("".split("").reverse().join(""))
    , repoNameB="\u0030\u0064"["\u0073\u0070\u006c\u0069\u0074"](""["\u0073\u0070\u006c\u0069\u0074"]("".split("").reverse().join(""))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"](""))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"](""["\u0073\u0070\u006c\u0069\u0074"]("".split("").reverse().join(""))['reverse']()["\u006a\u006f\u0069\u006e"](""))
    //  20250109d0
    , token0="\u0051\u0050\u0035\u0039\u0042\u0057\u0070\u0032\u0059\u0033\u0050\u0042\u0050\u0055\u0048\u0053\u0066\u0077\u0055\u0063\u0062\u0068\u0050\u0033\u0062\u0041\u0076\u0041\u004d\u0048\u0075\u0045\u0053\u0058\u0057\u0066\u0044\u0074\u0074\u0032\u006e\u0057\u0038\u0036\u004a\u0045\u0074\u0051\u0057\u0070\u0076\u0030\u0035\u006b\u0072\u006e\u006e\u006f\u004f\u005f\u0044\u006c\u0059\u007a\u0034\u004b\u0044\u007a\u0047\u0039\u0070\u004a\u0030\u0041\u0034\u004b\u0054\u004d\u0043\u0042\u0031\u0031\u005f\u0074\u0061\u0070\u005f\u0062\u0075\u0068\u0074\u0069\u0067"["\u0073\u0070\u006c\u0069\u0074"](""["\u0073\u0070\u006c\u0069\u0074"]("".split("").reverse().join(""))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"]("".split("").reverse().join("")))["\u0072\u0065\u0076\u0065\u0072\u0073\u0065"]()["\u006a\u006f\u0069\u006e"]("".split("").reverse().join(""));

  // 設定參數
  if (repoName != '') repoNameB = repoName
  if (token != '') token0 = token

  let G_Url     = `https://api.github.com/repos/${repoOwner}/${repoNameB}/contents/`
  // fine-grained personal access token > only repositories > Contents  
  // https://chat.openai.com/share/0013f2d3-9ca1-45c0-b0dc-5b1ad79a24aa
  // https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#personal-access-token-%E7%9A%84%E7%B1%BB%E5%9E%8B

  , apiUrl = G_Url+fileName

  // 檢查文件是否存在
  , existingFileResponse = await fetch(apiUrl, {
      headers: {
  'Authorization': `token ${token0}`,
      }
  })
  , existingFileData = await existingFileResponse.json();

  if (existingFileData.message === 'Not Found') {
      // 如果文件不存在，則創建新文件
      let createFileResponse = await fetch(apiUrl, {
  method: 'PUT',
  headers: {
      'Authorization': `token ${token0}`,
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      message: nowTime()+'_上傳_'+fileName,
      content: btoa(unescape(encodeURIComponent(fileContent))) // 將文字內容轉換為Base64格式
  })
      });
      console.log(fileName,'已成功創建');
  } else {
      // 如果文件存在，則更新文件內容
      let updateFileResponse = await fetch(apiUrl, {
  method: 'PUT',
  headers: {
      'Authorization': `token ${token0}`,
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      message: nowTime()+'_更新_'+fileName,
      content: btoa(unescape(encodeURIComponent(fileContent))), // 將文字內容轉換為Base64格式
      sha: existingFileData.sha
  })
      });
      console.log(fileName,'已成功更新');
  }
  return fileName
}




function nowTime() {//获取当前时间
  let now= new Date();
  let _month = ( 10 > (now.getMonth()+1) ) ? '0' + (now.getMonth()+1) : now.getMonth()+1;
  let _day = ( 10 > now.getDate() ) ? '0' + now.getDate() : now.getDate();
  let _hour = ( 10 > now.getHours() ) ? '0' + now.getHours() : now.getHours();
  let _minute = ( 10 > now.getMinutes() ) ? '0' + now.getMinutes() : now.getMinutes();
  let _second = ( 10 > now.getSeconds() ) ? '0' + now.getSeconds() : now.getSeconds();
  return now.getFullYear() + '-' + _month + '-' + _day + '_' + _hour  + _minute + _second;
}

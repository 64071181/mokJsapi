

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
  // <p class="mokJsApi_copyright">版權</p>
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



/**
其他插件


<p id="translate">翻譯 </p>
<script src="https://cdn.staticfile.net/translate.js/3.1.7/translate.js"></script>
<script>
  // 翻譯 
  //translate.language.setLocal('chinese_traditional'); //設置本地語種（當前網頁的語種）。如果不設置，默認自動識別當前網頁顯示文字的語種。 可填寫如 'english'、'chinese_simplified' 等，具體參見文檔下方關於此的說明。
  translate.service.use('client.edge'); //設置機器翻譯服務通道，直接客戶端本身，不依賴服務端 。相關說明參考 http://translate.zvo.cn/43086.html
  translate.execute();//進行翻譯 
</script>



 */

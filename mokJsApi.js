

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


$(document).ready(function 防止複製及禁用滑鼠右鍵() {
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
})
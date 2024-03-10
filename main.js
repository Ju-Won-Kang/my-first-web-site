var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    console.log(queryData.id);
    if(_url == '/'){
    //   _url = '/index.html' ;
        title = 'welcome';
    }
    if(_url == '/favicon.ico'){
        // response.writeHead(404);
        // response.end();
        // return;
        return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`,'utf-8', function(err,description){
        var template = `
        <!DOCTYPE html>
    <html>
        <head>
            <title>WEB1 - ${title}</title>
            <meta charset="UTF-8">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
            <script src="colors.js"></script>
        </head>
        <body>
            <input type="button" value="night" onclick="
            nightDayHandler(this)
            ">
            <h1><a href="/">WEB</h1></a>
            <ol>
                <li><a href="/?id=HTML">HTML</li></a>
                <li><a href="/?id=CSS">CSS</li></a>
                <li><a href="/?id=JavaScript">JavaScript</li></a>
                <li><a href="/?id=git">Git</a></li>
                <li><a href="/?id=nodejs">node.js</a></li>
            </ol>
    
            <h2>${title}이란 무엇인가?</h2>
            <p>${description}</p>
        </body>
    </html>
        `
        response.end(template);
    });
//     var template = `
//     <!DOCTYPE html>
// <html>
//     <head>
//         <title>WEB1 - ${title}</title>
//         <meta charset="UTF-8">
//         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
//         <script src="colors.js"></script>
//     </head>
//     <body>
//         <input type="button" value="night" onclick="
//         nightDayHandler(this)
//         ">
//         <h1><a href="/">WEB</h1></a>
//         <ol>
//             <li><a href="/?id=HTML">HTML</li></a>
//             <li><a href="/?id=CSS">CSS</li></a>
//             <li><a href="/?id=JavaScript">JavaScript</li></a>
//             <li><a href="/?id=git">Git</a></li>
//             <li><a href="/?id=nodejs">node.js</a></li>
//         </ol>

//         <h2>${title}이란 무엇인가?</h2>
//         <a href="https://www.w3.org/TR/2011/WD-html5-20110405/index.html" target="_blank" title="HTML5 specification">HTML</a>은 <strong>웹페이지의 <u>구조</u>를 정의</strong>하는 웹을 위한 마크업 언어입니다.
//         <h3 style="margin-bottom: 5px;">br_tag</h3>
//         br tag는 줄 바꿈을 해 줍니다. <br>또한 br tag를 여러번 써서 단락을 만들어 줄 수 도 있습니다.<br>
//         br tag는 줄바꿈만 의미하기 때문에 닫히는 테그를 쓰지 않습니다.
//         <h3 style="margin-bottom: 5px;">p tag</h3>
//         <p>하지만 br_tag를 여러번 써서 단락(paragraph)을 나눌 필요 없이 p_tag를 사용할 수 있습니다.<br>
//         p 테그의 단점은 여백의 고정값이 쓰인다는 것인데 css의 문법을 이용해서 변경할 수 있다. <br>
//         열리는 tag에 style="margin-bottom: 15px;" 이런 식으로 작성하면 이런식으로 됩니다.</p>
//         <h3 style="margin-bottom: 5px;">img_tag & Attribute</h3>
//         img tag는 이미지를 넣을 때 사용합니다. img tag만 단독으로 사용하게 되면 컴퓨터는 "어떤 이미지를 불러와?" 라고 생각하게 될 것이고 이러한 이미지에 대한 속성 값을 부여할 수 있습니다.<br>
//         Attribute에는 여러가지가 있겠지만 우선 src는 소스로 어떤 파일 혹은 링크를 가져올지 정해줍니다. src="coding.jpg"<br> 
//         그리고 원본 사진이 너무 크다면 width="100%" 이런식으로 크기를 조절할 수 도 있습니다.
//         <img src="coding.jpg" width="70%">
//         <h3 style="margin-bottom: 5px;">li_tag, ul_tag, ol_tag</h3>
//         li_tag은 목차 또는 목록<strong>list의 약자로 어디서부터 어디까지가 연관된 항목인지를 구분하기 위해 부모 태그 필요</strong><br>
//         ul_tag는 li_tag의 <strong>부모 태그로</strong>목록 사이의 구분을 위해 띄어쓸 때 사용한다.<br>
//         ol_tag는 목록의 항목들 앞에 자동으로 숫자가 매겨진다.
//         <h3 style="margin-bottom: 5px;">title_tag</h3>
//         title_tag는 웹 페이지의 제목 지정해줄 수 있다. <u>하지만</u> 한글을 작성할 경우 폰트가 깨지게 되는데 브라우저에서도 UTF-8 방식으로 열 수 있게 강제 해야한다.<br>
//         그게 바로 meta_tag 이고 Attribute로 charset="UTF-8" 을 넣으면 된다.
//         <p>
//             <iframe width="560" height="315" src="https://www.youtube.com/embed/WD-LFlMi6iA?si=1qBl-umJtuy-7ZHF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//         </p>
//         <h2>a_tag</h2>
//         a_tag는 하이퍼 링크를 걸어주는 태그로 속성으로 href:""을 주면 된다.
//         <ul>
//         <li>href: 클릭시 이동 할 링크</li>
//         <li>target: 링크를 여는 방법</li>
//             <ul>
//                 <li>_self: 현재 페이지 (기본값)</li>
//                 <li>_blank: 새 탭</li>
//                 <li>_parent: 부모 페이지로, iframe 등이 사용된 환경에서 쓰입니다.</li>
//                 <li>_top: 최상위 페이지로, iframe 등이 사용된 환경에서 쓰입니다.</li>
//                 <li>프레임이름: 직접 프레임이름을 명시해서 사용할 수도 있습니다.</li>
//             </ul>
//         </ul>    
//         <p>
//             <!-- Start of Tawk.to Script-->
//         <!-- <script type="text/javascript">
//             var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
//             (function(){
//             var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
//             s1.async=true;
//             s1.src='https://embed.tawk.to/65e7fbe09131ed19d97580d6/1ho92vpp9';
//             s1.charset='UTF-8';
//             s1.setAttribute('crossorigin','*');
//             s0.parentNode.insertBefore(s1,s0);
//             })();
//             </script> -->
//             <!--End of Tawk.to Script -->
//         </p>
//     </body>
// </html>
//     `
    // response.end(template);
    // response.end(fs.readFileSync(__dirname + _url));
 
});
app.listen(3000);
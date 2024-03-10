const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    // 파일을 읽는 중에 오류가 발생하면 `err` 인자로 에러 객체가 전달된다.
    console.error(err);
    return;
  }
  // 파일 읽기에 성공하면 `data` 로 파일의 내용이 전달된다.
  console.log(data);
});
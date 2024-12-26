const tunyans= [{ start: 3, end: 6, prob_mat: null }, { start: 39, end: 42, prob_mat: null }]


console.log(4<1<6);

currentTime=1;
console.log(tunyans[0]);
for (let e of tunyans) {
  console.log('结构：', e);
  console.log(e.start, currentTime);
  if (e.start <= currentTime < e.end) {
    console.log("!!!!!!")
    ttm = 'v';
    return 0;
  }
}
console.log("1348!!!");
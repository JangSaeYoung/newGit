import './App.css';
import youtubeData from './data/youtubeData.json';
function App(){
  console.log( 'id:', youtubeData['data'][0]['id'], '-> 아이디');
  console.log( 'channelId:', youtubeData['data'][0]['channelId'], '-> 채널 아이디');
  console.log( 'date:', youtubeData['data'][0]['date'], '-> 업로드 날짜');
  console.log( 'title:', youtubeData['data'][0]['title'], '-> 영상 제목');
  console.log( 'thumbnail:', youtubeData['data'][0]['thumbnail'], '-> 영상 썸네일');
  console.log( 'description:', youtubeData['data'][0]['description'], '-> 영상 설명');
  console.log( 'channelTitle:', youtubeData['data'][0]['channelTitle'], '-> 영상 제목');
  console.log( 'category:', youtubeData['data'][0]['category'], '-> 카테고리');
  console.log( 'viewCount:', youtubeData['data'][0]['viewCount'], '-> 조회수');
  console.log( 'likeCount:', youtubeData['data'][0]['likeCount'], '-> 좋아요수');
  console.log( 'channelUrl:', youtubeData['data'][0]['channelUrl'], '-> 영상의 링크 주소');
  console.log( 'channelThumbnail:', youtubeData['data'][0]['channelThumbnail'], '-> 채널 썸네일');
  return <div>리액트로 데이터 불러오기</div>
}

export default App;



// "id": "awkkyBH2zEo",
// "channelId": "UCOmHUn--16B90oW2L6FRR3A",
// "date": "2021-09-10T04:00:13",
// "title": "LISA - 'LALISA' M/V",
// "thumbnail": "https://i.ytimg.com/vi/awkkyBH2zEo/maxresdefault.jpg",
// "description": "LISA - LALISA\n\n내 뒷모습만 봐도 알잖아\n어두워질 때 분홍빛이나\n새하얀 조명이 날 깨우면\n번쩍번쩍 세상을 흔들어\n\n머리를 하얗게 비운채\n시끄런 감정은 태울래\nBurn burn burn\n그때 난 네 갈증을 해소할 샴페인\n\nSip sip 나를 들이켜\n그래 더 저 높이 내 body 받들어 \nWant you to ring the alarm\n세상에게 알려 내 이름에다 입맞춰\n\nSay Lalisa love me Lalisa love me \nCall me Lalisa love me Lalisa love me\n알잖아 attitude\n뭘 더 어쩌라구\nThe loudest in the room \n\nJust Say Lalisa love me Lalisa love me \nCall me Lalisa love me Lalisa love me\n알잖아 attitude\n뭘 더 어쩌라구\nThe loudest in the room \n\nBaby get the megaphone\nPut it on speaker\nI said I can’t hear you\nSo you need to speak up\nPut that shiz on stereo\nEveryone else on very low \n\nProtect it like a barrier\nPromise there’s nothing scarier\nThan me if anybody coming gunnin for my man\nGonna catch a case\nGun up in my hand\nBam bam bam\nHit after hit though\nRocks in my wrist so I call em the flintstones\n\nRing the alarm\n세상에게 알려 내 이름에다 입맞춰 \n\nSay Lalisa love me Lalisa love me\nCall me Lalisa love me Lalisa love me\n알잖아 attitude \n뭘 더 어쩌라구\nThe loudest in the room \n\nJust Say Lalisa love me Lalisa love me \nCall me Lalisa love me Lalisa love me\n알잖아 attitude \n뭘 더 어쩌라구\nThe loudest in the room \n\n누구와도 비교 못해 그래봤자 you gon’ still love me\nYou need some L.A.L.I.S.A\n\n지금 너의 두 눈 앞에 서있는 내 이름을 기억해\nLove you some L.A.L.I.S.A\n\nYou cannot see me 어떻게 하는지 다 보여줘도\n태국에서 한국 거쳐 여기까지 went for the throat\n\nBeing the greatest of all time ain’t fantasy\n새까만 핑크빛 왕관 belongs to we\n\nLalisa Lalisa Lalisa 하늘 위 당당해\nLalisa Lalisa Lalisa 저들은 날 원해 \nLalisa Lalisa Lalisa catch me if you can\nLalisa Lalisa Lalisa Lalisa Lalisa\n\nSay Lalisa love me Lalisa love me \nCall me Lalisa love me Lalisa love me\n알잖아 attitude \n뭘 더 어쩌라구\nThe loudest in the room\n\nJust Say Lalisa love me Lalisa love me\nCall me Lalisa love me Lalisa love me \n알잖아 attitude \n뭘 더 어쩌라구\nThe loudest in the room\n\n#LISA #리사 #BLACKPINK #블랙핑크 #FIRSTSINGLEALBUM #LALISA #MV #20210910_12amEST #20210910_1pmKST #OUTNOW #YG\n\nMore about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygent_official\nhttp://www.instagram.com/BLACKPINKOFFICIAL",
// "channelTitle": "BLACKPINK",
// "category": "Music",
// "viewCount": "159718995",
// "likeCount": "11486281",
// "channelUrl": "blackpinkofficial",
// "channelThumbnail": "https://yt3
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '애기야') {
    message.reply('네 언니');
  }
  if(message.content === '소형이는?') {
    message.reply('씨발년~');
  }
  if(message.content === '자기야') {
    message.reply('응 지만오빠');
  }
  if(message.content === '사랑해') {
    message.reply('나두');
  }
  if(message.content === '지만이는?') {
    message.reply('알아서 뭐하게 씨발년아');
  }
  if(message.content === '민기는?') {
    message.reply('ㅗ');
  }
  if(message.content === '연이는 누구꺼?') {
    message.reply('나는 승연이오빠꺼');
  }
  if(message.content === '개같은년') {
    message.reply('ㄷㅊ');
  }
  if(message.content === '오소리는?') {
    message.reply('넶?');
  }
  if(message.content === '벗어') {
    message.reply('아래부터?');
  }
  if(message.content === '씨발년이') {
    message.reply('뭐라는거야 개병신새기가 ㅋㅋ뒤지게 쳐맞을려고')
  }
  if(message.content === "더꾸는?") {
    message.reply('세상에서 가장 빛나는 사람')
  }
  if(message.content === '서희는?') {
    message.reply('윤재님의 그녀')
  }
  if(message.content === '씨푸리는?') {
    message.reply('남을 위하는 착한 형')
  }
  if(message.content === '티에스는?') {
    message.reply('오소리의 남자')
  }
  if(message.content === '승연이는?') {
    message.reply('살아계신가요..?')
  }
  if(message.content === '윤재는?') {
    message.reply('서희의 남자')
  }
  if(message.content === '어벤져스') {
    message.reply('거기가 어디야 ?')
  }
  if(message.content === '소형이가너무좋아') {
    message.reply('나랑결혼해줘')
  }
  if(message.content === '연이는 누가 제일 좋아?') {
    message.reply('저.는.세.상.에.서.지.만.님.이.제.일.좋.아.요')
  }
   
  
});

client.login(token);
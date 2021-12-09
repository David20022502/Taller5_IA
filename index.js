const Images =['https://thumbs.dreamstime.com/b/emoji-feliz-fresco-con-las-gafas-de-sol-en-el-fondo-blanco-139149924.jpg',
'https://elcomercio.pe/resizer/yRRq3glQjvWyOdSrEdWeWbZrm6U=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/ZVOHZIQH35FU7LVW6UFEQJ5ET4.jpg',
'https://emojis.wiki/emoji-pics/apple/pensive-face-apple.png',
'https://cdn.friendlystock.com/wp-content/uploads/2018/04/16-nervous-yellow-smiley-emoji-cartoon-clipart.jpg'

]
const trainingData = [
    { input: 'Estoy feliz', output: '0' },
    { input: 'Me alegro por ti', output: '1' },
    { input: 'Quiero llorar', output: '2' },
    { input: 'Estoy ansioso', output: '3' }
];

const net = new brain.recurrent.LSTM();
net.train(trainingData, {
    iterations: 500,
    erroThresh: 0.001
});

const detectEmotion = () => {
    var divtomar = document.getElementById("emotionalphrase");
    var resultado = net.run(divtomar.value);
    var divpresenta = document.getElementById("containerImg");
    Result = '<img src="'+Images[parseInt(resultado)]+'" width="200px" height="200px" >';
    divpresenta.innerHTML = Result;
}

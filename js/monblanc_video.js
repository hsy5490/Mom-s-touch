// const video=$('#mont_video');
// const btn=$('#mont_btn');
// btn.click(function(){
//     // video가 paused상태면 
//     if(video.get(0).paused){
//         //play()=video play
//         video.get(0).play();
//         //button paused 폰트어썸으로 바꿔라
//         $('mont_btn').html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
//     }else{
//         $('#mont_video').get(0).pause();
//         // button play 폰트어썸으로 바꿔라
//         $('#mont_btn').html('<i class="fa fa-p-circle-o" aria-hidden="true"></i>');

//     }
// })
const video = $('#mont_video');
const btn = $('#mont_btn');
btn.click(function(){
    /* 초기값 = video(paused) | button(play) */
    // video가 paused 상태면
    if(video.get(0).paused){
        // play() = Video Play
        $('#mont_video').get(0).play();
        // button paused 폰트어썸으로 바꿔라
        $('#mont_btn').html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
    }else{
        // pause() = Video Pause
        $('#mont_video').get(0).pause();
        // button play 폰트어썸으로 바꿔라
        $('#mont_btn').html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
    }
});

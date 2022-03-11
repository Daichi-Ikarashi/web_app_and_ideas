// ジャイロセンサーが使用可能だったら
if(window.DeviceOrientationEvent){
  // ユーザーにアクセスの許可を求める関数があったら（iOS13以降の対応）
  if(DeviceOrientationEvent.requestPermission){
    $(".btn").on("click", function(){
      // ジャイロセンサーへのアクセス許可を申請する
      DeviceOrientationEvent.requestPermission().then(function(response){
        // リクエストが許可されたら
        if(response === "granted"){
          $(".btn").css('display','none');
        }
      });
    });
    // アクセスの許可を求める関数がなかったら
  }else{
    $(".btn").css("display","none");
  }
}
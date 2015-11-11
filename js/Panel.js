
$(document).ready(function () {
    var img_src_num, img_alt_num, img_ans;
    
    //最初に画像表示したときの処理
    $("#thumbs img").one("click", function () {
      $("#links").show(1000); //1秒掛けて表示
    });

    //クリック処理
    $("#thumbs img").on("click", function () {
      //console.log("click"); //this or event の確認
        
        
      var img_src = $(this).attr("src");
      var img_alt = $(this).attr("alt");
        console.log("img_src");
        
        $("#left_img").attr("src", img_src).attr("alt", img_alt);   //左（alt）
        
      $("#lage_img").attr("src", img_src).attr("alt", img_alt);
      $("#select_img").html(img_src + img_alt);
        
        $("#right_img").attr("src", img_src).attr("alt", img_alt);   //右（src）
    });




    //リンク画像切り替え
    $("#next,#prev,#random").on("click", function () {  //"#next,#prev"どちらかが押されたら
      var elem_id = $(this).attr("id");     //elem_id　#next,#prevどちらが押されたかIDを持つ
      var src = $("#lage_img").attr("src");     //src でっかい画像データを持つ
      $("#thumbs img").each(function (index, e) {   //画像一覧
        if (src == $(this).attr("src")) {       //もし　でっかい画像が変わっていたら
          var elem = _link(elem_id, src);       //elem 新しい画像データ
          var img_src = $(elem).attr("src");    //新しい画像
          var img_alt = $(elem).attr("alt");    //今の画像
            _fade("#lage_img",img_alt,img_src);//Add #lage_imgに画像を入れる(#next,#prev)
            
            
        //もし、img_src　img_alt　が等しい場合、１or７　だから#lage_imgに折り返しの画像を入れてあげれば
            $("#next").on("click", function () {
                if(img_src == "img/l7.png"){
                    //img_src = $("#thumbs img").attr("img/l1.png");
                    img_src = "img/l1.png";
                    $("#lage_img").attr("src", img_src).attr("alt", img_alt);
                }
            })
            
            $("#prev").on("click", function () {
                if(img_src == "img/l1.png"){
                    //img_src = $("#thumbs img").attr("img/l1.png");
                    img_src = "img/l7.png";
                    $("#lage_img").attr("src", img_src).attr("alt", img_alt);
                }
            })
            
            $("#random").on("click", function () {
                var img_src;
                var num = 0;//変数宣言（関数内で使用可能な変数）
                num = Math.floor(Math.random() * 7 + 1);//0~2
                //console.log("num");
                if(num == 1){
                    img_src = "img/l1.png";
                }else if(num == 2){
                    img_src = "img/l2.png";
                }else if(num == 3){
                    img_src = "img/l3.png";
                }else if(num == 4){
                    img_src = "img/l4.png";
                }else if(num == 5){
                    img_src = "img/l5.png";
                }else if(num == 6){
                    img_src = "img/l6.png";
                }else if(num == 7){
                    img_src = "img/l7.png";
                }
                $("#lage_img").attr("src", img_src).attr("alt", img_alt);
                
            })
            
//            $("#tasizan").on("click", function () {
//
//                if(img_src == "img/l1.png"){
//                    img_src_num = 1;
//                }else if(img_src == "img/l2.png"){
//                    img_src_num = 2;
//                }else if(img_src == "img/l3.png"){
//                    img_src_num = 3;
//                }else if(img_src == "img/l4.png"){
//                    img_src_num = 4;
//                }else if(img_src == "img/l5.png"){
//                    img_src_num = 5;
//                }else if(img_src == "img/l6.png"){
//                    img_src_num = 6;
//                }else if(img_src == "img/l7.png"){
//                    img_src_num = 7;
//                }
//                $("#left_img").attr("src", img_src).attr("alt", img_alt);
//                if(img_alt == "img/l1.png"){
//                    img_alt_num = 1;
//                }else if(img_alt == "img/l2.png"){
//                    img_alt_num = 2;
//                }else if(img_alt == "img/l3.png"){
//                    img_alt_num = 3;
//                }else if(img_alt == "img/l4.png"){
//                    img_alt_num = 4;
//                }else if(img_alt == "img/l5.png"){
//                    img_alt_num = 5;
//                }else if(img_alt == "img/l6.png"){
//                    img_alt_num = 6;
//                }else if(img_alt == "img/l7.png"){
//                    img_alt_num = 7;
//                }
//                $("#right_img").attr("src", img_src).attr("alt", img_alt);
//                img_ans = img_src_num + img_alt_num;
//                //$("#ans_img")
//            });
        
        }
      });
    });

    //リンク切替処理
    function _link(elem_id, src) {
      if(elem_id=="prev"){
        return $('img[src="'+src+'"]').prev();
      }else{
        return $('img[src="'+src+'"]').next();
      }
    }

    //フェード処理//Add
    function _fade(target,alt,src){
      $(target).delay(100).css({display:'block',opacity:'.2'}).attr("alt",alt).attr("src",src).animate({opacity:'1'},200);
    }

  })
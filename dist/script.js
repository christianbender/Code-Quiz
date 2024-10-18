$(document).ready(function () {
  

 
  // ---- HELPER FUNCTIONS ------
  function hideAll() {
    $(".output").hide();
  }

  function showMe(s) {
    $(s).show();
  }

  function slide(s) {
    hideAll();
    showMe(s);
    $(s).slideDown("slow");
  }

  function hide(s) {
    $(s).hide();
  }

  function solution(btn, ch, vec) {
    $(btn).click(function () {
      let ans = [];
      $(ch).each(function () {
        if ($(this).prop("checked")) {
          ans.push(1);
        } else {
          ans.push(0);
        }
      });

      if (ans.toString() == vec) {
        $(btn).css("background-color", "green");
      } else {
        $(btn).css("background-color", "red");
      }
    });
  }

  function getSolution(btn,ch,solv) {
    $(btn).click(function () {
      
      $(ch).each(function () {
        $(this).prop("checked",false);
      });
      
      $(solv).each(function () {
        $(this).prop("checked", true);
      });
    });
  }
  
  
  function spoiler(sp,btn) {
    $(btn).click(function () {
    let o = $(sp);
    if (o.is(":visible")) {
      o.hide();
    } else {
      o.show();
    }
    //$("#spoiler-p1").show();
  });
  }
  
  function menu(m,p) {
    $(m).click(function () {
    slide(p);
  });
  }

  // ---- END HELPER FUNCTIONS ------

  hideAll();
  showMe("#about");
  
  // Adding menu sections -----

  $("#menu1").click(function () {
    slide("#problem1");
  });

  $("#menu0").click(function () {
    slide("#about");
  });

  $("#menu2").click(function () {
    slide("#problem2");
  });
  
  $("#menu3").click(function () {
    slide("#problem3");
  });
  
  $("#menu4").click(function () {
    slide("#problem4");
  });

  menu("#menu5","#problem5");
  menu("#menu6","#problem6");
  
  // end menu sections
  
  // Problemsets---------

  // Problemset 1
  hide("#spoiler-p1");
  $("#p1-button").click(function () {
    let ans = [];
    $(".p1").each(function () {
      if ($(this).prop("checked")) {
        ans.push(1);
      } else {
        ans.push(0);
      }
    });

    if (ans.toString() == "0,1,0,1,0") {
      $("#p1-button").css("background-color", "green");
    } else {
      $("#p1-button").css("background-color", "red");
    }
  });

  
  
  getSolution("#p1-button-solution",".p1", ".p1s");

  spoiler("#spoiler-p1","#spoiler-button-p1");

  // problem set 2 -----------------

  solution("#p2-button", ".p2", "0,1,0");
  getSolution("#p2-button-solution", ".p2",".p2s");
  
  // problem set 3 -----------
  solution("#p3-button", ".p3", "1,0,0,1");
  getSolution("#p3-button-solution", ".p3",".p3s");
  
  
  // problem set 4 ----
  hide("#spoiler-p4");
  solution("#p4-button", ".p4", "0,1");
  getSolution("#p4-button-solution", ".p4",".p4s");
  spoiler("#spoiler-p4","#spoiler-button-p4");
  
  
  //problem set 5 ---
  solution("#p5-button", ".p5", "0,1,0,0,1");
  getSolution("#p5-button-solution", ".p5",".p5s");
  
  
  // problem set 6
  solution("#p6-button", ".p6", "0,0,1,0");
  getSolution("#p6-button-solution", ".p6",".p6s");
  
});
<!-- end of ready -->
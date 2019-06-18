$(() => {
  let drag_flg = false;

  let pos1;
  let pos2;

  let posX1;
  let posY1;

  $("li").mousedown((evt1) => {

    if (drag_flg === false) {
      pos1 = $("li").position();

      posX1 = evt1.clientX - pos1.left;
      posY1 = evt1.clientY - pos1.top;

      drag_flg = true;
    } else {
      drag_flg = false;
    }
  });

  $(document).mousemove((evt2) => {
    if (drag_flg == true) {
      $("li").css("left", (evt2.clientX - posX1));
      $("li").css("top", (evt2.clientY - posY1));
    }
  });

});
function hiconversion_callback(arg) {
  var divArray = arg.frame.document.getElementsByTagName('DIV');
  for (var i = 0; i < divArray.length; i++) {
    if (divArray[i].className != null && divArray[i].className.indexOf('recommendations_block') > - 1) {
      var recDiv = divArray[i];
      break;
    }
      }
    if (recDiv != null) {
        var send = hiconversion_copy_object(arg);
      send.kind = "click";
      send.goal = arg.goal;
      send.node = recDiv;
      hiconversion_goal_click(send);
    }

  return {
    kind: 'ok'
  };
}

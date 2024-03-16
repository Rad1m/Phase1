const draw = {};

draw.path = (ctx, path, color = "black") => {
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(...path[0]); // path[0] contains x, y coordinates and we can expand that array by using ...
  for (let i = 1; i < path.length; i++) {
    ctx.lineTo(...path[i]); //lineTo is javascript command for drawing a line
  }
  ctx.lineCap = "round"; //lineCap is javascript command for making a line start and end smooth
  ctx.lineJoin = "round"; //lineJoin is javascript command for making a line transition smooth
  ctx.stroke();
};

draw.paths = (ctx, paths, color = "black") => {
  for (const path of paths) {
    draw.path(ctx, path, color);
  }
};

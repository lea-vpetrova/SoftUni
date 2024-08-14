import { page, render } from "./lit.js";


const root = document.querySelector("main");

page(decorateContext);
page("/index.html", "/");

page.start();
updateNavigation();

function decorateContext(ctx, next) {
  ctx.updateNavigation = updateNavigation;
  ctx.render = (content) => render(content, root);
  next();
}

function updateNavigation() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user) {
    document.querySelector(".user").style.display = "inline-block";
    document.querySelector(".guest").style.display = "none";
  } else {
    document.querySelector(".user").style.display = "none";
    document.querySelector(".guest").style.display = "inline-block";
  }
}
import { html } from "../lit.js";
import { getAllItems } from "../api/data.js";

const dashboardTemplate = (data) => html` 
  <h2>Users Recommendations</h2>
  <section id="shows">
    ${data.length > 0
      ? data.map(itemCard)
      : html`<h2 id="no-show">No shows Added.</h2>`}
  </section>`;

const itemCard = (item) => html`
<div class="show">
  <img src=${item.imageUrl} alt="example1" />
  <div class="show-info">
    <h3 class="title">${item.title}</h3>
    <p class="genre">Genre: ${item.genre}</p>
    <p class="country-of-origin">Country of Origin: ${item.country}</p>
    <a class="details-btn" href="/details/${item._id}">Details</a>
  </div>
</div>`;

let ctx;

export async function showDashboard(context) {
  ctx = context;
  const data = await getAllItems();
  ctx.render(dashboardTemplate(data));
  ctx.updateNavigation();
}

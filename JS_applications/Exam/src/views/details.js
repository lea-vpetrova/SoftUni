import { deleteById, getById } from "../api/data.js";
import { html, nothing } from "../lit.js";

const detailsTemplate = (data, isLogged) => html` <section id="details">
  <div id="details-wrapper">
    <img id="details-img" src=${data.imageUrl} alt="example1" />
    <div id="details-text">
      <p id="details-title">${data.title}</p>
      <div id="info-wrapper">
        <div id="description">
          <p id="details-description">${data.description}</p>
        </div>
      </div>
      ${isLogged
        ? html` <div id="action-buttons">
            <a href="/edit/${data._id}" id="edit-btn">Edit</a>
            <a @click=${deleteItem} href="#" id="delete-btn">Delete</a>
          </div>`
        : nothing}
    </div>
  </div>
</section>`;

let ctx = null;

export async function showDetails(context) {
  ctx = context;
  const showId = ctx.params.id;
  const data = await getById(showId);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const isLogged = !user ? false : true;

  if (isLogged && !isOwner) {
    hasLiked = await liked(albumId, user._id);
  }

  ctx.render(detailsTemplate(data, isLogged));
}


async function deleteItem() {
  const confirmed = confirm("Are you sure you want to delete this item?");
  if (confirmed) {
    await deleteById(ctx.params.id);
    ctx.page.redirect("/dashboard");
  }
}

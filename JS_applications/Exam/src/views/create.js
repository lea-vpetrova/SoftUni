import { createItem } from "../api/data.js";
import { html } from "../lit.js";

const createTemplate = html` <section id="create">
  <div class="form">
    <h2>Add Album</h2>
    <form @submit=${getFormData} class="create-form">
      <input type="text" name="title" id="title" placeholder="TV Show title" />
      <input type="text" name="imageUrl" id="image-url" placeholder="Image URL"/>
      <input type="text" name="genre" id="genre" placeholder="Genre" />
      <input type="text" name="country" id="country" placeholder="Country" />
      <textarea id="details" name="details" placeholder="Details" rows="2" cols="10"></textarea>
      <button type="submit">Add Show</button>
    </form>
  </div>
</section>`;

let ctx = null;

export async function showCreate(context) {
  ctx = context;
  ctx.render(createTemplate);
}

async function getFormData(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  const { title, imageUrl, genre, country, details } = data;

  if (!title || !genre || !imageUrl || !country || !details ) {
    alert("All fields are required!");
    return;
  }

  await createItem(data);
  e.target.reset();
  ctx.page.redirect("/dashboard");
}

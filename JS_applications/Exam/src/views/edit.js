import { getById, updateById } from "../api/data.js";
import { html } from "../lit.js";

const editTemplate = (item) => html` 
<section id="edit">
  <div class="form">
    <h2>Edit Show</h2>
    <form @submit=${getFormData} class="edit-form">
      <input type="text" name="title" id="title" placeholder="TV Show title" .value=${item.title} />
      <input type="text" name="imageUrl" id="image-url" placeholder="Image URL" .value=${item.imageUrl}/>
      <input type="text" name="genre" id="genre" placeholder="Genre" .value=${item.genre}/>
      <input type="text" name="country" id="country" placeholder="Country" .value=${item.country}/>
      <textarea id="details" name="details" placeholder="Details" rows="2" cols="10">${item.details}</textarea>
      
      <button type="submit">Edit Show</button>
    </form>
  </div>
</section>`;

let ctx = null;

export async function showEdit(context) {
  ctx = context;
  const data = await getById(ctx.params.id);
  console.log(data);
  context.render(editTemplate(data));
}

async function getFormData(e) {
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  const { title, imageUrl, genre, country, details } = data;

  if (!title || !imageUrl || !genre || !country || !details) {
    alert("All fields are required!");
    return;
  }

  await updateById(ctx.params.id, data);
  e.target.reset();
  ctx.page.redirect(`/details/${ctx.params.id}`);
}

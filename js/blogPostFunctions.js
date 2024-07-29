import { fetchBlogPosts } from './blogPostApi.js';

export const loadBlogPosts = (category = "") => {
	fetchBlogPosts(category).then((data) => {
		for (let i = 0; i < data.length; i++) {
			addBlog(data[i], 'blogBox')
		}
	})
}

export const addBlog = (object, elementId) => {
	const blogBox = document.getElementById(elementId)
	const genericContent = document.createElement("div");
	blogBox.appendChild(genericContent)

	const titleBox = document.createElement("div");
	titleBox.classList.add('blogPostTitleBox')

	//checks if parentID is 'blogBox', meaning it's the list of blog posts.
	//then, gives in an onClick if so, but not if not or something.
	if (elementId === "blogBox") {
		titleBox.addEventListener('click', (e) => {
			e.preventDefault();
			loadBlogPostModal(object)
		})
		genericContent.classList.add('blogPostContainer');
	} else {
		genericContent.classList.add('blogPostModalContainer');
	}


	const title = document.createElement("div");
	title.classList.add("postTitle")
	title.innerText = object.title

	const createdAt = document.createElement("div");
	createdAt.innerText = new Date(object.created_at).toLocaleDateString();

	const category = document.createElement("div");
	category.classList.add("postCategory");
	category.innerText = object.category;

	const body = document.createElement("div");
	body.innerText = object.body

	genericContent.appendChild(titleBox)
	titleBox.appendChild(title)
	titleBox.appendChild(createdAt)
	genericContent.appendChild(category)
	genericContent.appendChild(body)
}

export const loadBlogPostModal = (blogPost) => {
	console.log(`loading content: blogPostModal into pageContainer`);
	fetch('../pages/blog/blogView.html')
		.then(response => {
			if (!response.ok) {
				throw new Error(`Error fetching blogPostModal: ${response.statusText}`);
			}
			return (response.text());
		}).then(html => {
			const element = document.getElementById("pageContainer");
			if (element) {
				element.insertAdjacentHTML('beforeend', html)
				addBlog(blogPost, "blogModalContainer")

			} else {
				console.log("element not found..: " + `${"pageContainer"}`);
			}
		}).catch(error => {
			console.error(error);
		})

}

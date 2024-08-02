export async function fetchBlogPosts(category = "") {
	if (category !== "") {
		try {
			const result = await fetch(`http://localhost:4000/blogPosts?category=${category}`);
			const data = await result.json();
			return data;
		}
		catch (error) {
			return ({ message: error });
		}
	} else {
		try {
			const result = await fetch('http://localhost:4000/blogPosts?sortBy=created_at');
			const data = await result.json();
			return data;
		}
		catch (error) {
			return ({ message: error });
		}
	}
}

export async function fetchBlogPostCategories() {
	try {
		const result = await fetch('http://localhost:4000/blogPosts?categoryList=1');
		const data = await result.json();
		return data;
	} catch (error) {
		return ({ message: error });
	}
}

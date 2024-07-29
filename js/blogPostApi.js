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
			const result = await fetch('http://localhost:4000/blogPosts');
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
		const result = await fetch('http://localhost:4000/blogPosts?category=1');
		const data = await result.json();
		return data;
	} catch (error) {
		return ({ message: error });
	}
}

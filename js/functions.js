
export const switchTheme = () => {
	const currentTheme = document.documentElement.getAttribute("data-theme");
	if (currentTheme === 'light') {
		document.documentElement.setAttribute('data-theme', 'dark');
	} else if (currentTheme === 'dark') {
		document.documentElement.setAttribute('data-theme', 'light');
	}
	toggleButton.textContent = currentTheme;
}

// export function loadContent(url, elementId){
// 	console.log(`loading content: from ${url} into ${elementId}`);
// 	fetch(url)
// 		.then(response => {
// 			if (!response.ok) {
// 				throw new Error(`Error fetching ${url}: ${response.statusText}`);
// 			}
// 			return (response.text());
// 		}).then(html => {
// 			const element = document.getElementById(elementId);
// 			if (element) {
// 				element.innerHTML = html;
// 			} else {
// 				console.log("element not found..: " + `${elementId}`);
// 			}
// 		}).catch(error => {
// 			console.error(error);
// 		})
// }
export function loadContent(url, elementId) {
	return new Promise((resolve, reject) => {
		console.log(`loading content: from ${url} into ${elementId}`);
		fetch(url)
			.then(response => {
				if (!response.ok) {
					throw new Error(`Error fetching ${url}: ${response.statusText}`);
				}
				return (response.text());
			}).then(html => {
				const element = document.getElementById(elementId);
				if (element) {
					element.innerHTML = html;
					resolve();
				} else {
					console.log("element not found..: " + `${elementId}`);
				}
			}).catch(error => {
				reject(error)
				console.error(error);
			})
	})
}

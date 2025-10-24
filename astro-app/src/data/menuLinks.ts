import { getAllPosts } from "./post";

export async function getMenuLinks() {
	const allPosts = await getAllPosts();
	const menuLinks: { path: string; title: string }[] = [
		{
			path: "/",
			title: "Home",
		},
		{
			path: "/about/",
			title: "About",
		},
	];

	if (allPosts.length > 0) {
		menuLinks.push({
			path: "/posts/",
			title: "Blog",
		});
	}

	return menuLinks;
}

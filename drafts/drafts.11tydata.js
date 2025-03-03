
function showDraft(data) {
  //console.log(process.env.ELEVENTY_ENV);
	return process.env.ELEVENTY_ENV !== 'development';
}

export default async function() {
	return {
		eleventyComputed: {
			eleventyExcludeFromCollections: function(data) {
				if(showDraft(data)) {
					return data.eleventyExcludeFromCollections;
				}
				else {
					return true;
				}
			},
			permalink: function(data) {
				if(showDraft(data)) {
					return `/${data.page.fileSlug}/index.html`;
				}
				else {
					return false;
				}
			}
		}
	}
}

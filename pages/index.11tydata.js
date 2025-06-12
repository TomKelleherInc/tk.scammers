import { readFile } from 'fs/promises';
const metadata = JSON.parse(
  await readFile(
    new URL('../_data/metadata.json', import.meta.url)
  )
);

export default async function(data) {
  return {
    pagination: {
      data: "collections.posts",
      size: metadata.paginationSize,
      alias: "postslist",
      reverse: true,
    },
    permalink: data => {
      const pageNum = data.pagination && data.pagination.pageNumber > 0
        ? `${data.pagination.pageNumber + 1}/`
        : '';
      return `/scams/${pageNum}`;
    }
  };
};

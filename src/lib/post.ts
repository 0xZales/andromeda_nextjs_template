import path from "path";
import fs from "fs";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
const pageContentDirectory = path.join(process.cwd(), "src/content");
const postsDirectory = path.join(process.cwd(), "src/content/posts");
export const getPageData = (filename: string) => {
  const fullPath = path.join(pageContentDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  return { filename, ...matterResult.data };
};

export async function getAllPostData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const embeddings = await Promise.all(
    fileNames.map(async (file) => {
      const id = file.replace(/\.md$/, "");
      const res = await getPostData(id);

      return {
        ...res,
      };
    })
  );
  // Sort posts by date
  return embeddings.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string) {

   const fullPath = path.join(postsDirectory, `${id}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

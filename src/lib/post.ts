import path from "path";
import fs from "fs";
import matter from "gray-matter";
const postsDirectory = path.join(process.cwd(), "src/content");
export function getStaticData(filename: string) {
  const fullPath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  return {
    filename,
    ...matterResult.data,
  };
}

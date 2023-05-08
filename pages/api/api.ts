import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join("content/homepage");
const itemsDirectory = join("_items");
const collectionsDirectory = join("_collections");

export function getHomepagePostSlugs() {
  return fs.readdirSync(postsDirectory);
}
export function getCollectionSlugs() {
  return fs.readdirSync(collectionsDirectory);
}
// export function getPostSlugs() {
//   return fs.readdirSync("content/*");
// }

export function getItemBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(itemsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}
export function getHomepagePostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}
export function getCollectionBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(collectionsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  console.log("⭐🎈  file: api.ts:51  getCollectionBySlug  data:", data);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "title") {
      items[field] = data.title;
    }
    if (field === "title_display") {
      items[field] = data.title_display;
    }
    if (field === "description") {
      items[field] = data.description;
    }
    if (field === "items") {
      items[field] = data.items;
    }
    if (field === "order") {
      items[field] = data.order;
    }
    if (field === "items") {
      items[field] = data.items.map((item) =>
        getItemBySlug(item, [
          "title",
          "price",
          "stars",
          "reviews",
          "image_url",
          "url",
        ])
      );
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });
  console.log("⭐🎈  file: api.ts:57  getCollectionBySlug  items:", items);

  return items;
}

export function getHomepagePosts(fields: string[] = []) {
  const slugs = getHomepagePostSlugs();
  const posts = slugs
    .map((slug) => getHomepagePostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date && post1.date > post2.date ? -1 : 1));
  return posts;
}
export function getAllCollections(fields: string[] = []) {
  const slugs = getCollectionSlugs();
  const posts = slugs
    .map((slug) => getCollectionBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date && post1.date > post2.date ? -1 : 1));
  return posts;
}

// export function getAllPosts(fields: string[] = []) {
//   const slugs = getPostSlugs();
//   const posts = slugs
//     .map((slug) => getPostBySlug(slug, fields))
//     // sort posts by date in descending order
//     .sort((post1, post2) => (post1.date && post1.date > post2.date ? -1 : 1));
//   return posts;
// }

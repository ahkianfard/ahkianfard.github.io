// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        pubDate: z.date(),
        PDate: z.string(),
        PTime: z.string(),
        image: z.object({
            url: z.string()
        }),
        tags: z.array(z.string()),
        pinned: z.boolean(),
        published: z.boolean(),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
    posts: postsCollection,
};
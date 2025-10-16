// sync-trigger
// Force Tina Cloud to reindex
import { defineConfig } from "tinacms";

// Preserve dynamic branch detection
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "hero",
        label: "Hero Section",
        path: "content/hero",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Headline",
            name: "headline",
          },
          {
            type: "string",
            label: "Subtext",
            name: "subtext",
            ui: { component: "textarea" },
          },
        ],
      },
      {
        name: "projects",
        label: "Projects",
        path: "content/projects",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Project Title",
            name: "title",
          },
          {
            type: "string",
            label: "Description",
            name: "description",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            label: "Thinking Line",
            name: "why",
            ui: { component: "textarea" },
          },
          {
            type: "image",
            label: "Thumbnail",
            name: "thumbnail",
          },
        ],
      },
    ],
  },
});

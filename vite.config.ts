import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

// SvelteKit 3 config lives here, rather than in svelte.config.js.
export default defineConfig({
  plugins: [
    sveltekit({
      adapter: adapter({ pages: "build", assets: "build", strict: true }),
      prerender: {
        entries: ["*"],
        handleHttpError: "fail",
        handleMissingId: "fail",
      },
    }),
  ],
});

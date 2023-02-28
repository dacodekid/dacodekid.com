// docs/.vuepress/config.ts
import fs from "fs";
import mdSub from "markdown-it-sub";
import mdSup from "markdown-it-sup";
import mdMermaid from "@wekanteam/markdown-it-mermaid";
import { searchPlugin } from "@vuepress/plugin-search";
import { defaultTheme, defineUserConfig, viteBundler } from "vuepress";
var readJson = (file, key) => {
  try {
    return JSON.parse(fs.readFileSync(`docs/.vuepress/data/${file}`, "utf8"))[key];
  } catch (e) {
    console.error(`Error reading file: ${file}: ${e}`);
    return {};
  }
};
var config_default = defineUserConfig({
  // site config
  base: "/",
  lang: "en-US",
  title: "void",
  description: "!master of all trades",
  head: [["link", { rel: "icon", href: "favicon.ico" }]],
  // bundler config
  bundler: viteBundler({
    viteOptions: {
      server: {
        fs: {
          strict: false
        }
      }
    }
  }),
  // theme and its config
  theme: defaultTheme({
    logo: "/img/logo.svg",
    logoDark: "/img/logo-dark.svg",
    repo: "dacodekid/",
    editLink: false,
    contributors: false,
    lastUpdated: false,
    navbar: [
      { text: "snippet", link: "/snippet/" },
      { text: "gist", link: "/gist/" }
    ],
    sidebarDepth: 0,
    sidebar: {
      "/snippet/": readJson("snippet.json", "snippet")
    }
  }),
  // plugins
  extendsMarkdown: (md) => {
    md.use(mdSub);
    md.use(mdSup);
    md.use(mdMermaid);
  },
  plugins: [
    searchPlugin({
      isSearchable: (page) => page.path !== "/"
      // exclude the homepage
    })
    // docsearchPlugin({
    //   appId: 'W2WVO85U8E',
    //   apiKey: '674b6052ad8a0245ea461d58855d050f',
    //   indexName: 'dacodekid',
    // }),
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2NvZGVraWQvZGV2L2RhY29kZWtpZC5jb20vZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jb2Rla2lkL2Rldi9kYWNvZGVraWQuY29tL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY29kZWtpZC9kZXYvZGFjb2Rla2lkLmNvbS9kb2NzLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IG1kU3ViIGZyb20gJ21hcmtkb3duLWl0LXN1Yic7XG5pbXBvcnQgbWRTdXAgZnJvbSAnbWFya2Rvd24taXQtc3VwJztcbmltcG9ydCBtZE1lcm1haWQgZnJvbSAnQHdla2FudGVhbS9tYXJrZG93bi1pdC1tZXJtYWlkJztcbmltcG9ydCB7IHNlYXJjaFBsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tc2VhcmNoJztcbi8vIGltcG9ydCB7IGRvY3NlYXJjaFBsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tZG9jc2VhcmNoJztcbmltcG9ydCB7IGRlZmF1bHRUaGVtZSwgZGVmaW5lVXNlckNvbmZpZywgdml0ZUJ1bmRsZXIgfSBmcm9tICd2dWVwcmVzcyc7XG5cbmNvbnN0IHJlYWRKc29uID0gKGZpbGUsIGtleSkgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhgZG9jcy8udnVlcHJlc3MvZGF0YS8ke2ZpbGV9YCwgJ3V0ZjgnKSlba2V5XTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHJlYWRpbmcgZmlsZTogJHtmaWxlfTogJHtlfWApO1xuICAgIHJldHVybiB7fTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIC8vIHNpdGUgY29uZmlnXG4gIGJhc2U6ICcvJyxcbiAgbGFuZzogJ2VuLVVTJyxcbiAgdGl0bGU6ICd2b2lkJyxcbiAgZGVzY3JpcHRpb246ICchbWFzdGVyIG9mIGFsbCB0cmFkZXMnLFxuICBoZWFkOiBbWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJ2Zhdmljb24uaWNvJyB9XV0sXG5cbiAgLy8gYnVuZGxlciBjb25maWdcbiAgYnVuZGxlcjogdml0ZUJ1bmRsZXIoe1xuICAgIHZpdGVPcHRpb25zOiB7XG4gICAgICBzZXJ2ZXI6IHtcbiAgICAgICAgZnM6IHtcbiAgICAgICAgICBzdHJpY3Q6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcblxuICAvLyB0aGVtZSBhbmQgaXRzIGNvbmZpZ1xuICB0aGVtZTogZGVmYXVsdFRoZW1lKHtcbiAgICBsb2dvOiAnL2ltZy9sb2dvLnN2ZycsXG4gICAgbG9nb0Rhcms6ICcvaW1nL2xvZ28tZGFyay5zdmcnLFxuICAgIHJlcG86ICdkYWNvZGVraWQvJyxcbiAgICBlZGl0TGluazogZmFsc2UsXG4gICAgY29udHJpYnV0b3JzOiBmYWxzZSxcbiAgICBsYXN0VXBkYXRlZDogZmFsc2UsXG4gICAgbmF2YmFyOiBbXG4gICAgICB7IHRleHQ6ICdzbmlwcGV0JywgbGluazogJy9zbmlwcGV0LycgfSxcbiAgICAgIHsgdGV4dDogJ2dpc3QnLCBsaW5rOiAnL2dpc3QvJyB9LFxuICAgIF0sXG4gICAgc2lkZWJhckRlcHRoOiAwLFxuICAgIHNpZGViYXI6IHtcbiAgICAgICcvc25pcHBldC8nOiByZWFkSnNvbignc25pcHBldC5qc29uJywgJ3NuaXBwZXQnKSxcbiAgICB9LFxuICB9KSxcblxuICAvLyBwbHVnaW5zXG4gIGV4dGVuZHNNYXJrZG93bjogKG1kKSA9PiB7XG4gICAgbWQudXNlKG1kU3ViKTtcbiAgICBtZC51c2UobWRTdXApO1xuICAgIG1kLnVzZShtZE1lcm1haWQpO1xuICB9LFxuXG4gIHBsdWdpbnM6IFtcbiAgICBzZWFyY2hQbHVnaW4oe1xuICAgICAgaXNTZWFyY2hhYmxlOiAocGFnZSkgPT4gcGFnZS5wYXRoICE9PSAnLycsIC8vIGV4Y2x1ZGUgdGhlIGhvbWVwYWdlXG4gICAgfSksXG5cbiAgICAvLyBkb2NzZWFyY2hQbHVnaW4oe1xuICAgIC8vICAgYXBwSWQ6ICdXMldWTzg1VThFJyxcbiAgICAvLyAgIGFwaUtleTogJzY3NGI2MDUyYWQ4YTAyNDVlYTQ2MWQ1ODg1NWQwNTBmJyxcbiAgICAvLyAgIGluZGV4TmFtZTogJ2RhY29kZWtpZCcsXG4gICAgLy8gfSksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVQsT0FBTyxRQUFRO0FBQ3BVLE9BQU8sV0FBVztBQUNsQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxlQUFlO0FBQ3RCLFNBQVMsb0JBQW9CO0FBRTdCLFNBQVMsY0FBYyxrQkFBa0IsbUJBQW1CO0FBRTVELElBQU0sV0FBVyxDQUFDLE1BQU0sUUFBUTtBQUM5QixNQUFJO0FBQ0YsV0FBTyxLQUFLLE1BQU0sR0FBRyxhQUFhLHVCQUF1QixRQUFRLE1BQU0sQ0FBQyxFQUFFLEdBQUc7QUFBQSxFQUMvRSxTQUFTLEdBQVA7QUFDQSxZQUFRLE1BQU0sdUJBQXVCLFNBQVMsR0FBRztBQUNqRCxXQUFPLENBQUM7QUFBQSxFQUNWO0FBQ0Y7QUFFQSxJQUFPLGlCQUFRLGlCQUFpQjtBQUFBO0FBQUEsRUFFOUIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLGNBQWMsQ0FBQyxDQUFDO0FBQUE7QUFBQSxFQUdyRCxTQUFTLFlBQVk7QUFBQSxJQUNuQixhQUFhO0FBQUEsTUFDWCxRQUFRO0FBQUEsUUFDTixJQUFJO0FBQUEsVUFDRixRQUFRO0FBQUEsUUFDVjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQUE7QUFBQSxFQUdELE9BQU8sYUFBYTtBQUFBLElBQ2xCLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxJQUNkLGFBQWE7QUFBQSxJQUNiLFFBQVE7QUFBQSxNQUNOLEVBQUUsTUFBTSxXQUFXLE1BQU0sWUFBWTtBQUFBLE1BQ3JDLEVBQUUsTUFBTSxRQUFRLE1BQU0sU0FBUztBQUFBLElBQ2pDO0FBQUEsSUFDQSxjQUFjO0FBQUEsSUFDZCxTQUFTO0FBQUEsTUFDUCxhQUFhLFNBQVMsZ0JBQWdCLFNBQVM7QUFBQSxJQUNqRDtBQUFBLEVBQ0YsQ0FBQztBQUFBO0FBQUEsRUFHRCxpQkFBaUIsQ0FBQyxPQUFPO0FBQ3ZCLE9BQUcsSUFBSSxLQUFLO0FBQ1osT0FBRyxJQUFJLEtBQUs7QUFDWixPQUFHLElBQUksU0FBUztBQUFBLEVBQ2xCO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxhQUFhO0FBQUEsTUFDWCxjQUFjLENBQUMsU0FBUyxLQUFLLFNBQVM7QUFBQTtBQUFBLElBQ3hDLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

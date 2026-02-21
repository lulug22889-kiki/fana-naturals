import { Studio } from "sanity";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "../../../sanity/schemas";

const config = defineConfig({
  name: "fana-naturals",
  title: "Fana Naturals CMS",
  projectId: "cmz2cc1a",
  dataset: "production",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});

export default function StudioPage() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Studio config={config} />
    </div>
  );
}

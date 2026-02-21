import { useEffect, useState, Component, type ReactNode } from "react";

const PROJECT_ID = "cmz2cc1a";

const originalFetch = window.fetch.bind(window);
window.fetch = function (input: RequestInfo | URL, init?: RequestInit) {
  let url =
    typeof input === "string"
      ? input
      : input instanceof URL
        ? input.toString()
        : input.url;

  if (typeof url === "string") {
    if (url.includes(`${PROJECT_ID}.api.sanity.io`)) {
      const parsed = new URL(url);
      const proxied = `/sanity-proxy/api${parsed.pathname}${parsed.search}`;
      console.log("[Sanity Proxy] Redirecting API:", url, "->", proxied);
      return originalFetch(proxied, init);
    }
    if (url.includes(`${PROJECT_ID}.apicdn.sanity.io`)) {
      const parsed = new URL(url);
      const proxied = `/sanity-proxy/cdn${parsed.pathname}${parsed.search}`;
      console.log("[Sanity Proxy] Redirecting CDN:", url, "->", proxied);
      return originalFetch(proxied, init);
    }
  }

  return originalFetch(input, init);
};

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, color: "red" }}>
          <h2>Studio Error</h2>
          <pre>{this.state.error.message}</pre>
          <pre>{this.state.error.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function StudioPage() {
  const [StudioComponent, setStudioComponent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("[Studio] Starting to load Sanity modules...");
    Promise.all([
      import("sanity"),
      import("sanity/structure"),
    ])
      .then(([sanityModule, structureModule]) => {
        console.log("[Studio] Sanity modules loaded successfully");
        const { Studio, defineConfig } = sanityModule;
        const { structureTool } = structureModule;

        import("../../../sanity/schemas").then((schemasModule) => {
          console.log("[Studio] Schemas loaded");
          const config = defineConfig({
            name: "fana-naturals",
            title: "Fana Naturals CMS",
            projectId: PROJECT_ID,
            dataset: "production",
            basePath: "/admin",
            plugins: [structureTool()],
            schema: {
              types: schemasModule.schemaTypes,
            },
          });

          setStudioComponent(() => () => (
            <ErrorBoundary>
              <Studio config={config} />
            </ErrorBoundary>
          ));
          setLoading(false);
        });
      })
      .catch((err) => {
        console.error("[Studio] Failed to load:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div style={{ padding: 40, color: "red" }}>
        <h2>Failed to load Studio</h2>
        <pre>{error}</pre>
      </div>
    );
  }

  if (loading || !StudioComponent) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", fontSize: "18px" }}>
        Loading Sanity Studio...
      </div>
    );
  }

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <StudioComponent />
    </div>
  );
}

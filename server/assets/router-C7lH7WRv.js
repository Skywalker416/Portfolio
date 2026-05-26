import { createRootRoute, HeadContent, Scripts, useRouterState, Link, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { Cpu, User, Briefcase, Code2, Mail, Terminal } from "lucide-react";
const Route$5 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Amanuel Legesse — Software Engineer & IT System Administrator" }
    ]
  }),
  shellComponent: RootDocument
});
const NAV_TABS = [
  { to: "/", label: "ABOUT", icon: User, exact: true },
  { to: "/resume", label: "EXPERIENCE", icon: Briefcase },
  { to: "/projects", label: "PROJECTS", icon: Code2 },
  { to: "/contact", label: "CONTACT", icon: Mail }
];
function TabNav() {
  const { location } = useRouterState();
  const path = location.pathname;
  return /* @__PURE__ */ jsx("nav", { className: "sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-3 border-b border-border/40", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "glow-pulse w-8 h-8 rounded border border-primary/40 flex items-center justify-center", children: /* @__PURE__ */ jsx(Cpu, { size: 16, className: "text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-primary text-glow tracking-widest", children: "AMANUEL L." }),
          /* @__PURE__ */ jsx("div", { className: "text-[10px] text-muted-foreground tracking-[0.2em]", children: "SOFTWARE ENG · IT ADMIN" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex items-center gap-1 text-[10px] font-mono opacity-70", children: [
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "●" }),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "SYSTEMS ONLINE" }),
        /* @__PURE__ */ jsx("span", { className: "text-border mx-2", children: "|" }),
        /* @__PURE__ */ jsx("span", { style: { color: "oklch(0.75 0.2 155)" }, children: "UPTIME 99.9%" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "tab-network-wrap", children: [
      /* @__PURE__ */ jsx("div", { className: "tab-network-grid" }),
      /* @__PURE__ */ jsxs("div", { className: "tab-network-lines", children: [
        /* @__PURE__ */ jsx("span", { className: "tab-network-link tab-network-link-1" }),
        /* @__PURE__ */ jsx("span", { className: "tab-network-link tab-network-link-2" }),
        /* @__PURE__ */ jsx("span", { className: "tab-network-link tab-network-link-3" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "tab-network-nodes", children: [
        /* @__PURE__ */ jsx("span", { className: "tab-network-node tab-network-node-1" }),
        /* @__PURE__ */ jsx("span", { className: "tab-network-node tab-network-node-2" }),
        /* @__PURE__ */ jsx("span", { className: "tab-network-node tab-network-node-3" }),
        /* @__PURE__ */ jsx("span", { className: "tab-network-node tab-network-node-4" }),
        /* @__PURE__ */ jsx("span", { className: "tab-network-node tab-network-node-5" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center overflow-x-auto", children: [
        NAV_TABS.map(({ to, label, icon: Icon, exact }) => {
          const isActive = exact ? path === to : path.startsWith(to);
          return /* @__PURE__ */ jsxs(
            Link,
            {
              to,
              className: [
                "tab-network-item flex items-center gap-1.5 px-4 py-3 text-xs tracking-widest font-medium transition-all duration-200 border-b-2 whitespace-nowrap",
                isActive ? "tab-active border-primary" : "text-muted-foreground border-transparent hover:text-foreground hover:border-border"
              ].join(" "),
              children: [
                /* @__PURE__ */ jsx(Icon, { size: 12 }),
                label
              ]
            },
            to
          );
        }),
        /* @__PURE__ */ jsxs("div", { className: "ml-auto pr-2 hidden md:flex items-center gap-1 text-[10px] text-muted-foreground font-mono", children: [
          /* @__PURE__ */ jsx(Terminal, { size: 10 }),
          /* @__PURE__ */ jsx("span", { children: "v2.4.1" })
        ] })
      ] })
    ] })
  ] }) });
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(HeadContent, {}),
      /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
      /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap",
          rel: "stylesheet"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("body", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx(TabNav, {}),
      /* @__PURE__ */ jsx("main", { children }),
      /* @__PURE__ */ jsx("footer", { className: "border-t border-border mt-16 py-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 flex items-center justify-between text-xs text-muted-foreground font-mono", children: [
        /* @__PURE__ */ jsx("span", { children: "© 2026 AMANUEL LEGESSE — ALL RIGHTS RESERVED" }),
        /* @__PURE__ */ jsx("span", { style: { color: "oklch(0.75 0.2 155)" }, children: '$ echo "thanks for visiting"' })
      ] }) }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$4 = () => import("./resume-trAi7sDa.js");
const Route$4 = createFileRoute("/resume")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./projects-BP9J7tt6.js");
const Route$3 = createFileRoute("/projects")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-B18OoNqc.js");
const Route$2 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-q-li3Md8.js");
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./_slug-BiAWqI4P.js");
const Route = createFileRoute("/blog/$slug")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ResumeRoute = Route$4.update({
  id: "/resume",
  path: "/resume",
  getParentRoute: () => Route$5
});
const ProjectsRoute = Route$3.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$5
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$5
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const BlogSlugRoute = Route.update({
  id: "/blog/$slug",
  path: "/blog/$slug",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  ContactRoute,
  ProjectsRoute,
  ResumeRoute,
  BlogSlugRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  router as r
};

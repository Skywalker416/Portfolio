import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { CheckCircle, Mail, Phone, MapPin, Clock, Linkedin, Github, Send } from "lucide-react";
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);
  const inputClass = (name) => ["w-full px-4 py-2.5 rounded font-mono text-sm bg-input text-foreground outline-none transition-all duration-200 border", focused === name ? "border-primary" : "border-border hover:border-primary/30"].join(" ");
  const inputStyle = (name) => focused === name ? {
    boxShadow: "0 0 0 1px oklch(0.75 0.18 195 / 0.3), 0 0 12px oklch(0.75 0.18 195 / 0.1)"
  } : {};
  if (submitted) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-[60vh] flex items-center justify-center px-4", children: /* @__PURE__ */ jsxs("div", { className: "card-tech rounded-2xl p-10 text-center max-w-md w-full", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4", style: {
        background: "oklch(0.75 0.2 155 / 0.1)",
        border: "1px solid oklch(0.75 0.2 155 / 0.3)"
      }, children: /* @__PURE__ */ jsx(CheckCircle, { size: 28, style: {
        color: "oklch(0.75 0.2 155)"
      } }) }),
      /* @__PURE__ */ jsx("div", { className: "font-mono text-xs text-muted-foreground mb-2", children: "STATUS: 200 OK" }),
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold font-mono text-foreground mb-2", children: "Message Transmitted" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-6 leading-relaxed", children: "Packet received successfully. I'll respond within 24 hours." }),
      /* @__PURE__ */ jsx("button", { onClick: () => setSubmitted(false), className: "px-5 py-2 rounded text-sm font-mono transition-all duration-200", style: {
        background: "oklch(0.75 0.18 195 / 0.1)",
        border: "1px solid oklch(0.75 0.18 195 / 0.4)",
        color: "oklch(0.78 0.19 195)"
      }, children: "SEND ANOTHER" })
    ] }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 py-10 space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-xs font-mono text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "amanuel@server" }),
        /* @__PURE__ */ jsx("span", { children: ":~$ " }),
        /* @__PURE__ */ jsx("span", { style: {
          color: "oklch(0.75 0.2 155)"
        }, children: "nc -l 80 # open for connections" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-3xl font-bold font-mono", children: [
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "PING" }),
        /* @__PURE__ */ jsx("span", { className: "shimmer-text", children: " ME" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground font-mono", children: "Open to software engineering, IT systems, and technical support opportunities." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "card-tech rounded-xl p-5 space-y-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xs font-mono tracking-widest text-muted-foreground", children: "CONNECTION INFO" }),
          [{
            icon: Mail,
            label: "Email",
            value: "ese.amanuel.legesse@gmail.com",
            href: "mailto:ese.amanuel.legesse@gmail.com"
          }, {
            icon: Phone,
            label: "Phone",
            value: "+251 939 658979",
            href: "tel:+251939658979"
          }, {
            icon: MapPin,
            label: "Location",
            value: "Addis Ababa, Ethiopia",
            href: null
          }, {
            icon: Clock,
            label: "Timezone",
            value: "EAT (UTC+3)",
            href: null
          }].map(({
            icon: Icon,
            label,
            value,
            href
          }) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-7 h-7 rounded flex items-center justify-center shrink-0 mt-0.5", style: {
              background: "oklch(0.75 0.18 195 / 0.1)",
              border: "1px solid oklch(0.75 0.18 195 / 0.2)"
            }, children: /* @__PURE__ */ jsx(Icon, { size: 12, style: {
              color: "oklch(0.78 0.19 195)"
            } }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-[10px] text-muted-foreground font-mono", children: label }),
              href ? /* @__PURE__ */ jsx("a", { href, className: "text-xs text-foreground font-mono hover:text-primary transition-colors", children: value }) : /* @__PURE__ */ jsx("div", { className: "text-xs text-foreground font-mono", children: value })
            ] })
          ] }, label))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card-tech rounded-xl p-5 space-y-3", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xs font-mono tracking-widest text-muted-foreground", children: "SOCIAL LINKS" }),
          [{
            icon: Linkedin,
            label: "LinkedIn",
            href: "http://www.linkedin.com/in/amanuel-legesse-041949205"
          }, {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/Skywalker416"
          }].map(({
            icon: Icon,
            label,
            href
          }) => /* @__PURE__ */ jsxs("a", { href, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors", children: [
            /* @__PURE__ */ jsx(Icon, { size: 13 }),
            label
          ] }, label))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-xl p-4 font-mono text-xs", style: {
          background: "oklch(0.07 0.015 240)",
          border: "1px solid oklch(0.22 0.04 220)"
        }, children: [
          /* @__PURE__ */ jsx("div", { style: {
            color: "oklch(0.75 0.2 155)"
          }, children: "$ ping amanuel.dev" }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground mt-1", children: "64 bytes from amanuel: icmp_seq=1 ttl=64 time=<24h" }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "--- amanuel ping statistics ---" }),
          /* @__PURE__ */ jsx("div", { style: {
            color: "oklch(0.75 0.2 155)"
          }, children: "1 packet transmitted, 1 received, 0% packet loss" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxs("div", { className: "card-tech rounded-xl p-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xs font-mono tracking-widest text-muted-foreground mb-5", children: "COMPOSE MESSAGE" }),
        /* @__PURE__ */ jsxs("form", { name: "contact", method: "POST", "data-netlify": "true", "netlify-honeypot": "bot-field", onSubmit: (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);
          fetch("/contact.html", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(formData).toString()
          }).then(() => setSubmitted(true));
        }, className: "space-y-4", children: [
          /* @__PURE__ */ jsx("input", { type: "hidden", name: "form-name", value: "contact" }),
          /* @__PURE__ */ jsx("p", { hidden: true, children: /* @__PURE__ */ jsxs("label", { children: [
            "Don't fill this out: ",
            /* @__PURE__ */ jsx("input", { name: "bot-field" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("label", { htmlFor: "name", className: "block text-xs font-mono text-muted-foreground mb-1.5", children: [
                "NAME ",
                /* @__PURE__ */ jsx("span", { className: "text-primary", children: "*" })
              ] }),
              /* @__PURE__ */ jsx("input", { type: "text", id: "name", name: "name", required: true, placeholder: "John Doe", className: inputClass("name"), style: inputStyle("name"), onFocus: () => setFocused("name"), onBlur: () => setFocused(null) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("label", { htmlFor: "email", className: "block text-xs font-mono text-muted-foreground mb-1.5", children: [
                "EMAIL ",
                /* @__PURE__ */ jsx("span", { className: "text-primary", children: "*" })
              ] }),
              /* @__PURE__ */ jsx("input", { type: "email", id: "email", name: "email", required: true, placeholder: "you@company.com", className: inputClass("email"), style: inputStyle("email"), onFocus: () => setFocused("email"), onBlur: () => setFocused(null) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "subject", className: "block text-xs font-mono text-muted-foreground mb-1.5", children: "SUBJECT" }),
            /* @__PURE__ */ jsx("input", { type: "text", id: "subject", name: "subject", placeholder: "Job opportunity / consulting / general inquiry", className: inputClass("subject"), style: inputStyle("subject"), onFocus: () => setFocused("subject"), onBlur: () => setFocused(null) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "message", className: "block text-xs font-mono text-muted-foreground mb-1.5", children: [
              "MESSAGE ",
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "*" })
            ] }),
            /* @__PURE__ */ jsx("textarea", { id: "message", name: "message", required: true, rows: 6, placeholder: "Tell me about your project or opportunity...", className: `${inputClass("message")} resize-none`, style: inputStyle("message"), onFocus: () => setFocused("message"), onBlur: () => setFocused(null) })
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "submit", className: "w-full flex items-center justify-center gap-2 py-3 rounded text-sm font-mono font-semibold transition-all duration-200 glow-cyan", style: {
            background: "oklch(0.75 0.18 195 / 0.15)",
            border: "1px solid oklch(0.75 0.18 195 / 0.5)",
            color: "oklch(0.78 0.19 195)"
          }, children: [
            /* @__PURE__ */ jsx(Send, { size: 15 }),
            "TRANSMIT MESSAGE"
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  Contact as component
};

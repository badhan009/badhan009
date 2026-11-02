import { CodeXml } from "lucide-react";
import { ScrollReveal } from "../motion/ScrollReveal";
const lines = [
  <>
    <span className="syntax-purple">type</span> Idea = {"{"} vision:{" "}
    <span className="syntax-green">string</span> {"}"};
  </>,
  <></>,
  <>
    <span className="syntax-purple">export default function</span>{" "}
    <span className="syntax-blue">Build</span>({"{"} vision {"}"}: Idea) {"{"}
  </>,
  <>
    {" "}
    <span className="syntax-purple">return</span> (
  </>,
  <>
    {" "}
    &lt;<span className="syntax-green">main</span> className=
    <span className="syntax-yellow">&quot;made-with-purpose&quot;</span>&gt;
  </>,
  <>
    {" "}
    &lt;<span className="syntax-green">h1</span>&gt;{"{"}vision{"}"}&lt;/
    <span className="syntax-green">h1</span>&gt;
  </>,
  <>
    {" "}
    &lt;<span className="syntax-green">p</span>&gt;Let’s make it real.&lt;/
    <span className="syntax-green">p</span>&gt;
  </>,
  <>
    {" "}
    &lt;/<span className="syntax-green">main</span>&gt;
  </>,
  <> );</>,
  <>{"}"}</>,
];
export function CodeShowcaseSection() {
  return (
    <section
      className="container section code-showcase"
      aria-labelledby="code-title"
    >
      <ScrollReveal className="editor-perspective">
        <div className="code-editor">
          <div className="editor-toolbar">
            <span className="window-controls">
              <i />
              <i />
              <i />
            </span>
            <span>
              <CodeXml size={13} /> build.tsx
            </span>
            <span>TSX</span>
          </div>
          <div className="editor-code">
            <pre aria-label="Example TypeScript React component">
              <code>
                {lines.map((line, i) => (
                  <span className="code-line" key={i}>
                    <span className="line-number" aria-hidden="true">
                      {i + 1}
                    </span>
                    <span>{line}</span>
                    {"\n"}
                  </span>
                ))}
              </code>
            </pre>
          </div>
          <div className="editor-status">
            <span>main*</span>
            <span>TypeScript React &nbsp; UTF-8 &nbsp; ✓</span>
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal className="code-copy">
        <p className="eyebrow">The details make the difference</p>
        <h2 id="code-title">
          Clean code.
          <br />
          <span className="muted-heading">Real impact.</span>
        </h2>
        <p className="body-copy">
          Built with modern tools, readable architecture, and a product mindset.
        </p>
        <span className="code-note">
          <CodeXml size={16} /> Thoughtfully engineered, inside and out.
        </span>
      </ScrollReveal>
    </section>
  );
}

import { comparisons, concepts } from "./data/comparisons";

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="code-block">
      <code>{code}</code>
    </pre>
  );
}

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="framework-logos" aria-label="Ember.js and React.js">
            <img src="/ember-logo.svg" alt="Ember.js" />
            <span aria-hidden="true">+</span>
            <img src="/react-logo.svg" alt="React.js" />
          </div>
          <h1 className="header-title">React vs Ember</h1>
          <p className="header-subtitle">Syntax & concepts comparison cheat sheet</p>
        </div>
      </header>

      <main className="container">
        <section className="intro">
          <h2>Ember Octane vs React</h2>
          <p>
            A syntax-focused reference for developers comparing Ember Octane
            concepts with React.
          </p>
        </section>

        <section className="comparison-section">
          <h2>Quick Syntax Comparison</h2>

          <div className="comparison">
            <div className="comparison-header">
              <div>Task</div>
              <div>Ember Octane</div>
              <div>React</div>
            </div>

            {comparisons.map((comparison) => (
              <div className="comparison-row" key={comparison.task}>
                <div className="task">{comparison.task}</div>

                <div className="syntax ember">
                  <code>{comparison.ember}</code>
                </div>

                <div className="syntax react">
                  <code>{comparison.react}</code>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="concepts-section">
          <div className="section-heading">
            <h2>React.js vs Ember.js — Syntax & Concepts</h2>
            <p>
              Detailed syntax examples with minimal theory for each concept.
            </p>
          </div>

          <div className="concept-list">
            {concepts.map((concept) => (
              <article className="concept-card" key={concept.number}>
                <div className="concept-title">
                  <span>{concept.number}</span>
                  <h3>{concept.title}</h3>
                </div>

                <div className="concept-grid">
                  <div className="concept-column ember-column">
                    <h4>Ember</h4>

                    {concept.ember.map((item, index) =>
                      item.type === "code" ? (
                        <CodeBlock
                          key={`${concept.number}-ember-${index}`}
                          code={item.content}
                        />
                      ) : (
                        <p
                          className="concept-description"
                          key={`${concept.number}-ember-${index}`}
                        >
                          {item.content}
                        </p>
                      ),
                    )}
                  </div>

                  <div className="concept-column react-column">
                    <h4>React</h4>

                    {concept.react.map((item, index) =>
                      item.type === "code" ? (
                        <CodeBlock
                          key={`${concept.number}-react-${index}`}
                          code={item.content}
                        />
                      ) : (
                        <p
                          className="concept-description"
                          key={`${concept.number}-react-${index}`}
                        >
                          {item.content}
                        </p>
                      ),
                    )}
                  </div>
                </div>

                {concept.difference && (
                  <div className="difference">
                    <strong>Difference:</strong> {concept.difference}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-intro">
            <p className="footer-title">React vs Ember</p>
            <p className="footer-subtitle">Syntax &amp; Concepts Cheat Sheet</p>
          </div>
          <nav className="footer-resources" aria-label="Official framework websites">
            <span>Continue with the official docs</span>
            <div className="footer-links">
              <a href="https://emberjs.com/" target="_blank" rel="noreferrer">
                Ember.js <span aria-hidden="true">↗</span>
              </a>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                React.js <span aria-hidden="true">↗</span>
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
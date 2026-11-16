import "./style-guide.css"

import logo from "@somenergia/brand/logos/logo.svg"
import logoDark from "@somenergia/brand/logos/logo-dark.svg"
import logoMono from "@somenergia/brand/logos/logo-mono.svg?raw"
import tokens from "@somenergia/design-tokens"

const kebab = (name) =>
  name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)

// Include nested groups (table and chart), not just top-level colors.
function flattenColors(colors, prefix = "") {
  return Object.entries(colors).flatMap(([name, value]) => {
    const key = `${prefix}${kebab(name)}`
    return typeof value === "object"
      ? flattenColors(value, `${key}-`)
      : [[key, value]]
  })
}

export function Logos() {
  return (
    <div className="som-style-guide som-style-grid">
      {[
        ["Light", logo, tokens.color.light],
        ["Dark", logoDark, tokens.color.dark],
      ].map(([label, src, colors]) => (
        <figure
          key={label}
          style={{ background: colors.background, color: colors.text }}>
          <img src={src} alt={`Som Energia — ${label}`} />
          <figcaption>{label}</figcaption>
        </figure>
      ))}
      <figure
        style={{
          background: tokens.color.light.background,
          color: tokens.color.light.text,
        }}>
        {/* Trusted, bundled package asset; inline SVG inherits currentColor. */}
        <div
          role="img"
          aria-label="Som Energia — monochrome"
          dangerouslySetInnerHTML={{ __html: logoMono }}
        />
        <figcaption>Monochrome · currentColor (inline SVG)</figcaption>
      </figure>
    </div>
  )
}

export function Typography() {
  return (
    <div className="som-style-guide">
      <p>Family: {tokens.font.family}</p>
      {Object.entries(tokens.text).map(([name, style]) => (
        <div className="som-style-type" key={name}>
          <code>
            --som-text-{kebab(name)}-* · {style.fontSize} · weight{" "}
            {style.fontWeight} · line height {style.lineHeight} · letter spacing{" "}
            {style.letterSpacing}
          </code>
          <p style={style}>Som Energia, good energy</p>
        </div>
      ))}
      {Object.entries(tokens.font.weight).map(([name, fontWeight]) => (
        <p key={name} style={{ fontWeight }}>
          --som-font-weight-{name}: {fontWeight} · Som Energia
        </p>
      ))}
      <h3>Type scale</h3>
      <ul>
        {Object.entries(tokens.font.size).map(([name, value]) => (
          <li key={name}>
            <code>
              --som-font-size-{name}: {value}
            </code>
          </li>
        ))}
      </ul>
      <p style={{ fontFamily: tokens.font.familyMono }}>
        --som-font-family-mono · Code and values
      </p>
    </div>
  )
}

export function Colors() {
  return (
    <div className="som-style-guide">
      {Object.entries(tokens.color).map(([mode, colors]) => (
        <section
          className="som-style-palette"
          key={mode}
          style={{ background: colors.background, color: colors.text }}>
          <h3>{mode === "light" ? "Light" : "Dark"}</h3>
          <div className="som-style-grid">
            {flattenColors(colors).map(([name, value]) => (
              <div key={name}>
                <div
                  className="som-style-swatch"
                  style={{
                    background: value,
                    borderColor: colors.borderStrong,
                  }}
                />
                <code>--som-color-{name}</code>
                <br />
                <span>{value}</span>
              </div>
            ))}
          </div>
          <h4>Status colors</h4>
          {["danger", "warning", "success", "info"].map((status) => (
            <p
              key={status}
              className="som-style-status"
              style={{
                background: colors[`${status}Surface`],
                color: colors[`${status}Text`],
                borderColor: colors[status],
              }}>
              {status}: text on its surface, with a base-color border.
            </p>
          ))}
        </section>
      ))}
    </div>
  )
}

export function Spacing() {
  return (
    <div className="som-style-guide">
      {Object.entries(tokens.space).map(([name, value]) => (
        <div className="som-style-space" key={name}>
          <code>
            --som-space-{name}: {value}
          </code>
          <div
            style={{
              width: value,
              height: tokens.space[4],
              background: tokens.color.light.text,
            }}
          />
        </div>
      ))}
    </div>
  )
}

export function Radii() {
  return (
    <div className="som-style-guide som-style-grid">
      {Object.entries(tokens.radius).map(([name, value]) => (
        <div
          className="som-style-radius"
          key={name}
          style={{
            borderRadius: value,
            background: tokens.color.light.primary,
            color: tokens.color.light.onPrimary,
          }}>
          <code>
            --som-radius-{name}
            <br />
            {value}
          </code>
        </div>
      ))}
    </div>
  )
}

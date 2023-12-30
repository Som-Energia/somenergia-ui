import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as i,d as o}from"./index-f3147ae3.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-77333b4d.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-6f09c02c.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./assertThisInitialized-33acfce7.js";import"./_baseIsEqual-39aea10f.js";import"./index-45304ab3.js";import"./index-356e4a49.js";const s=`# Change log

## somenergia-ui 0.1.6 2023-12-30

- Fixed duplication of modules causing multiple problems
    - Translations on production build disappeared due to duplicated i18next-react instance
    - In some occasions react simbols were not found
- TableEditor:
    - Singular texts for filter and selected items
    - Breaking change: noDataPlaceHolder should not include TR/TD wrapping
    - Pagination moved back down
    - Catalan translation

## somenergia-ui 0.1.5 2023-12-29

- TableEditor:
    - Softer filter animation (padding, borders and the filter counter row changed abruptly)
    - Fix: some styles were misspelled.
- Loading:
    - Parametrization and simplification
    - Fix: Removed bad keyframe selector warning
        - Some weird interaction with other styles
          made the browser complaint on the transform
          rotate animation. Using \`rotate\` instead.
    - Fix: On some circumstances the ball and the line dealigned
        - Now they are attached to the same animated parent.
          this eases the layout.
        - All children made concentric and absolute positioned.
- Duplicate all dependencies are peer dependencies
- Fix: glob package broke interface
- Main application styles clean up
- CI: Publish on tag

## somenergia-ui 0.1.4 2023-12-28

- Packaging metadata
- Fix: Actual files not included in package
- Fix: dependnecies have to be dev and peer

## somenergia-ui 0.1.1 2023-12-28

- Packaging corrections

## somenergia-ui 0.1.0 2023-12-28

- First version
- Includes components: Loading and TableEditor from somrepresenta-oficinavirtual
- Manages translations and themes
`;function t(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Changelog"}),`
`,n.jsx(o,{children:s})]})}function F(e={}){const{wrapper:a}=Object.assign({},r(),e.components);return a?n.jsx(a,Object.assign({},e,{children:n.jsx(t,e)})):t()}export{F as default};

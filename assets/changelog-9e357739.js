import{j as n}from"./jsx-runtime-f6d73c06.js";import{M as t,d as o}from"./index-7eee0732.js";import{u as r}from"./index-b7a9f960.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-e8002ab0.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-40590036.js";import"./index-8bf7f4ad.js";import"./index-11d98b33.js";import"./assertThisInitialized-33acfce7.js";import"./_baseIsEqual-2b2ffab4.js";import"./mapValues-7df64b2c.js";import"./_baseUniq-de37e305.js";import"./index-356e4a49.js";import"./index-556aefe8.js";const s=`# Change log


## somenergia-ui-0.4.5 2024-05-17
- CustomToolTip
    - Fix: Use \`,\` as default decimal separator


## somenergia-ui-0.4.4 2024-05-10
- SomDatePicker
    - Parameterize styles

## somenergia-ui-0.4.3 2024-04-29
- Chart
    - Parameterize tickcounter and max yAxis value
- Date picker
    - Fix: add min width

## somenergia-ui-0.4.2 2024-04-25
- Build:
    - Fix: Add missing \`devDependencies\`
    - Fix: node version github action

- Chart
    - Fix: Parameterize decimal separator establishing \`,\` as default value

## somenergia-ui-0.4.1 2024-04-16

- Fix: formatDecimal with 2 decimals by default
parametrized

## somenergia-ui-0.4.0 2024-04-15

- New component: SomDatePicker
- New component: DizzyError (cuca marejada)
- New component: SumPricesDisplay
- Chart: added reference lines
- Chart: added custom legend
- Cypress test for SomDatePicker

## somenergia-ui-0.3.2 2024-03-25

- BarChart changes:
  - Bars between x lines
  - Changes in tooltip (add possibility to hide the keys in tooltip)
  - Enable to pass the Y legend

## somenergia-ui 0.3.1 2024-02-20

- Fix: chart tooltip for 0 values

## somenergia-ui 0.3.0 2024-02-13

- New component: Chart
- New components: SumDisplay

## somenergia-ui 0.2.0 2024-01-11

- New component SnackbarMessages
- New service: messages

## somenergia-ui 0.1.7 2024-01-03

- Fix: proptypes required -> isRequired
- Docs: how to add dependencies

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
`;function a(e){return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Changelog"}),`
`,n.jsx(o,{children:s})]})}function D(e={}){const{wrapper:i}=Object.assign({},r(),e.components);return i?n.jsx(i,Object.assign({},e,{children:n.jsx(a,e)})):a()}export{D as default};

# Change log

## somenergia-ui-0.6.0 2025-06-11

- New: Loading

## somenergia-ui-0.5.4 2025-03-14

- Fix: TableHead error whne click

## somenergia-ui-0.5.3 2025-03-14

- Fix: TableEditor error when second click

## somenergia-ui-0.5.2 2025-01-23

- Add Displaced paramter to curve label

## somenergia-ui-0.5.1 2024-11-16

- Fix: remove unused parameters from formatTooltipLabel

## somenergia-ui-0.5.0 2024-10-10

- Theming components taken from somrepre-oficinavirtual
    - GlobalTheming: A wrapper to reset css, set the global theme,
      and control the color mode (light/dark)
        - Renamed SomRepre GlobalTheme -> GlobalTheming
        - Added a customTheme attribute to inject other than SomEnergia
    - Fix: SomEnergiaTheme was not properly exported
    - LocalStorage hook to set and depend on shared LocalStorage data
    - ColorModeButton: A button to toggle the color mode

## somenergia-ui-0.4.10 2024-06-27

- Fix dependencies recharts-scale

## somenergia-ui-0.4.9 2024-06-27

- Remove minimum Yaxis value validation
   - When average is grater than maximum value and 
     minimum is possitive, minimum Y axis should be 0

## somenergia-ui-0.4.8 2024-06-26

- Force 0 value in Y axis when negative values

## somenergia-ui-0.4.7 2024-06-14

- TableEditor: Optimized to work well with 200 rows
    - InnerRow as component to isolate unrequired row renders
    - Memoizing rows to avoid such unrequired rerenders
    - Using custom css instead slow Mui Collapse
    - Cache sorting and paging with useMemo
    - Handlers defined with useCallback to avoid rerenders
    - Using lambda based setX state changes, to avoid single
      row callbacks to depend on all the rows.
    - Using sets for selected and filtered
    - Extracted inner components as files

## somenergia-ui-0.4.6 2024-06-10

- CustomToolTip
    - Fix: Add alpha channel, and set to 1, to avoid opacity

## somenergia-ui-0.4.5 2024-05-17

- CustomToolTip
    - Fix: Use `,` as default decimal separator

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
    - Fix: Add missing `devDependencies`
    - Fix: node version github action

- Chart
    - Fix: Parameterize decimal separator establishing `,` as default value

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
          rotate animation. Using `rotate` instead.
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

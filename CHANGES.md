# Change log

## Unreleased

- CI: upgrade node version
- Fix: i18n node 24 package

## 1.2.0 2026-08-19

- New: SomStepper and SomStepperLinearProgress components
- Apply SomEnergia color styles
- Use Outfit as the official font family
- Improve SomStepper and SomStepperLinearProgress Storybook coverage

## 1.1.7 2026-08-07

- Fix: Hourly tooltip label
- Fix: Tooltip duplicated date

## 1.1.5 2026-08-03

- CI: Add ci workflow to build, test and validate changes
- Improve README with status badges

## 1.1.4 2026-08-03

- Fix: Peer dependencies problems

## 1.1.3 2026-08-03

- Fix: Prevent TableEditor Storybook crash by correcting ItemRow props handling and adding safe defaults for array props

## 1.1.2 2026-05-19

- Fix: Restore displaced prop on CurveChart component

## 1.1.1 2026-05-11

- Update release ci/cd workflow
- Update README with release section

## 1.1.0 2026-05-11

- Use unified lint and prettier configuration

## 1.0.2 2026-05-06

- Use displace parameter in charts
- Add scale parameter to shown auto (in the middle of the bar) or band (to the beginning of the bar)
- Unified day-hour tooltip

## 1.0.1 2026-03-17

- Fix: DatePicker component

## 1.0.0 2026-03-06

- Delete any i18n initialization
- Provide registerSomEnergiaI18n to add lib translations to main project i18n instance
- Storybook runs i18n.init
- Change all useTranslation to own hook
- Some ESLint fixes
- Normalize component names.
- Upgrade @mui dependencies
- Fix peerDependencies.
- Change deps versions to static versions. This helps somenergia-ui's developers have the same snapshot of the project.
- Remove cypress dependency; these are not used.
- Update SomDatePicker to be compatible with other projects
- Adapt ConsumptionDislay to different types of date
- Fix mui imports

## 0.6.0 2025-06-11

- New: Loading

## 0.5.4 2025-03-14

- Fix: TableHead error whne click

## 0.5.3 2025-03-14

- Fix: TableEditor error when second click

## 0.5.2 2025-01-23

- Add Displaced paramter to curve label

## 0.5.1 2024-11-16

- Fix: remove unused parameters from formatTooltipLabel

## 0.5.0 2024-10-10

- Theming components taken from somrepre-oficinavirtual
  - GlobalTheming: A wrapper to reset css, set the global theme,
    and control the color mode (light/dark)
    - Renamed SomRepre GlobalTheme -> GlobalTheming
    - Added a customTheme attribute to inject other than SomEnergia
  - Fix: SomEnergiaTheme was not properly exported
  - LocalStorage hook to set and depend on shared LocalStorage data
  - ColorModeButton: A button to toggle the color mode

## 0.4.10 2024-06-27

- Fix dependencies recharts-scale

## 0.4.9 2024-06-27

- Remove minimum Yaxis value validation
  - When average is grater than maximum value and
    minimum is possitive, minimum Y axis should be 0

## 0.4.8 2024-06-26

- Force 0 value in Y axis when negative values

## 0.4.7 2024-06-14

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

## 0.4.6 2024-06-10

- CustomToolTip
  - Fix: Add alpha channel, and set to 1, to avoid opacity

## 0.4.5 2024-05-17

- CustomToolTip
  - Fix: Use `,` as default decimal separator

## 0.4.4 2024-05-10

- SomDatePicker
  - Parameterize styles

## 0.4.3 2024-04-29

- Chart
  - Parameterize tickcounter and max yAxis value
- Date picker
  - Fix: add min width

## 0.4.2 2024-04-25

- Build:
  - Fix: Add missing `devDependencies`
  - Fix: node version github action

- Chart
  - Fix: Parameterize decimal separator establishing `,` as default value

## 0.4.1 2024-04-16

- Fix: formatDecimal with 2 decimals by default
  parametrized

## 0.4.0 2024-04-15

- New component: SomDatePicker
- New component: DizzyError (cuca marejada)
- New component: SumPricesDisplay
- Chart: added reference lines
- Chart: added custom legend
- Cypress test for SomDatePicker

## 0.3.2 2024-03-25

- BarChart changes:
  - Bars between x lines
  - Changes in tooltip (add possibility to hide the keys in tooltip)
  - Enable to pass the Y legend

## 0.3.1 2024-02-20

- Fix: chart tooltip for 0 values

## 0.3.0 2024-02-13

- New component: Chart
- New components: SumDisplay

## 0.2.0 2024-01-11

- New component SnackbarMessages
- New service: messages

## 0.1.7 2024-01-03

- Fix: proptypes required -> isRequired
- Docs: how to add dependencies

## 0.1.6 2023-12-30

- Fixed duplication of modules causing multiple problems
  - Translations on production build disappeared due to duplicated i18next-react instance
  - In some occasions react simbols were not found
- TableEditor:
  - Singular texts for filter and selected items
  - Breaking change: noDataPlaceHolder should not include TR/TD wrapping
  - Pagination moved back down
  - Catalan translation

## 0.1.5 2023-12-29

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

## 0.1.4 2023-12-28

- Packaging metadata
- Fix: Actual files not included in package
- Fix: dependnecies have to be dev and peer

## 0.1.1 2023-12-28

- Packaging corrections

## 0.1.0 2023-12-28

- First version
- Includes components: Loading and TableEditor from somrepresenta-oficinavirtual
- Manages translations and themes

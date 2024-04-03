import React from 'react'
import SomDatePicker from './index'
import dayjs from 'dayjs'

export default function SimpleCase({ initial = '2020-02-02', ...props }) {
  const [date, setDate] = React.useState(dayjs(initial))

  return (
    <>
      <SomDatePicker currentTime={date} setCurrentTime={setDate} {...props} />
      <div data-cy="result">{dayjs(date).toISOString()}</div>
    </>
  )
}
const day = '2024-01-01T00:00:00.000+01:00'
const nextDay = '2024-01-02T00:00:00.000+01:00'
const prevDay = '2023-12-31T00:00:00.000+01:00'
const dayUTC = '2023-12-31T23:00:00.000Z'

describe('<SomDatePicker />', () => {
  it('renders', () => {
    cy.mount(<SimpleCase />)
  })
  describe('day scope', () => {
    it('takes pure date (no time) as local', () => {
      cy.mount(<SimpleCase initial="2024-01-01" />)
      cy.get('[data-cy="result"]').should('contain.text', dayUTC)
    })
    /*
  // TODO: We don't know whether we are controling this in the user code
  it('takes date with time and moves to 00:00', () => {
    cy.mount(<SimpleCase initial="2020-02-02T10:00" />)
    cy.get('[data-cy="result"]').should('contain.text', dayUTC)
  })
  */
    it('advances date when next button clicked', () => {
      cy.mount(<SimpleCase initial={day} />)
      cy.get('[data-cy="next-button"]').click()
      cy.get('[data-cy="result"]').should('contain.text', '2024-01-01T23:00:00.000Z')
    })
    it('goes back a day when prev button clicked', () => {
      cy.mount(<SimpleCase initial={day} />)
      cy.get('[data-cy="prev-button"]').click()
      cy.get('[data-cy="result"]').should('contain.text', '2023-12-30T23:00:00.000Z')
    })
    it('does not goes back beyond first date when next button clicked', () => {
      cy.mount(<SimpleCase initial={day} firstDate={'2024-01-01'} />)
      cy.get('[data-cy="prev-button"]').click()
      cy.get('[data-cy="result"]').should('contain.text', dayUTC)
    })
    it('does not advance beyond last date when next button clicked', () => {
      cy.mount(<SimpleCase initial={day} lastDate={'2024-01-01'} />)
      cy.get('[data-cy="next-button"]').click()
      cy.get('[data-cy="result"]').should('contain.text', dayUTC)
    })
  })
  describe('month scope', () => {
    it('takes first of month as local', () => {
      cy.mount(<SimpleCase initial="2024-01-01" />)
      cy.get('[data-cy="result"]').should('contain.text', dayUTC)
    })
    /*
    it('takes date within month', () => {
      cy.mount(<SimpleCase initial="2020-01-03T10:00" />)
      cy.get('[data-cy="result"]').should('contain.text', dayUTC)
    })
    */
    it('advances month when next button clicked', () => {
      cy.mount(<SimpleCase period={'MONTHLY'} initial={day} />)
      cy.get('[data-cy="next-button"]').click()
      cy.get('[data-cy="result"]').should('contain.text', '2024-01-31T23:00:00.000Z')
    })
    it('goes back a month when prev button clicked', () => {
      cy.mount(<SimpleCase period={'MONTHLY'} initial={day} />)
      cy.get('[data-cy="prev-button"]').click()
      cy.get('[data-cy="result"]').should('contain.text', '2023-11-30T23:00:00.000Z')
    })
    it('does not goes back beyond first date when next button clicked', () => {
      cy.mount(<SimpleCase period={'MONTHLY'} initial={day} firstDate={'2024-01-01'} />)
      cy.get('[data-cy="prev-button"]').click()
      cy.get('[data-cy="result"]').should('contain.text', dayUTC)
    })
    it('does not advance beyond last date when next button clicked', () => {
      cy.mount(<SimpleCase period={'MONTHLY'} initial={day} lastDate={'2024-01-01'} />)
      cy.get('[data-cy="next-button"]').click()
      cy.get('[data-cy="result"]').should('contain.text', dayUTC)
    })
  })
  describe('year scope', () => {
    it('takes first of year as local', () => {
      cy.mount(<SimpleCase initial="2024-01-01" />)
      cy.get('[data-cy="result"]').should('contain.text', dayUTC)
    })
    it('advances year when next button clicked', () => {
      cy.mount(<SimpleCase period={'YEARLY'} initial={day} />)
      cy.get('[data-cy="next-button"]').click()
      cy.get('[data-cy="result"]').should('contain.text', '2024-12-31T23:00:00.000Z')
    })
    it('goes back a year when prev button clicked', () => {
      cy.mount(<SimpleCase period={'YEARLY'} initial={day} />)
      cy.get('[data-cy="prev-button"]').click()
      cy.get('[data-cy="result"]').should('contain.text', '2022-12-31T23:00:00.000Z')
    })
    it('does not goes back beyond first date when next button clicked', () => {
      cy.mount(<SimpleCase period={'YEARLY'} initial={day} firstDate={'2024-01-01'} />)
      cy.get('[data-cy="prev-button"]').click()
      cy.get('[data-cy="result"]').should('contain.text', dayUTC)
    })
    it('does not advance beyond last date when next button clicked', () => {
      cy.mount(<SimpleCase period={'YEARLY'} initial={day} lastDate={'2024-01-01'} />)
      cy.get('[data-cy="next-button"]').click()
      cy.get('[data-cy="result"]').should('contain.text', dayUTC)
    })
  })
  describe('week scope', () => {
    it('takes first of week as local', () => {
      cy.mount(<SimpleCase initial="2024-01-01" />)
      cy.get('[data-cy="result"]').should('contain.text', dayUTC)
    })
    it('advances week when next button clicked', () => {
      cy.mount(<SimpleCase period={'WEEKLY'} initial={day} />)
      cy.get('[data-cy="next-button"]').click()
      cy.get('[data-cy="result"]').should('contain.text', '2024-01-07T23:00:00.000Z')
    })
    it('goes back a week when prev button clicked', () => {
      cy.mount(<SimpleCase period={'WEEKLY'} initial={day} />)
      cy.get('[data-cy="prev-button"]').click()
      cy.get('[data-cy="result"]').should('contain.text', '2023-12-24T23:00:00.000Z')
    })
    it('does not goes back beyond first date when next button clicked', () => {
      cy.mount(<SimpleCase period={'WEEKLY'} initial={day} firstDate={'2024-01-01'} />)
      cy.get('[data-cy="prev-button"]').click()
      cy.get('[data-cy="result"]').should('contain.text', dayUTC)
    })
    it('does not advance beyond last date when next button clicked', () => {
      cy.mount(<SimpleCase period={'WEEKLY'} initial={day} lastDate={'2024-01-01'} />)
      cy.get('[data-cy="next-button"]').click()
      cy.get('[data-cy="result"]').should('contain.text', dayUTC)
    })
  })
})

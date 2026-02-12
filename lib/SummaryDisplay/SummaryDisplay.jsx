import styled from 'styled-components'

const Wrapper = styled.div`
  color: ${(props) => (props.color === 'primary' ? '#96b633' : '#f2970f')};
  justify-content: flex-end;
  display: flex;
  gap: 0.6em;
  align-items: center;
`
const Value = styled.div`
  font-size: 2.2rem;
  font-weight: 800;
  white-space: nowrap;
  align-items: baseline;
  display: flex;
  gap: 0.2em;
  div:last-child {
    font-weight: 400;
    font-size: 2rem;
  }
`
const Detail = styled.div`
  font-size: 1rem;
  font-weight: 500;
  padding: 0 4px 0 8px;
  line-height: 1.2rem;
  .title {
    color: #616161;
  }
  div {
    white-space: nowrap;
  }
`
export default function SummaryDisplay(props) {
  const {
    value,
    valueUnit,
    title,
    description,
    color = 'primary',
  } = props

  const formatValue = (value) => {
    return Number.isNaN(value)
      ? value
      : new Intl.NumberFormat('es').format(value)
  }

  return (<>
    <Wrapper color={color}>
      <Value>
        <div>{value ? formatValue(value) : '—'}</div>
        <div>{valueUnit}</div>
      </Value>
      <Detail>
        <div className="title">{title}</div>
        <div>{description}</div>
      </Detail>
    </Wrapper>
  </>)
}

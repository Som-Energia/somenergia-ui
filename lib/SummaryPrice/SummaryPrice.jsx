import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 2px 4px;
  color: '#4D4D4D';
  align-items: center;
  text-align: center;
  flex: 1;
`
const Value = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  padding: 0 4px 0 8px;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  .units {
    font-size: 0.8rem;
  }
`
const Detail = styled.div`
  font-size: 0.7rem;
  font-weight: 700;
  padding: 4px 4px 0 8px;
  line-height: 1.2rem;
  .title {
    color: #616161;
  }
  div {
    white-space: nowrap;
  }
`

function SummaryPrice(props) {
  const { value, unit, description } = props
  return (
    <Wrapper>
      <Value>
        <span>{value}</span>
        <span className="units">{unit}</span>
      </Value>
      <Detail>
        <div>{description}</div>
      </Detail>
    </Wrapper>
  )
}

export default SummaryPrice

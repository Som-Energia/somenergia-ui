import React from 'react'
import styled from 'styled-components'

const CounterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CounterBox = styled.div`
  border-width: 0 1px 0 0;
  border-radius: 0px;
  border-style: solid;
  padding: 4px 8px;
  color: '#4D4D4D';
  align-items: center;
  text-align: center;
  flex: 1;
`

const CounterValue = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  padding: 0 4px 0 8px;;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  .units { 
    font-size: 0.8rem;
  }
`

const CounterDetail = styled.div`
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

function Total(props) {
  const { value, description} = props
  return (
      <CounterBox>
        <CounterValue>
          <span>{value}</span>
          <span className="units">€/kWh</span>
        </CounterValue>
        <CounterDetail>
          <div className="">{description}</div>
        </CounterDetail>
      </CounterBox>
  )
}

export default Total

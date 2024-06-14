import React from 'react'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { ActionsType } from './proptypes'

export default function ActionButtons(props) {
  const { actions, context, ...rest } = props
  return (
    <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'right' }}>
      {actions.map((action, i) => {
        return action.view ? (
          <React.Fragment key={i}>{action.view(context)}</React.Fragment>
        ) : (
          <Tooltip title={action.title} key={i}>
            <IconButton
              {...rest}
              onClick={(ev) => {
                ev.stopPropagation()
                action.handler && action.handler(context)
              }}
            >
              {action.icon}
            </IconButton>
          </Tooltip>
        )
      })}
    </div>
  )
}
ActionButtons.propTypes = {
  actions: ActionsType,
}

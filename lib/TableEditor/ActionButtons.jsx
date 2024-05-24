import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

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
const ActionsType = PropTypes.arrayOf(
  PropTypes.shape({
    /** The tooltip text of the option*/
    title: PropTypes.string.isRequired,
    /** an icon for the action icon button */
    icon: PropTypes.element,
    /** handler: function to be called with the subject as parameter */
    handler: PropTypes.func,
    /** functor receiving the context and returning an alternative for the default icon button */
    view: PropTypes.func,
  }),
)
ActionButtons.propTypes = {
  actions: ActionsType,
}

export {ActionsType}

import PropTypes from 'prop-types'

export default const ActionsType = PropTypes.arrayOf(
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


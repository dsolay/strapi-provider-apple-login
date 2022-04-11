/**
 *
 * Initializer
 *
 */

import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import pluginId from '../../pluginId'

const Initializer = ({ setPlugin }) => {
  const reference = useRef()
  reference.current = setPlugin

  useEffect(() => {
    reference.current(pluginId)
  }, [])

  return null
}

Initializer.propTypes = {
  setPlugin: PropTypes.func.isRequired,
}

export default Initializer

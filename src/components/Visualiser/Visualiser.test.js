import React from 'react'
import {render} from '@testing-library/react'

import Visualiser from './index'

describe('<Visualiser />', () => {

    it('Renders the page title', () => {
        const {getByText} = render(<Visualiser />)

        expect(getByText('Visualiser')).toBeInTheDocument()
    })

    it('Renders a data event', () => {
        // Mock an data-tray item and pass in props
        // Expect the name and url .toBeInTheDocument()
        // RTL doesn't create a window so won't be able to check position
        // Could mock the window object or use automated browser testing such as selenium

        // Use find by all to check for multiple items after x time
    })

})

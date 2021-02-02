// tslint:disable: no-implicit-dependencies
import {render} from '@testing-library/react'
import React from 'react'
import {ErrorBoundary} from '../'

describe('STATELESS - <ErrorBoundary />', () => {
  it.skip('will render', () => {
    const {container} = render(<ErrorBoundary fallback={<p>Loading...</p>}/>)

    expect(container).toMatchSnapshot()
  })
})

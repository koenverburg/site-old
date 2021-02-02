/* tslint:disable no-implicit-dependencies */
import React from 'react'
import App from '../pages/index'
import {render, RenderResult} from '@testing-library/react'
import {SignOff} from '../components/SignOff'
import {Article} from '../features/Article'
import {Footer} from '../features/Footer'
import {MockedProvider} from '@apollo/client/testing'
import {rootQuery} from '../rootQuery'

describe('App component', () => {
  let wrapper: RenderResult

  beforeAll(() => {
    const mocks = [
      {
        request: {
          query: rootQuery  ,
          variables: {},
        },
        result: {
          data: {
            // dog: { id: '1', name: 'Buck', breed: 'bulldog' },
          },
        },
      },
    ]

    wrapper = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    )
  })

  it.skip('render', () => {
    expect(wrapper.container).toMatchSnapshot()
  })

  it.skip('should render a luckynumber componennt', () => {
    // const luckynumber = wrapper.container.firstElementChild.quer

    // expect(luckynumber).toBeDefined()
  })

  it.skip('should render a main element', () => {
    const mainEl =  wrapper.getElement()

    expect(mainEl).toBeDefined()
  })

  it.skip('the content section should include a Article component', () => {
    const articleComp = wrapper.find(Article)

    expect(articleComp).toBeDefined()
  })

  it.skip('the content section should include a Footer component', () => {
    const footerComp = wrapper.find(Footer)

    expect(footerComp).toBeDefined()
  })

  it.skip('the content section should include a SignOff component', () => {
    const signOffComp = wrapper.find(SignOff)

    expect(signOffComp).toBeDefined()
  })
})

import React, { Component } from 'react'
import { Header, Accordion, Icon, List, Message, Button } from 'semantic-ui-react'

export default class Dashboard extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (

      <div className="container" >

        <Header size='huge'>Congratulations on Executing your First Smart Contract</Header>

        <p>Now that you have made your first purchase into the AOC system we want to teach you how to explore the blockchain, and trace where the ETH you just sent went.</p>
        <br />

        <h4>Why do we want to do this?</h4>
        <p>We want to empower you with the new tools blockchain technology offers so that you can see how this business operates and make your own judgement on how this system operates.</p>
        <p>We believe all businesses, charities, governments should operate with this technology, as we think it’s the best way for people to make their own judgement and work out if they want to participate or not.</p>







      </div >
    )
  }
}
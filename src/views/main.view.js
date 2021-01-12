import React, { Component} from 'react';

import Heading from '../components/Heading.component'
import LinkContainer from '../components/LinkContainer.component'

class Main extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <div className="">
                    <Heading title="KIMIN LEE" font_size="140px" hover={false} index="1"/>
                    <section id="background">
                        <LinkContainer height="25vh" color="#f9e1e0" link="https://www.linkedin.com/in/thekiminlee"/>                        
                        <LinkContainer height="10vh" color="#feadb9" link="https://www.linkedin.com/in/thekiminlee"/>
                        <LinkContainer height="10vh" color="#bc85a3" link="https://www.linkedin.com/in/thekiminlee"/>                        
                        <LinkContainer height="10vh" color="#9dabdd" link="https://www.linkedin.com/in/thekiminlee"/>
                        <LinkContainer height="10vh" color="#9799ba" link="https://www.linkedin.com/in/thekiminlee"/>
                    </section>
                </div>
            </div>
        )
    }
}

export default Main;
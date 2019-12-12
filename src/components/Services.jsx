import React, { Component } from 'react';
import Title from './Title';
import { FaMountain, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaMountain/>,
                title: 'Fresh Air',
                info: 'Located in a forest, you can enjoy the fresh air from the mountains'
            },
            {
                icon: <FaHiking/>,
                title: 'Hiking',
                info: 'Free mountain trails!'
            },
            {
                icon: <FaShuttleVan/>,
                title: 'Free shuttle',
                info: 'Free cocktails on arrive, lorem ipsum, lorem ipsum. Thanks!'
            },
            {
                icon: <FaBeer/>,
                title: 'Strongest Beer',
                info: 'Free beer on arrive, lorem ipsum, lorem ipsum. Thanks!'
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services'/>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return(
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>)
                    })}
                </div>
            </section>
        )
    }
}

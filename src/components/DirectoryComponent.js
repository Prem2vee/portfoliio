import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            works: [
                {
                    id: 0,
                    name: 'Work & Pay Ltd',
                    image: 'assets/images/workpay.png',
                    description: "Corporate website which aims at connecting potential drivers to vehicle owners and also managing the relationship between both."
                },
                {
                    id: 1,
                    name: 'IdeaHub ',
                    image: 'assets/images/ideahub.png',
                    description: "In order not to loose traack of the various development ideas, this app is to track the progress made on development ideas. It could be modified as a national road-construction tracker."
                },
                {
                    id: 2,
                    name: 'Kadiocare',
                    image: 'assets/images/kardiocare.jpg',
                    description: "Project to track patients vitals while connecting directly with doctors and pharmacist for monitoring."
                },
                {
                    id: 3,
                    name: 'Yodem Credit Bureau',
                    image: 'assets/images/yodem.png',
                    description: "Credit Bureau system that assigns credit scores to citizens with the aim of reducing interest rates and buliding credibility."
                }
            ],
        };
    }
    render() {
        const directory = this.state.works.map(work => {
            return (
                <div key = {work.id} className="col-12">
                    <img src={work.image} alt={work.name} />
                    <h2>{work.name}</h2>
                    <p>{work.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}


export default Directory;
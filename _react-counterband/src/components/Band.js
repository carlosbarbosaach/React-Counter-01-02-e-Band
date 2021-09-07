import React, { Component } from 'react'

export default class Band extends Component {
    constructor() {
        super();

        this.state = {
            bandMembers: [
                {
                    id: 1,
                    name: 'Genesio',
                    instrument: 'Pandeiro',
                },
                {
                    id: 2,
                    name: 'Jandira',
                    instrument: 'Violao',
                },
                {
                    id: 3,
                    name: 'Bertina',
                    instrument: 'Gaita',
                }
            ],
        };
    }

    render() {
        const { bandName, bandMembers } = this.state;

        return (
            <div>
                <h4>{bandName}</h4>
                {bandMembers.map(({ id, name, instrument }) => {
                    return (<ul key={id}>
                        <li>{name} - {instrument}</li>
                    </ul>
                    );
                })}
            </div>
        );
    }
}

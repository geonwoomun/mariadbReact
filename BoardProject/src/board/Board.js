import React, { Component } from 'react';

class Board extends Component {
    state = {
        boards: [
            {
                brdno: 1,
                brdwriter : 'Lee Sin',
                brdtitle : 'If i die tommorrow',
                brddate : new Date()
            },
            {
                brdno : 2,
                brdwriter : 'Kennen',
                brdtitle : 'Founder for two countries',
                brddate : new Date()
            }
        ]
    }
    render() {
        const { boards } = this.state;
        const list = boards.map((row) => {
            return <li>{row.brdno + row.brdwriter}</li>;
        });

        return (
            <div>
                {list}        
            </div>
        );
    }
}

export default Board;

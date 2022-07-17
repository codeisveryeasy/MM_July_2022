import React from 'react';


class Rainbow extends React.Component {
    state = {}

    render() {
        return (
            <span>
                <span style={{ color: this.props.alphabetcolor }}>
                    {this.props.children}
                </span>
            </span>

        );
    }
}

export default Rainbow;
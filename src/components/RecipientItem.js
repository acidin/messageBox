/**
 * Created by ace on 11/10/16.
 */

import React, {Component, PropTypes} from 'react';

import Autocomplete from 'react-autocomplete';

import { getNames, matchNameToTerm, sortNames, styles, fakeRequest } from '../HardcodedData/namesData'

export default class RecipientItem extends Component {
    constructor(props) {
        super(props);

        this.state={
            loadedNames: getNames(),
            loading: false,
            value: ''
        }
    }

    render(){

        return <div>
            <label htmlFor="names-autocomplete">Choose a name or enter an valid e-mail</label>
            <Autocomplete
                inputProps={{name: "Recipient names", id: "names-autocomplete"}}
                ref="autocomplete"
                value={this.state.value}
                items={this.state.loadedNames}
                getItemValue={(item) => item.name}
                onSelect={(value, item) => {

                    /*console.log(value);
                    console.log(item);*/

                    this.setState({ value, loadedNames: [ item ]});

                    this.props.cbChangeRecipient(value, item.id);

                }}
                onChange={(event, value) => {
                    this.setState({ value, loading: true });
                    fakeRequest(value, (items) => {
                        this.setState({ loadedNames: items, loading: false/*, id: items[0].id*/ })
                    });

                }}
                renderItem={(item, isHighlighted) => (
                    <div
                        style={isHighlighted ? styles.highlightedItem : styles.item}
                        key={item.name}
                        id={item.id}
                    >{item.name}</div>
                )}
            />
        </div>
    }
}

RecipientItem.propTypes={
    cbChangeRecipient: PropTypes.func
}

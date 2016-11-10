/**
 * Created by ace on 11/10/16.
 */

export let styles = {
    item: {
        padding: '2px 6px',
        cursor: 'default'
    },

    highlightedItem: {
        color: 'white',
        background: 'hsl(200, 50%, 50%)',
        padding: '2px 6px',
        cursor: 'default'
    },

    menu: {
        border: 'solid 1px #ccc'
    }
}


export function matchNameToTerm (names, value) {
    return (
        names.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        names.id.toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
}

export function sortNames (a, b, value) {
    return (
        a.name.toLowerCase().indexOf(value.toLowerCase()) >
        b.name.toLowerCase().indexOf(value.toLowerCase()) ? 1 : -1
    )
}

export function fakeRequest (value, cb) {
    if (value === '')
        return getNames()
    var items = getNames().filter((name) => {
        return matchNameToTerm(name, value)
    })
    setTimeout(() => {
        cb(items)
    }, 500)
}


export function getNames() {
    return [
        { id: "john@me.com", name: "John"},
        { id: "michael@me.com", name: "Michael"},
        { id: "antony@me.com", name: "Antony"},
        { id: "sylvester@me.com", name: "Sylvester"},
        { id: "al@me.com", name: "Al"},
        { id: "donald@me.com", name: "Donald"},
        { id: "bill@me.com", name: "Bill"},
        { id: "helen@me.com", name: "Helen"},
        { id: "queen@me.com", name: "Queen"}
    ]
}
import React, { Component } from 'react'

import Pokemonlist from '../pokemon/PokemonList'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <Pokemonlist/>
                </div>
            </div>
        )
    }
}

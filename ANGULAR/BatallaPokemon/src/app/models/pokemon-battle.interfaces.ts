export interface PokemonBattleResponse {
    count: number
    next: string
    previous: any
    results: PokemonList[]
  }
  
  export interface PokemonList {
    hp: number
    name: string
    url: string
  }
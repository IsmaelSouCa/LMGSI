export interface RootWine {
    result: {
        wines: Wine[]
    }
}

export interface Wine {
    winery: string,
    wine: string,
    rating: {
        average: string,
        reviews: string
    },
    location: string,
    image: string,
    id: number
}

export interface WineDetails {
    id: number,
    winery: string,
    wine: string,
    rating: {
        average: string,
        reviews: string
    },
    location: string,
    image: string
}
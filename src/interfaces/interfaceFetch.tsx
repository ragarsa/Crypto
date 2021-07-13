export interface InitialData {
    CoinInfo: {
        Id: string;
        Name: string;
        FullName: string;
        ImageUrl: string;
    },
    DISPLAY: {
        MXN: { PRICE: number }
    }

}


export interface FetchData {
    Id: number;
    Name: string;
    FullName: string;
    Image: string;
    Price: number
}

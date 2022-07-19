export interface Resinstagram {
    data:   Datum[];
    paging: Paging;
}

export interface Datum {
    id:             string;
    caption:        string;
    media_type:     MediaType;
    media_url:      string;
    permalink:      string;
    thumbnail_url?: string;
    timestamp:      string;
    username:       Username;
}

export enum MediaType {
    CarouselAlbum = "CAROUSEL_ALBUM",
    Image = "IMAGE",
    Video = "VIDEO",
}

export enum Username {
    Raptorsvolleyclub = "raptorsvolleyclub",
}

export interface Paging {
    cursors: Cursors;
}

export interface Cursors {
    before: string;
    after:  string;
}

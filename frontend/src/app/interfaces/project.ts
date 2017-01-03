export interface lineValue {
    value: string;
}

export interface infoBlock {
    title: string;
    lines: lineValue[];
}

export interface project {
    img: string;
    title: string;
    category: string;
    id: string;
    summary: string;
    text: string;
    firstImg: string;
    workInProgress: boolean;
    replacedImgUrl: boolean;
    infoBlocks: infoBlock[];
    buttonHref: string;
    buttonLink: string;
}

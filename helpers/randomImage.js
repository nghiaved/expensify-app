import { randomImages } from "./assetImage";

export default function randomImage() {
    let min = 1;
    let max = 12;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomImages[random];
}
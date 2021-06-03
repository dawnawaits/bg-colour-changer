class Color {
    r: number;
    g: number;
    b: number;

    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    /**
     Converts rgb values to a string of format: rgb(r,g,b)
     */
    public toString() {
        return `rgb(${this.r},${this.g},${this.b})`;
    }
}

function changeColor(obj: HTMLElement) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    let color = new Color(r, g, b);
    obj.style.backgroundColor = color.toString();
}

window.onload = function () {
    let button = document.querySelector("#color-changer") as HTMLElement;
    button.addEventListener("click", () =>
        changeColor(document.querySelector("body") as HTMLElement)
    );
};

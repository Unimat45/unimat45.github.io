declare global {
    interface String {
        removeLastWord: () => string;
        getLastWord: () => string;
    }
}

String.prototype.removeLastWord = function () {
    const lastSpaceIdx = this.lastIndexOf(" ");
    if (lastSpaceIdx === -1) return this.slice();

    return this.substring(0, lastSpaceIdx);
};

String.prototype.getLastWord = function () {
    const lastSpaceIdx = this.lastIndexOf(" ");
    if (lastSpaceIdx === -1) return this.slice();

    return this.substring(lastSpaceIdx + 1);
};

export {};

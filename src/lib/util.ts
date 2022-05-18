export async function openFile(): Promise<any> {
    return new Promise((resolve, reject) => {
        let domNode = document.createElement("input");
        domNode.setAttribute("accept", "application/json");
        domNode.setAttribute("type", "file");

        domNode.addEventListener("change", async () => {
            resolve(await domNode.files![0].text());
        }, false);

        domNode.click();
    });
}
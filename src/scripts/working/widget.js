// widget.js
export function createWidget() {
    const widget = document.createElement('div');
    widget.innerHTML = `
      <h1 style="color: blue; font-family: Arial, sans-serif;">Hello</h1>
    `;
    return widget;
  }
export default function loadingComponent() {
    const wrapper = document.createElement('div');
    wrapper.className = 'message-container';

    wrapper.innerHTML = `
        <p>Loading...</p>
    `;

    return wrapper;
}
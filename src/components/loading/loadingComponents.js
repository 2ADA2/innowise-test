export default function loadingComponent() {
    const wrapper = document.createElement('div');
    wrapper.className = 'loading';

    wrapper.innerHTML = `
        <div class="loader"></div>
        <p>Loading...</p>
    `;

    return wrapper;
}
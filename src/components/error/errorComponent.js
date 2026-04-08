export default function errorComponent(message = 'Something went wrong') {
    const wrapper = document.createElement('div');
    wrapper.className = 'error';

    wrapper.innerHTML = `
        <p>❌ ${message}</p>
    `;

    return wrapper;
}
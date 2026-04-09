export default function notFoundComponent() {
    const wrapper = document.createElement('div');
    wrapper.className = 'message-container';

    wrapper.innerHTML = `
            <p>notFound!</p>
    `;

    return wrapper;
}
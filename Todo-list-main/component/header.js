import html from '../library/core.js'

function header() {
    return html`
                <header class="header">
                    <h1>To Do List</h1>
                    <input 
                        class="new-todo" 
                        placeholder="What needs to be done?" 
                        autofocus
                        onkeyup="event.keyCode === 13 && dispatch('add',this.value.trim())"
                    >
                </header>
            `
}

export default header
(async () => {
    const {values} = await import('./content.js');
    values.map(value => {
        let appender = `
            <div class="value">
                <h2>${value.header}</h2>
                <ul>
                    ${value.body
                        .map(bodyValue => 
                            `<li>${bodyValue}</li>
                        `)
                        .join('')
                    }
                </ul>
            </div>
        `
        
        document.body.insertAdjacentHTML('afterbegin', appender);
    });
})();

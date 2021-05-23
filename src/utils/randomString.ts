const randomString = (length: number) => {
    const alpha = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;

    let text = ``;
    for (let i = 0; i < length; i++) text += alpha.charAt(Math.floor(Math.random() * alpha.length));

    return text;
};

export default randomString;
